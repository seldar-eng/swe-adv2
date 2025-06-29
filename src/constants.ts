import { Level, AgentMessages } from './types';

export const LEVELS: Level[] = [
    { id: "level1", name: "Welcome Words", narratorIntro: "Välkommen! Let's learn some friendly Swedish words!", words: [ { english: "Hello", swedish: "Hej" }, { english: "Thank you", swedish: "Tack" }, { english: "Yes", swedish: "Ja" }, { english: "No", swedish: "Nej" }, { english: "Please", swedish: "Snälla" } ] },
    { id: "level2", name: "Color Fun", narratorIntro: "Time to learn some colorful Swedish words!", words: [ { english: "Red", swedish: "Röd" }, { english: "Blue", swedish: "Blå" }, { english: "Green", swedish: "Grön" }, { english: "Yellow", swedish: "Gul" }, { english: "Black", swedish: "Svart" }, { english: "White", swedish: "Vit" } ] },
    { id: "level3", name: "Animal Friends", narratorIntro: "Meet some cute Swedish animal friends!", words: [ { english: "Dog", swedish: "Hund" }, { english: "Cat", swedish: "Katt" }, { english: "Bird", swedish: "Fågel" }, { english: "Horse", swedish: "Häst" }, { english: "Cow", swedish: "Ko" } ] },
    { id: "level4", name: "Delicious Food", narratorIntro: "Let's talk about yummy Swedish food!", words: [ { english: "Apple", swedish: "Äpple" }, { english: "Milk", swedish: "Mjölk" }, { english: "Bread", swedish: "Bröd" }, { english: "Water", swedish: "Vatten" }, { english: "Fish", swedish: "Fisk" }, { english: "Ice cream", swedish: "Glass" } ] },
    { id: "level5", name: "On the Go", narratorIntro: "How do we get around in Swedish?", words: [ { english: "Car", swedish: "Bil" }, { english: "Bus", swedish: "Buss" }, { english: "Bicycle", swedish: "Cykel" }, { english: "Boat", swedish: "Båt" }, { english: "Train", swedish: "Tåg" } ] },
    { id: "level6", name: "Everyday Objects", narratorIntro: "Let's learn about things around us!", words: [ { english: "Ball", swedish: "Boll" }, { english: "Book", swedish: "Bok" }, { english: "House", swedish: "Hus" }, { english: "Tree", swedish: "Träd" }, { english: "Chair", swedish: "Stol" }, { english: "Table", swedish: "Bord" } ] },
    { id: "level7", name: "Numbers 1-5", narratorIntro: "Let's count from one to five in Swedish!", words: [ { english: "One", swedish: "Ett" }, { english: "Two", swedish: "Två" }, { english: "Three", swedish: "Tre" }, { english: "Four", swedish: "Fyra" }, { english: "Five", swedish: "Fem" } ] },
    { id: "level8", name: "Numbers 6-10", narratorIntro: "Counting higher, from six to ten!", words: [ { english: "Six", swedish: "Sex" }, { english: "Seven", swedish: "Sju" }, { english: "Eight", swedish: "Åtta" }, { english: "Nine", swedish: "Nio" }, { english: "Ten", swedish: "Tio" } ] },
    { id: "level9", name: "Numbers 11-15", narratorIntro: "Keep counting! Eleven to fifteen!", words: [ { english: "Eleven", swedish: "Elva" }, { english: "Twelve", swedish: "Tolv" }, { english: "Thirteen", swedish: "Tretton" }, { english: "Fourteen", swedish: "Fjorton" }, { english: "Fifteen", swedish: "Femton" } ] },
    { id: "level10", name: "Numbers 16-20", narratorIntro: "Let's count from sixteen to twenty!", words: [ { english: "Sixteen", swedish: "Sexton" }, { english: "Seventeen", swedish: "Sjutton" }, { english: "Eighteen", swedish: "Arton" }, { english: "Nineteen", swedish: "Nitton" }, { english: "Twenty", swedish: "Tjugo" } ] },
    { id: "level11", name: "Numbers 21-25", narratorIntro: "Counting from twenty-one to twenty-five!", words: [ { english: "Twenty-one", swedish: "Tjugoett" }, { english: "Twenty-two", swedish: "Tjugotvå" }, { english: "Twenty-three", swedish: "Tjugotre" }, { english: "Twenty-four", swedish: "Tjugofyra" }, { english: "Twenty-five", swedish: "Tjugofem" } ] },
    { id: "level12", name: "Numbers 26-30", narratorIntro: "Almost to thirty! Twenty-six to thirty!", words: [ { english: "Twenty-six", swedish: "Tjugosex" }, { english: "Twenty-seven", swedish: "Tjugosju" }, { english: "Twenty-eight", swedish: "Tjugoåtta" }, { english: "Twenty-nine", swedish: "Tjugonio" }, { english: "Thirty", swedish: "Trettio" } ] },
    { id: "level13", name: "Emotions", narratorIntro: "How are you feeling in Swedish?", words: [ { english: "Happy", swedish: "Glad" }, { english: "Sad", swedish: "Ledsen" }, { english: "Angry", swedish: "Arg" }, { english: "Sleepy", swedish: "Trött" }, { english: "Excited", swedish: "Spänd" } ] },
    { id: "level14", name: "Buildings", narratorIntro: "Let's discover Swedish buildings!", words: [ { english: "School", swedish: "Skola" }, { english: "Shop", swedish: "Butik" }, { english: "Library", swedish: "Bibliotek" }, { english: "Hospital", swedish: "Sjukhus" }, { english: "Church", swedish: "Kyrka" } ] },
    { id: "level15", name: "Farm Friends", narratorIntro: "More farm animals in Swedish!", words: [ { english: "Sheep", swedish: "Får" }, { english: "Pig", swedish: "Gris" }, { english: "Chicken", swedish: "Kyckling" }, { english: "Duck", swedish: "Anka" }, { english: "Goat", swedish: "Get" } ] },
    { id: "level16", name: "Wild Animals", narratorIntro: "Meet some wild Swedish creatures!", words: [ { english: "Lion", swedish: "Lejon" }, { english: "Elephant", swedish: "Elefant" }, { english: "Monkey", swedish: "Apa" }, { english: "Bear", swedish: "Björn" }, { english: "Tiger", swedish: "Tiger" } ] },
    { id: "level17", name: "Sea Animals", narratorIntro: "Dive into Swedish sea words!", words: [ { english: "Fish", swedish: "Fisk" }, { english: "Dolphin", swedish: "Delfin" }, { english: "Whale", swedish: "Val" }, { english: "Shark", swedish: "Haj" }, { english: "Octopus", swedish: "Bläckfisk" } ] },
    { id: "level18", name: "Fruits", narratorIntro: "Sweet Swedish fruits!", words: [ { english: "Banana", swedish: "Banan" }, { english: "Orange", swedish: "Apelsin" }, { english: "Grape", swedish: "Vindruva" }, { english: "Strawberry", swedish: "Jordgubbe" }, { english: "Pear", swedish: "Päron" } ] },
    { id: "level19", name: "Vegetables", narratorIntro: "Healthy Swedish veggies!", words: [ { english: "Carrot", swedish: "Morot" }, { english: "Potato", swedish: "Potatis" }, { english: "Tomato", swedish: "Tomat" }, { english: "Broccoli", swedish: "Broccoli" }, { english: "Pea", swedish: "Ärt" } ] },
    { id: "level20", name: "Clothes", narratorIntro: "What are you wearing in Swedish?", words: [ { english: "Shirt", swedish: "Skjorta" }, { english: "Pants", swedish: "Byxor" }, { english: "Dress", swedish: "Klänning" }, { english: "Hat", swedish: "Hatt" }, { english: "Shoes", swedish: "Skor" } ] },
    { id: "level21", name: "Family", narratorIntro: "Learn your Swedish family words!", words: [ { english: "Mom", swedish: "Mamma" }, { english: "Dad", swedish: "Pappa" }, { english: "Sister", swedish: "Syster" }, { english: "Brother", swedish: "Bror" }, { english: "Grandpa (maternal)", swedish: "Morfar" } ] },
    { id: "level22", name: "Body Parts", narratorIntro: "Point to your body parts in Swedish!", words: [ { english: "Eye", swedish: "Öga" }, { english: "Ear", swedish: "Öra" }, { english: "Nose", swedish: "Näsa" }, { english: "Mouth", swedish: "Mun" }, { english: "Hair", swedish: "Hår" } ] },
    { id: "level23", name: "Weather", narratorIntro: "What's the weather like in Swedish?", words: [ { english: "Sun", swedish: "Sol" }, { english: "Rain", swedish: "Regn" }, { english: "Snow", swedish: "Snö" }, { english: "Cloud", swedish: "Moln" }, { english: "Rainbow", swedish: "Regnbåge" } ] },
    { id: "level24", name: "Seasons", narratorIntro: "The seasons in Swedish!", words: [ { english: "Spring", swedish: "Vår" }, { english: "Summer", swedish: "Sommar" }, { english: "Autumn", swedish: "Höst" }, { english: "Winter", swedish: "Vinter" }, { english: "Season", swedish: "Årstid" } ] },
    { id: "level25", name: "Actions", narratorIntro: "What can you do in Swedish?", words: [ { english: "Run", swedish: "Springa" }, { english: "Jump", swedish: "Hoppa" }, { english: "Eat", swedish: "Äta" }, { english: "Sleep", swedish: "Sova" }, { english: "Play", swedish: "Leka" } ] },
    { id: "level26", name: "School Objects", narratorIntro: "Things you find at school in Swedish!", words: [ { english: "Pencil", swedish: "Penna" }, { english: "Backpack", swedish: "Ryggsäck" }, { english: "Desk", swedish: "Skrivbord" }, { english: "Eraser", swedish: "Suddgummi" }, { english: "Scissors", swedish: "Sax" } ] },
    { id: "level27", name: "Kitchen Objects", narratorIntro: "What's in the Swedish kitchen?", words: [ { english: "Plate", swedish: "Tallrik" }, { english: "Cup", swedish: "Kopp" }, { english: "Fork", swedish: "Gaffel" }, { english: "Spoon", swedish: "Sked" }, { english: "Knife", swedish: "Kniv" } ] },
    { id: "level28", name: "Outdoor Play", narratorIntro: "Let's play outside in Swedish!", words: [ { english: "Swing", swedish: "Gunga" }, { english: "Slide", swedish: "Rutschkana" }, { english: "Sandbox", swedish: "Sandlåda" }, { english: "Chalk", swedish: "Krita" }, { english: "Hammock", swedish: "Hängmatta" } ] },
    { id: "level29", name: "Musical Instruments", narratorIntro: "Play some music in Swedish!", words: [ { english: "Drum", swedish: "Trumma" }, { english: "Guitar", swedish: "Gitarr" }, { english: "Piano", swedish: "Piano" }, { english: "Flute", swedish: "Flöjt" }, { english: "Violin", swedish: "Fiol" } ] },
    { id: "level30", name: "Shapes (Advanced)", narratorIntro: "More shapes in Swedish!", words: [ { english: "Star", swedish: "Stjärna" }, { english: "Heart", swedish: "Hjärta" }, { english: "Oval", swedish: "Oval" }, { english: "Rectangle", swedish: "Rektangel" }, { english: "Diamond", swedish: "Diamant" } ] },
    { id: "level31", name: "Common Adjectives", narratorIntro: "Describe things in Swedish!", words: [ { english: "Big", swedish: "Stor" }, { english: "Small", swedish: "Liten" }, { english: "Fast", swedish: "Snabb" }, { english: "Slow", swedish: "Långsam" }, { english: "Funny", swedish: "Rolig" } ] },
    { id: "level32", name: "Common Verbs", narratorIntro: "What are you doing in Swedish?", words: [ { english: "Walk", swedish: "Gå" }, { english: "Read", swedish: "Läsa" }, { english: "Write", swedish: "Skriva" }, { english: "Sing", swedish: "Sjunga" }, { english: "Dance", swedish: "Dansar" } ] },
    { id: "level33", name: "Professions", narratorIntro: "What do you want to be in Swedish?", words: [ { english: "Doctor", swedish: "Läkare" }, { english: "Teacher", swedish: "Lärare" }, { english: "Firefighter", swedish: "Brandman" }, { english: "Police", swedish: "Polis" }, { english: "Chef", swedish: "Kock" } ] },
    { id: "level34", name: "Rooms in a House", narratorIntro: "Explore rooms in a Swedish house!", words: [ { english: "Kitchen", swedish: "Kök" }, { english: "Bedroom", swedish: "Sovrum" }, { english: "Bathroom", swedish: "Badrum" }, { english: "Living Room", swedish: "Vardagsrum" }, { english: "Garden", swedish: "Trädgård" } ] },
    { id: "level35", name: "Nature", narratorIntro: "Beautiful nature in Swedish!", words: [ { english: "River", swedish: "Flod" }, { english: "Mountain", swedish: "Berg" }, { english: "Forest", swedish: "Skog" }, { english: "Lake", swedish: "Sjö" }, { english: "Beach", swedish: "Strand" } ] },
    { id: "level36", name: "Desserts", narratorIntro: "Yummy Swedish desserts!", words: [ { english: "Ice Cream", swedish: "Glass" }, { english: "Cake", swedish: "Tårta" }, { english: "Cookie", swedish: "Kaka" }, { english: "Candy", swedish: "Godis" }, { english: "Pancake", swedish: "Pannkaka" } ] }
];


export const AGENT_MESSAGES_DATA: AgentMessages = {
    start: "Hej! Ready for a Swedish adventure?",
    correct: [
        "Bra jobbat! You're a star!",
        "Fantastiskt! Keep up the great work!",
        "Wow! You got it!",
        "Super! You're learning so fast!"
    ],
    incorrect: [
        "No worries! Try again, you'll get it!",
        "Almost! Give it another shot!",
        "Keep trying! Learning is fun!",
        "Don't give up! You're doing great!"
    ],
    levelComplete: [
        "Yay! You rocked that level!",
        "Level cleared! Time for new words!",
        "Amazing! What a super learner!",
        "You're on fire! Next level awaits!"
    ],
    gameOver: [
        "You did it! What an amazing journey!",
        "Congratulations, Swedish master!",
        "You've learned so much! Play again anytime!",
        "Hooray! You're a Swedish language hero!"
    ]
};

export function shuffleArray<T,>(array: T[]): T[] {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
}
