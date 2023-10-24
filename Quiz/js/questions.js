function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}
// creating an array and passing the number, questions, options, and answers
let questions = [
  {
    numb: "Q",
    question: "What is 7 multiplied by 3?",
    answer: "21",
    options: ["21", "24", "18", "15"]
  },
  {
    numb: "Q",
    question: "If x = 5 and y = 3, what is the value of x + y?",
    answer: "8",
    options: ["8", "15", "2", "35"]
  },
  {
    numb: "Q",
    question: "What is the square of 9?",
    answer: "81",
    options: ["81", "64", "27", "100"]
  },
  {
    numb: "Q",
    question: "If a rectangle has a length of 8 units and a width of 6 units, what is its area?",
    answer: "48",
    options: ["48", "14", "30", "20"]
  },
  {
    numb: "Q",
    question: "Solve for x: 3x - 7 = 14",
    answer: "7",
    options: ["7", "21", "5", "10"]
  },
  {
    numb: "Q",
    question: "What is the result of 12 divided by 4?",
    answer: "3",
    options: ["3", "4", "6", "2"]
  },
  {
    numb: "Q",
    question: "If a right triangle has a hypotenuse of length 10 and one leg of length 6, what is the length of the other leg?",
    answer: "8",
    options: ["8", "4", "5", "12"]
  },
  {
    numb: "Q",
    question: "Calculate 15% of 80.",
    answer: "12",
    options: ["12", "18", "10", "24"]
  },
  {
    numb: "Q",
    question: "What is the value of 5 to the power of 3 (5^3)?",
    answer: "125",
    options: ["125", "15", "500", "25"]
  },
  {
    numb: "Q",
    question: "If a circle has a radius of 4 units, what is its circumference (use π ≈ 3.14)?",
    answer: "25.12",
    options: ["25.12", "12.56", "16.28", "31.42"]
  }
]

shuffleArray(questions);
questions = questions.slice(0,5)