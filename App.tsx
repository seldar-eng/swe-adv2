
import React, { useState, useEffect, useCallback, useRef } from 'react';
import { GoogleGenAI, GenerateContentResponse } from "@google/genai";
import { GameScreen, WordPair, Level as LevelType } from './types';
import { LEVELS, AGENT_MESSAGES_DATA, shuffleArray } from './constants';
import GameHeader from './components/GameHeader';
import GameFooter from './components/GameFooter';
import Sidebar from './components/Sidebar';
import SupportAgent from './components/SupportAgent';
import ScreenWrapper from './components/ScreenWrapper';
import StartScreen from './components/StartScreen';
import WordMatchScreen from './components/WordMatchScreen';
import LevelCompleteScreen from './components/LevelCompleteScreen';
import GameOverScreen from './components/GameOverScreen';

// Ensure API_KEY is set in the environment. For local dev, can use a .env file and a bundler.
// For this environment, `process.env.API_KEY` is assumed to be available.
const API_KEY = process.env.API_KEY;
if (!API_KEY) {
  console.warn("API_KEY not found. Gemini features will be disabled.");
}


const App: React.FC = () => {
  const [ai, setAi] = useState<GoogleGenAI | null>(null);

  useEffect(() => {
    if (API_KEY) {
      try {
        setAi(new GoogleGenAI({ apiKey: API_KEY }));
      } catch (error) {
        console.error("Failed to initialize GoogleGenAI:", error);
      }
    }
  }, []);


  const [activeScreen, setActiveScreen] = useState<GameScreen>(GameScreen.Start);
  const [narratorMessage, setNarratorMessage] = useState<string>("Welcome to your Swedish Adventure!");
  const [agentMessage, setAgentMessage] = useState<string>(AGENT_MESSAGES_DATA.start);
  const [isAgentActive, setIsAgentActive] = useState<boolean>(true);

  const [currentScore, setCurrentScore] = useState<number>(0);
  const [currentLevelIndex, setCurrentLevelIndex] = useState<number>(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [currentLevelStarsEarned, setCurrentLevelStarsEarned] = useState<number>(0);
  
  const [currentQuestion, setCurrentQuestion] = useState<WordPair | null>(null);
  const [choices, setChoices] = useState<string[]>([]);
  const [isChoiceDisabled, setIsChoiceDisabled] = useState<boolean>(false);
  const [correctAnswerRevealed, setCorrectAnswerRevealed] = useState<string | null>(null);

  // Gemini Story Generation State
  const [gameOverStory, setGameOverStory] = useState<string | null>(null);
  const [isStoryLoading, setIsStoryLoading] = useState<boolean>(false);
  const [storyError, setStoryError] = useState<string | null>(null);
  
  // Ref to track if story has been fetched for current game over
  const storyFetchedRef = useRef(false);


  const updateSupportAgentMessage = useCallback((type: keyof typeof AGENT_MESSAGES_DATA, show: boolean = true) => {
    const messages = AGENT_MESSAGES_DATA[type];
    const message = Array.isArray(messages) ? messages[Math.floor(Math.random() * messages.length)] : messages;
    setAgentMessage(message);
    setIsAgentActive(show);
    if (show) {
        setTimeout(() => setIsAgentActive(false), 4000);
    }
  }, []);

  const loadQuestion = useCallback(() => {
    setIsChoiceDisabled(false);
    setCorrectAnswerRevealed(null);
    const level = LEVELS[currentLevelIndex];
    if (!level) {
        setActiveScreen(GameScreen.GameOver);
        storyFetchedRef.current = false; // Reset for new game over
        return;
    }

    if (currentQuestionIndex >= level.words.length) {
      setActiveScreen(GameScreen.LevelComplete);
      updateSupportAgentMessage('levelComplete');
      setNarratorMessage(`Bra jobbat! You completed Level ${currentLevelIndex + 1}!`);
      return;
    }

    const question = level.words[currentQuestionIndex];
    setCurrentQuestion(question);
    setNarratorMessage("What is this in Swedish?");
    // Image generation call removed

    let generatedChoices = [question.swedish];
    const incorrectWordsFromLevel = level.words
        .filter(word => word.swedish !== question.swedish)
        .map(word => word.swedish);
    
    let incorrectOptions = shuffleArray(incorrectWordsFromLevel);

    if (incorrectOptions.length < 2) {
        const allOtherSwedishWords = LEVELS
            .flatMap(l => l.words)
            .map(w => w.swedish)
            .filter(sw => sw !== question.swedish && !incorrectOptions.includes(sw));
        incorrectOptions.push(...shuffleArray([...new Set(allOtherSwedishWords)]).slice(0, 2 - incorrectOptions.length));
    }
    
    generatedChoices.push(...incorrectOptions.slice(0, 2));
    generatedChoices = [...new Set(generatedChoices)]; // Ensure unique choices

    // Ensure at least 2 choices, ideally 3. If still less, try to add more unique options.
    if (generatedChoices.length < 2 && question.swedish) {
        const allPossibleSwedish = shuffleArray([...new Set(LEVELS.flatMap(l => l.words).map(w => w.swedish))]);
        for (const word of allPossibleSwedish) {
            if (word !== question.swedish && !generatedChoices.includes(word)) {
                generatedChoices.push(word);
                if (generatedChoices.length >= 2) break;
            }
        }
    }
     // If only one choice (the correct one), it's impossible to play. Add a generic distractor.
    if (generatedChoices.length < 2 && question.swedish) {
       const distractors = ["Kanske?", "Inte jag"];
       for(const d of distractors){
           if(!generatedChoices.includes(d)){
               generatedChoices.push(d);
               if(generatedChoices.length >=2) break;
           }
       }
    }

    setChoices(shuffleArray(generatedChoices));
    setActiveScreen(GameScreen.WordMatch);
  }, [currentLevelIndex, currentQuestionIndex, updateSupportAgentMessage]);

  useEffect(() => {
    if (activeScreen === GameScreen.WordMatch) {
        loadQuestion();
    }
  }, [currentLevelIndex, currentQuestionIndex, activeScreen, loadQuestion]);


  const handleStartGame = () => {
    setCurrentScore(0);
    setCurrentLevelIndex(0);
    setCurrentQuestionIndex(0);
    setCurrentLevelStarsEarned(0);
    setNarratorMessage(LEVELS[0].narratorIntro);
    updateSupportAgentMessage('start');
    storyFetchedRef.current = false; // Reset story fetched flag
    setGameOverStory(null); // Clear previous story
    setStoryError(null);
    setTimeout(() => {
        setActiveScreen(GameScreen.WordMatch);
    }, 1500); 
  };
  
  const handleSelectLevel = (levelIdx: number) => {
    setCurrentLevelIndex(levelIdx);
    setCurrentQuestionIndex(0);
    setCurrentLevelStarsEarned(0); 
    setNarratorMessage(LEVELS[levelIdx].narratorIntro);
    updateSupportAgentMessage('start', true);
    storyFetchedRef.current = false; 
    setGameOverStory(null);
    setStoryError(null);
    setTimeout(() => {
        setActiveScreen(GameScreen.WordMatch);
    }, 1000);
  };

  const handleWordMatchChoice = (chosenWord: string) => {
    if (!currentQuestion) return;
    setIsChoiceDisabled(true);
    setCorrectAnswerRevealed(currentQuestion.swedish);

    if (chosenWord === currentQuestion.swedish) {
      setCurrentScore(prev => prev + 1);
      setCurrentLevelStarsEarned(prev => prev + 1);
      setNarratorMessage(`Ja! "${currentQuestion.english}" is "${currentQuestion.swedish}"!`);
      updateSupportAgentMessage('correct');
      setTimeout(() => {
        setCurrentQuestionIndex(prev => prev + 1);
      }, 2000); 
    } else {
      setNarratorMessage(`Inte riktigt. "${currentQuestion.english}" is "${currentQuestion.swedish}".`);
      updateSupportAgentMessage('incorrect');
      setTimeout(() => {
        setCurrentQuestionIndex(prev => prev + 1);
      }, 2500); 
    }
  };

  const handleNextLevel = () => {
    if (currentLevelIndex < LEVELS.length - 1) {
      setCurrentLevelIndex(prev => prev + 1);
      setCurrentQuestionIndex(0);
      setCurrentLevelStarsEarned(0);
      setNarratorMessage(LEVELS[currentLevelIndex + 1].narratorIntro);
      updateSupportAgentMessage('start');
       setTimeout(() => {
            setActiveScreen(GameScreen.WordMatch);
        }, 1000);
    } else {
      setActiveScreen(GameScreen.GameOver);
      storyFetchedRef.current = false;
      updateSupportAgentMessage('gameOver');
      setNarratorMessage("Grattis! You've completed all Swedish Adventures!");
    }
  };
  
  const handleGameOver = () => {
    setActiveScreen(GameScreen.GameOver);
    storyFetchedRef.current = false;
    updateSupportAgentMessage('gameOver');
    setNarratorMessage("Grattis! You've completed all Swedish Adventures!");
  };

  const handlePlayAgain = () => {
    handleStartGame();
  };

  useEffect(() => {
    setNarratorMessage(AGENT_MESSAGES_DATA.start);
    updateSupportAgentMessage('start', true);
  }, [updateSupportAgentMessage]);

  // Effect for fetching story on Game Over
  useEffect(() => {
    const fetchStory = async () => {
        if (!ai) {
          setStoryError("Story generation is unavailable.");
          return;
        }
        setIsStoryLoading(true);
        setStoryError(null);
        setGameOverStory(null);
        try {
            const prompt = "Write a very short (around 3-4 sentences), happy, and fun adventure story for two children named Lucas and Linus. They just finished learning some Swedish words. Include a friendly Swedish greeting like 'Hej hej!' or 'Grattis!'. Mention they are 'Swedish language heroes' or had a 'super fun Swedish adventure'.";
            const response: GenerateContentResponse = await ai.models.generateContent({
                model: "gemini-2.5-flash-preview-04-17",
                contents: prompt,
            });
            setGameOverStory(response.text);
        } catch (error) {
            console.error("Error generating story:", error);
            setStoryError("Oh no! The storyteller seems to be on a fika break. Couldn't write a story this time.");
        } finally {
            setIsStoryLoading(false);
        }
    };

    if (activeScreen === GameScreen.GameOver && !storyFetchedRef.current) {
        fetchStory();
        storyFetchedRef.current = true; // Mark as fetched for this game over instance
    }
  }, [activeScreen, ai]);


  return (
    <div className="flex flex-col justify-center items-center min-h-screen p-2 sm:p-3 md:p-5 box-border overflow-hidden">
      <div className="flex flex-col lg:flex-row w-full max-w-[1400px] h-auto lg:h-[95vh] gap-3 md:gap-5 p-3 md:p-5 box-border bg-white/20 rounded-[25px] shadow-2xl">
        <div className="flex-grow lg:flex-2 flex justify-center items-center p-0">
          <div className="bg-white rounded-[25px] shadow-2xl border-4 border-white/60 p-4 sm:p-6 md:p-8 w-full h-full text-center flex flex-col min-h-[600px] lg:min-h-full relative overflow-hidden">
            <GameHeader narratorMessage={narratorMessage} />
            <main id="game-area" className="flex-grow flex flex-col justify-center items-center relative w-full h-full py-5">
              <ScreenWrapper isActive={activeScreen === GameScreen.Start} testId="start-screen">
                <StartScreen onStart={handleStartGame} />
              </ScreenWrapper>
              <ScreenWrapper isActive={activeScreen === GameScreen.WordMatch} testId="word-match-screen">
                {currentQuestion && choices.length > 0 && (
                  <WordMatchScreen
                    currentQuestion={currentQuestion}
                    choices={choices}
                    onChoiceSelected={handleWordMatchChoice}
                    questionNumber={currentQuestionIndex + 1}
                    totalQuestions={LEVELS[currentLevelIndex]?.words.length || 0}
                    isChoiceDisabled={isChoiceDisabled}
                    correctAnswer={correctAnswerRevealed}
                  />
                )}
              </ScreenWrapper>
              <ScreenWrapper isActive={activeScreen === GameScreen.LevelComplete} testId="level-complete-screen">
                <LevelCompleteScreen
                  levelNumber={currentLevelIndex + 1}
                  levelScore={currentLevelStarsEarned}
                  onNextLevel={handleNextLevel}
                  isLastLevel={currentLevelIndex >= LEVELS.length - 1}
                  onGameOver={handleGameOver}
                />
              </ScreenWrapper>
              <ScreenWrapper isActive={activeScreen === GameScreen.GameOver} testId="game-over-screen">
                <GameOverScreen 
                    finalScore={currentScore} 
                    onPlayAgain={handlePlayAgain}
                    story={gameOverStory}
                    isStoryLoading={isStoryLoading}
                    storyError={storyError}
                />
              </ScreenWrapper>
            </main>
            <GameFooter />
          </div>
        </div>

        <Sidebar 
            totalScore={currentScore} 
            currentLevelDisplay={currentLevelIndex + 1}
            levels={LEVELS}
            onSelectLevel={handleSelectLevel}
        />
      </div>
      <SupportAgent message={agentMessage} isActive={isAgentActive} />
       {!API_KEY && (
        <div className="fixed top-2 left-1/2 transform -translate-x-1/2 bg-red-500 text-white p-2 rounded-md shadow-lg text-xs z-[200]">
          Gemini API features are disabled (API_KEY not configured).
        </div>
      )}
    </div>
  );
};

export default App;