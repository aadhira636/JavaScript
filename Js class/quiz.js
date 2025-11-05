const questions = [
    {
        category: "Computer Science",
        question: "What is the full form of RAM?",
        choices: ["Random Access Memory","Read Access Memory","Readily Available Memory"],
        answer: "Random Access Memory"
    },
    {
        category: "Maths",
        question: "What is the product of 15 and 7?",
        choices: ["115","105","135"],
        answer: "105"
    },
    {
        category: "Chemistry",
        question: "What is the most common isotope of hydrogen?",
        choices: ["Deuterium","Tritium","Protium"],
        answer: "Protium"
    },
    {
        category: "Physics",
        question: "What is the SI unit of force?",
        choices: ["Watt","Joule","Newton"],
        answer: "Newton"
    },
    {
        category: "English",
        question: "What is the antonym of 'ancient'?",
        choices: ["Old","Modern","Antique"],
        answer: "Modern"
    },
    {
        category: "General Knowledge",
        question: "Who is known as the 'Father of Geometry'?",
        choices: ["Pythagoras","Euclid","Archimedes"],
        answer: "Euclid"
    }
];

function getRandomQuestions(questions){
    const random = Math.floor(Math.random() * questions.length);
    return questions[random];
}

function getRandomComputerChoice(choicesArray){
    const randomChoice = Math.floor(Math.random() * choicesArray.length);
    return choicesArray[randomChoice];
}

function getResults(questionObject, computerChoice){
    if (questionObject.answer === computerChoice){
        return "Correct!";
    } else {
        return `Wrong! The correct answer is ${questionObject.answer}.`;
    }
}

const question = getRandomQuestions(questions);
console.log("Question:", question.question);
console.log("Choices:", question.choices);
const computerChoice = getRandomComputerChoice(question.choices);
console.log("Computer chose:", computerChoice);
const result = getResults(question, computerChoice);
console.log("Result:", result);
