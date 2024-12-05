const questions = [
      // Вопросы викторины
      {
        topic: "Основатель Академии Туризма",
        question:
          "Как зовут нашего многоуважаемого основателя Академии Туризма? 👨🏻‍💼👩🏻‍💼",
        possibleAnswers: [
          "Чормонов Мелис Бакасович",
          "Омуралиева Акбермет Мелисовна",
          "Чормонов Эрмек Бакасович",
        ],
        correctAnswer: "Чормонов Мелис Бакасович",
      },
      {
        topic: "Одежда преподавателей",
        question: "Как одеваются преподаватели в АТ?",
        possibleAnswers: [
          "Ходят в спортивной одежде и со свистком на шее 🏃‍♂",
          "Ходят в опрятных и удобных вещах 💁🏻‍♀ классика и свободная в меру",
          "Ходят в строго классическом стиле в одинаковых цветах 🕴🏼",
        ],
        correctAnswer:
          "Ходят в опрятных и удобных вещах 💁🏻‍♀ классика и свободная в меру",
      },
      {
        topic: "Этажи и корпуса",
        question: "Сколько этажей и корпусов в АТ?",
        possibleAnswers: [
          "3-4 этажа, нет доп. корпусов",
          "3 этажа, 1 корпус",
          "2 этажа, 2 корпуса",
        ],
        correctAnswer: "3 этажа, 1 корпус",
      },
      // Добавьте остальные вопросы...
    ];

    const welcomeScreen = document.getElementById("welcomeScreen");
    const quizContainer = document.getElementById("quizContainer");
    const startButton = document.getElementById("startButton");
    const quizProgress = document.getElementById("quizProgress");
    const questionContainer = document.getElementById("questionContainer");
    const answerContainer = document.getElementById("answerContainer");

    let currentQuestionIndex = 0;
    let score = 0;

    startButton.addEventListener("click", () => {
      welcomeScreen.style.display = "none";
      quizContainer.style.display = "block";
      handleQuestion(currentQuestionIndex);
    });

    function handleQuestion(index) {
      // Очистка прогресса
      quizProgress.innerHTML = questions
        .map((_, i) => `<span class="${i < index ? "seen" : ""}"></span>`)
        .join("");

      // Очистка предыдущего содержимого
      questionContainer.innerHTML = "";
      answerContainer.innerHTML = "";

      // Отображение вопроса
      const question = questions[index];
      questionContainer.innerHTML = `
        <h2>${question.topic}</h2>
        <p>${question.question}</p>
      `;

      // Добавление вариантов ответа
      question.possibleAnswers.forEach((answer) => {
        const button = document.createElement("button");
        button.textContent = answer;
        button.addEventListener("click", () => {
          if (answer === question.correctAnswer) {
            score++;
          }
          goToNextQuestion();
        });
        answerContainer.appendChild(button);
      });
    }

    function goToNextQuestion() {
      currentQuestionIndex++;
      if (currentQuestionIndex < questions.length) {
        handleQuestion(currentQuestionIndex);
      } else {
        showFinalResult();
      }
    }

    function showFinalResult() {
      questionContainer.innerHTML = `
        <h2>Ваш результат</h2>
        <p>Вы ответили правильно на ${score} из ${questions.length} вопросов!</p>
      `;
      answerContainer.innerHTML = `<button onclick="restartQuiz()">Пройти заново</button>`;
    }

    function restartQuiz() {
      currentQuestionIndex = 0;
      score = 0;
      handleQuestion(currentQuestionIndex);
    }
  </script>const questions = [
      // Вопросы викторины
      {
        topic: "Основатель Академии Туризма",
        question:
          "Как зовут нашего многоуважаемого основателя Академии Туризма? 👨🏻‍💼👩🏻‍💼",
        possibleAnswers: [
          "Чормонов Мелис Бакасович",
          "Омуралиева Акбермет Мелисовна",
          "Чормонов Эрмек Бакасович",
        ],
        correctAnswer: "Чормонов Мелис Бакасович",
      },
      {
        topic: "Одежда преподавателей",
        question: "Как одеваются преподаватели в АТ?",
        possibleAnswers: [
          "Ходят в спортивной одежде и со свистком на шее 🏃‍♂",
          "Ходят в опрятных и удобных вещах 💁🏻‍♀ классика и свободная в меру",
          "Ходят в строго классическом стиле в одинаковых цветах 🕴🏼",
        ],
        correctAnswer:
          "Ходят в опрятных и удобных вещах 💁🏻‍♀ классика и свободная в меру",
      },
      {
        topic: "Этажи и корпуса",
        question: "Сколько этажей и корпусов в АТ?",
        possibleAnswers: [
          "3-4 этажа, нет доп. корпусов",
          "3 этажа, 1 корпус",
          "2 этажа, 2 корпуса",
        ],
        correctAnswer: "3 этажа, 1 корпус",
      },
      // Добавьте остальные вопросы...
    ];

    const welcomeScreen = document.getElementById("welcomeScreen");
    const quizContainer = document.getElementById("quizContainer");
    const startButton = document.getElementById("startButton");
    const quizProgress = document.getElementById("quizProgress");
    const questionContainer = document.getElementById("questionContainer");
    const answerContainer = document.getElementById("answerContainer");

    let currentQuestionIndex = 0;
    let score = 0;

    startButton.addEventListener("click", () => {
      welcomeScreen.style.display = "none";
      quizContainer.style.display = "block";
      handleQuestion(currentQuestionIndex);
    });

    function handleQuestion(index) {
      // Очистка прогресса
      quizProgress.innerHTML = questions
        .map((_, i) => `<span class="${i < index ? "seen" : ""}"></span>`)
        .join("");

      // Очистка предыдущего содержимого
      questionContainer.innerHTML = "";
      answerContainer.innerHTML = "";

      // Отображение вопроса
      const question = questions[index];
      questionContainer.innerHTML = `
        <h2>${question.topic}</h2>
        <p>${question.question}</p>
      `;

      // Добавление вариантов ответа
      question.possibleAnswers.forEach((answer) => {
        const button = document.createElement("button");
        button.textContent = answer;
        button.addEventListener("click", () => {
          if (answer === question.correctAnswer) {
            score++;
          }
          goToNextQuestion();
        });
        answerContainer.appendChild(button);
      });
    }

    function goToNextQuestion() {
      currentQuestionIndex++;
      if (currentQuestionIndex < questions.length) {
        handleQuestion(currentQuestionIndex);
      } else {
        showFinalResult();
      }
    }

    function showFinalResult() {
      questionContainer.innerHTML = `
        <h2>Ваш результат</h2>
        <p>Вы ответили правильно на ${score} из ${questions.length} вопросов!</p>
      `;
      answerContainer.innerHTML = `<button onclick="restartQuiz()">Пройти заново</button>`;
    }

    function restartQuiz() {
      currentQuestionIndex = 0;
      score = 0;
      handleQuestion(currentQuestionIndex);
    }
