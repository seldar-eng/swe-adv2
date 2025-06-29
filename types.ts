
export interface WordPair {
  english: string;
  swedish: string;
}

export interface Level {
  id: string; // Added for key prop
  name: string;
  narratorIntro: string;
  words: WordPair[];
}

export enum GameScreen {
  Start,
  WordMatch,
  LevelComplete,
  GameOver,
}

export interface AgentMessages {
  start: string;
  correct: string[];
  incorrect: string[];
  levelComplete: string[];
  gameOver: string[];
}
