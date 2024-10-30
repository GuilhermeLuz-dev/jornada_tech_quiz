
import { data } from "./data.js";

// Elementos da DOM
const timerElement = document.querySelector('.timer');
const questionContainer = document.querySelector('.question-container');
const descriptionContainer = document.querySelector('.description-container');
const answerContainers = document.querySelectorAll('.answer-choice');
const playAgainButton = document.getElementById('play-again');
const scoreElement = document.getElementById('score');

document.getElementById('playerName').textContent = localStorage.getItem('playerName');

// Variáveis do jogo
const playerName = localStorage.getItem("playerName");

let timeLeft = 15;
let totalQuestions = 0;
let currentQuestions = [];
let currentQuestionIndex = 0;
let score = 0;
let timerInterval;

// Função para embaralhar as perguntas
function shuffleQuestions() {
  for (let i = data.questions.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [data.questions[i], data.questions[j]] = [data.questions[j], data.questions[i]];
  }
}

// Função para embaralhar as alternativas
function shuffleAnswers(answers) {
  for (let i = answers.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [answers[i], answers[j]] = [answers[j], answers[i]];
  }
}

// Função para carregar as próximas 3 perguntas
function loadNextQuestions() {
  currentQuestions = data.questions.slice(0, 5);
  totalQuestions = currentQuestions.length;
  shuffleQuestions();
  loadNextQuestion();
}

// Função para carregar a próxima pergunta
function loadNextQuestion() {
  if (currentQuestionIndex < currentQuestions.length) {
    const currentQuestion = currentQuestions[currentQuestionIndex];

    // Adiciona a contagem da pergunta atual ao questionCounter
    document.getElementById('questionCounter').textContent = `${currentQuestionIndex + 1}/${totalQuestions}`;
    shuffleAnswers(currentQuestion.answers);
    questionContainer.innerHTML = `${currentQuestion.question}`;
    for (let i = 0; i < answerContainers.length; i++) {
      answerContainers[i].textContent = currentQuestion.answers[i];
    }

    timeLeft = 15;
    timerElement.textContent = timeLeft;

    clearInterval(timerInterval);
    timerInterval = setInterval(updateTimer, 1000);

    currentQuestionIndex++;
  } else {
    endGame();
  }
}

// Função para atualizar o timer a cada segundo
function updateTimer() {
  timeLeft--;
  timerElement.textContent = timeLeft;

  if (timeLeft <= 0) {
    clearInterval(timerInterval);
    loadNextQuestions();
  }
}

// Função para verificar a resposta selecionada
function checkAnswer(answer) {
  const currentQuestion = currentQuestions[currentQuestionIndex - 1];



  let confirmationMessage;
  let isErrorMessage = false;

  if (answer === currentQuestion.correctAnswer) {
    score += Math.round((timeLeft / 15) * 100); // Aumenta o contador de acertos se a resposta for correta
    confirmationMessage = data.confirmationMessages[Math.floor(Math.random() * data.confirmationMessages.length)];
    // Use uma imagem de acerto
  } else {
    isErrorMessage = true;
    confirmationMessage = data.errorMessages[Math.floor(Math.random() * data.errorMessages.length)];
    // Use uma imagem de erro
  }

  // Ocultar timer
  timerElement.style.display = 'none';

  // Ocultar questionContainer e respostas
  questionContainer.style.display = 'none';
  for (let i = 0; i < answerContainers.length; i++) {
    answerContainers[i].style.display = 'none';
  }

  // Atualizar o temporizador
  timeLeft = 15;
  timerElement.textContent = timeLeft;

  clearInterval(timerInterval);
  timerInterval = setInterval(updateTimer, 1000);

  // Atualizar o contador de acertos
  scoreElement.textContent = score;

  // Exibir confirmação com estilo de cor

  descriptionContainer.innerHTML = `<h2 style="background: ${isErrorMessage ? 'red' : 'green'}; padding:10px">${confirmationMessage}</h2>`;

  // Aguardar por alguns segundos antes de exibir a próxima pergunta
  setTimeout(() => {
    // Exibir timer
    timerElement.style.display = 'block';

    // Exibir questionContainer e respostas novamente
    questionContainer.style.display = 'block';
    for (let i = 0; i < answerContainers.length; i++) {
      answerContainers[i].style.display = 'flex';
    }

    descriptionContainer.innerHTML = ''; // Limpar a descrição
    loadNextQuestion();
  }, 1000); // Tempo em milissegundos (4 segundos)
}


// Função para encerrar o jogo
function endGame() {
  clearInterval(timerInterval);
  localStorage.setItem("playerScore", score)
  window.location.href = 'endGame.html';
}

// Evento de clique para respostas
for (let i = 0; i < answerContainers.length; i++) {
  answerContainers[i].addEventListener('click', () => {
    let selectedAnswer = answerContainers[i].textContent;
    console.log(selectedAnswer);
    checkAnswer(selectedAnswer);
  });
}

// Inicialização do jogo
shuffleQuestions();
loadNextQuestions();