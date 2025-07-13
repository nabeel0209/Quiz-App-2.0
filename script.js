document.addEventListener('DOMContentLoaded', () => {
  const originalQuestions = [
  {
    question: "Which law relates the pressure and volume of a gas at constant temperature?",
    options: ["Charles's Law", "Boyle's Law", "Avogadro's Law", "Newton's Law"],
    answer: "Boyle's Law"
  },
  {
    question: "What is the integration of 1 / (1 + x²)?",
    options: ["ln|x|", "arctan(x)", "x²/2", "1/x"],
    answer: "arctan(x)"
  },
  {
    question: "Which organelle is known as the 'powerhouse of the cell'?",
    options: ["Nucleus", "Mitochondria", "Ribosome", "Golgi apparatus"],
    answer: "Mitochondria"
  },
  {
    question: "Which of the following elements has the smallest atomic radius?",
    options: ["Sodium", "Fluorine", "Chlorine", "Lithium"],
    answer: "Fluorine"
  },
  {
    question: "Who proposed the uncertainty principle?",
    options: ["Einstein", "Bohr", "Schrödinger", "Heisenberg"],
    answer: "Heisenberg"
  },
  {
    question: "What is the time complexity of binary search in a sorted array?",
    options: ["O(n)", "O(log n)", "O(n log n)", "O(1)"],
    answer: "O(log n)"
  },
  {
    question: "Which trigonometric identity equals 1 + tan²(x)?",
    options: ["sec²(x)", "cosec²(x)", "cot²(x)", "sin²(x)"],
    answer: "sec²(x)"
  },
  {
    question: "Which gas is most responsible for the greenhouse effect?",
    options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Ozone"],
    answer: "Carbon Dioxide"
  },
  {
    question: "How many valence electrons does Carbon have?",
    options: ["2", "4", "6", "8"],
    answer: "4"
  },
  {
    question: "Which sorting algorithm has the best average-case time complexity?",
    options: ["Bubble Sort", "Insertion Sort", "Merge Sort", "Selection Sort"],
    answer: "Merge Sort"
  },
  {
    question: "In which year did Alan Turing propose the Turing Machine?",
    options: ["1936", "1922", "1950", "1945"],
    answer: "1936"
  },
  {
    question: "Which vitamin helps in blood clotting?",
    options: ["Vitamin A", "Vitamin B12", "Vitamin K", "Vitamin D"],
    answer: "Vitamin K"
  },
  {
    question: "What is the unit of electrical resistance?",
    options: ["Ohm", "Ampere", "Volt", "Watt"],
    answer: "Ohm"
  },
  {
    question: "Which set is countable?",
    options: ["Real numbers", "Rational numbers", "Irrational numbers", "Transcendental numbers"],
    answer: "Rational numbers"
  },
  {
    question: "What is the oxidation number of oxygen in H₂O₂ (hydrogen peroxide)?",
    options: ["-2", "-1", "0", "+1"],
    answer: "-1"
  },
  {
    question: "Which part of the brain controls breathing?",
    options: ["Cerebrum", "Medulla Oblongata", "Cerebellum", "Pons"],
    answer: "Medulla Oblongata"
  },
  {
    question: "Which metal is liquid at room temperature?",
    options: ["Gallium", "Mercury", "Lead", "Bismuth"],
    answer: "Mercury"
  },
  {
    question: "What is the formula of gravitational force?",
    options: ["F = ma", "F = G(m1m2)/r²", "F = qE", "F = mv²/r"],
    answer: "F = G(m1m2)/r²"
  },
  {
    question: "Which data structure uses FIFO (First In First Out)?",
    options: ["Stack", "Queue", "Tree", "Graph"],
    answer: "Queue"
  },
  {
    question: "What is the SI unit of power?",
    options: ["Joule", "Watt", "Newton", "Pascal"],
    answer: "Watt"
  }
];  
  
  let questions = [
  {
    question: "Which law relates the pressure and volume of a gas at constant temperature?",
    options: ["Charles's Law", "Boyle's Law", "Avogadro's Law", "Newton's Law"],
    answer: "Boyle's Law"
  },
  {
    question: "What is the integration of 1 / (1 + x²)?",
    options: ["ln|x|", "arctan(x)", "x²/2", "1/x"],
    answer: "arctan(x)"
  },
  {
    question: "Which organelle is known as the 'powerhouse of the cell'?",
    options: ["Nucleus", "Mitochondria", "Ribosome", "Golgi apparatus"],
    answer: "Mitochondria"
  },
  {
    question: "Which of the following elements has the smallest atomic radius?",
    options: ["Sodium", "Fluorine", "Chlorine", "Lithium"],
    answer: "Fluorine"
  },
  {
    question: "Who proposed the uncertainty principle?",
    options: ["Einstein", "Bohr", "Schrödinger", "Heisenberg"],
    answer: "Heisenberg"
  },
  {
    question: "What is the time complexity of binary search in a sorted array?",
    options: ["O(n)", "O(log n)", "O(n log n)", "O(1)"],
    answer: "O(log n)"
  },
  {
    question: "Which trigonometric identity equals 1 + tan²(x)?",
    options: ["sec²(x)", "cosec²(x)", "cot²(x)", "sin²(x)"],
    answer: "sec²(x)"
  },
  {
    question: "Which gas is most responsible for the greenhouse effect?",
    options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Ozone"],
    answer: "Carbon Dioxide"
  },
  {
    question: "How many valence electrons does Carbon have?",
    options: ["2", "4", "6", "8"],
    answer: "4"
  },
  {
    question: "Which sorting algorithm has the best average-case time complexity?",
    options: ["Bubble Sort", "Insertion Sort", "Merge Sort", "Selection Sort"],
    answer: "Merge Sort"
  },
  {
    question: "In which year did Alan Turing propose the Turing Machine?",
    options: ["1936", "1922", "1950", "1945"],
    answer: "1936"
  },
  {
    question: "Which vitamin helps in blood clotting?",
    options: ["Vitamin A", "Vitamin B12", "Vitamin K", "Vitamin D"],
    answer: "Vitamin K"
  },
  {
    question: "What is the unit of electrical resistance?",
    options: ["Ohm", "Ampere", "Volt", "Watt"],
    answer: "Ohm"
  },
  {
    question: "Which set is countable?",
    options: ["Real numbers", "Rational numbers", "Irrational numbers", "Transcendental numbers"],
    answer: "Rational numbers"
  },
  {
    question: "What is the oxidation number of oxygen in H₂O₂ (hydrogen peroxide)?",
    options: ["-2", "-1", "0", "+1"],
    answer: "-1"
  },
  {
    question: "Which part of the brain controls breathing?",
    options: ["Cerebrum", "Medulla Oblongata", "Cerebellum", "Pons"],
    answer: "Medulla Oblongata"
  },
  {
    question: "Which metal is liquid at room temperature?",
    options: ["Gallium", "Mercury", "Lead", "Bismuth"],
    answer: "Mercury"
  },
  {
    question: "What is the formula of gravitational force?",
    options: ["F = ma", "F = G(m1m2)/r²", "F = qE", "F = mv²/r"],
    answer: "F = G(m1m2)/r²"
  },
  {
    question: "Which data structure uses FIFO (First In First Out)?",
    options: ["Stack", "Queue", "Tree", "Graph"],
    answer: "Queue"
  },
  {
    question: "What is the SI unit of power?",
    options: ["Joule", "Watt", "Newton", "Pascal"],
    answer: "Watt"
  }
];

// Calling the required elements from HTML

let question = document.getElementById('question');
let optionsDiv = document.getElementById('options');
let nextBtn = document.getElementById('next');
let endBtn = document.getElementById('end');
let endScreen = document.getElementById('endScreen');
let endHeading = document.getElementById('endHeading');
let score = document.getElementById('score')
let restartBtn = document.getElementById('restart');
let showHistoryBtn = document.getElementById('history');
let historyContainer = document.getElementById('historyContainer');
let historyList = document.getElementById('historyList');

// Declaring necessary variables

let questionHistory = [];
let selectedOption = null;
let currentQuestion = null;
let obtainedScore = 0

endBtn.disabled = true;
endBtn.style.display = 'none'
nextBtn.textContent = 'Start Quiz';

// Function to render questions along its options

function renderQuestion() {


  // Using Math.random() to select a random question from questionArray

  let randomIndex = Math.floor(Math.random() * questions.length);
  currentQuestion = questions[randomIndex];

  question.textContent = currentQuestion.question;
  optionsDiv.innerHTML = '';
  selectedOption = null;

  // Rendering the Options Respective to the question 

  currentQuestion.options.forEach(optionText => {
    let optionBtn = document.createElement('button');
    optionBtn.className = 'option';
    optionBtn.textContent = optionText;

    // Creating logic to track the selected answer

    optionBtn.addEventListener('click', () => {
      const allOptions = document.querySelectorAll('.option');
      allOptions.forEach(btn => btn.classList.remove('selected'));

      optionBtn.classList.add('selected');
      selectedOption = optionText;
    });

    optionsDiv.appendChild(optionBtn);
  });

  // Removing current question from original list to avoid duplication 

  questions.splice(randomIndex, 1);
}

let hasStarted = false

nextBtn.addEventListener('click', () => {

   if (!hasStarted) {

    // First click = start quiz
    
    hasStarted = true;
    nextBtn.textContent = 'Next Question';
    endBtn.disabled = false;
    endBtn.style.display = 'inline'
    renderQuestion();
    return;
  }

  // Checking if all the questions have been answered

  if (!selectedOption) {
    alert('Please select an answer before proceeding.');
    return;
  }

  const isCorrect = selectedOption === currentQuestion.answer;

  // Storing the user selected answer in questionHistory[] to track progress

  questionHistory.push({
    question: currentQuestion.question,
    correctAnswer: currentQuestion.answer,
    selectedAnswer: selectedOption,
    isCorrect
  });

  if (isCorrect) {
    obtainedScore++
  }

  if (questions.length === 0) {
    question.textContent = "";
    endScreen.classList.add('show')
    endHeading.textContent = 'Quiz Completed!!'
    optionsDiv.innerHTML = '';
    nextBtn.disabled = true;
    score.innerHTML = `Your Score is: ${obtainedScore}/${questionHistory.length}`
    return;
  }

  renderQuestion();
})

function endQuiz() {
  endScreen.classList.add('show')
  endHeading.textContent = 'Quiz Ended!'
  score.innerHTML = `Your Score is: ${obtainedScore}/${questionHistory.length}`

}

endBtn.addEventListener('click', endQuiz)

function restartQuiz() {

  // Reset state variables
  
  hasStarted = false;
  selectedOption = null;
  currentQuestion = null;
  questionHistory = [];
  obtainedScore = 0;

  // Re-enable buttons
  
  nextBtn.disabled = false;
  nextBtn.textContent = 'Start Quiz';
  endBtn.disabled = true;
  endBtn.style.display = 'none';

  // Reset UI
  
  question.textContent = '';
  optionsDiv.innerHTML = '';
  endScreen.classList.remove('show');
  historyContainer.classList.remove('show'); // hide history if visible

  // Refill the questions array to its initial state
  
  questions = [...originalQuestions]; 

}

restartBtn.addEventListener('click', restartQuiz)

function showHistory() {

  historyList.innerHTML = ''
  historyContainer.classList.add('show')

  // Creating Li for every element of History Array

  questionHistory.forEach(item => {
    const li = document.createElement('li');
    li.className = item.isCorrect ? 'right' : 'wrong';
    li.innerHTML = `
    Q: ${item.question}<br>
    Your Ans: ${item.selectedAnswer}<br>
    Correct Ans: ${item.correctAnswer}`;
    historyList.appendChild(li)
  });

}

showHistoryBtn.addEventListener('click', showHistory)

});