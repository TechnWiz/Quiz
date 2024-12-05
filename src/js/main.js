const questions = [
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
  {
    topic: "Спортивные мероприятия",
    question: "Где и когда зачастую проводятся спортивные мероприятия в АТ?",
    possibleAnswers: [
      "В спортзале АТ зимой и осенью",
      "В сквере АТ летом",
      "На кампусе АТ на свежем воздухе осенью и весной",
    ],
    correctAnswer: "На кампусе АТ на свежем воздухе осенью и весной",
  },
  {
    topic: "Специальности",
    question: "Сколько есть специальностей в АТ?",
    possibleAnswers: ["7", "5", "10"],
    correctAnswer: "7",
  },
  {
    topic: "Работа по профессии",
    question: "Со скольки лет в АТ можно работать по профессии?",
    possibleAnswers: [
      "Строго после окончания бакалавриата",
      "После 18 лет на летнюю практику и заработки",
      "После 20 лет с дипломом об окончании университета",
    ],
    correctAnswer: "После 18 лет на летнюю практику и заработки",
  },
  {
    topic: "Одежда студентов",
    question: "В чем ходят студенты АТ?",
    possibleAnswers: [
      "Строгая классика, рубашки и пиджаки 👔",
      "В униформе с эмблемой АТ",
      "В свободной, но в меру удобной одежде",
    ],
    correctAnswer: "В свободной, но в меру удобной одежде",
  },
  {
    topic: "Студсовет",
    question: "Чем занимается студсовет АТ?",
    possibleAnswers: [
      "Организовывают концерты и выступают на сцене 🎙",
      "Решают проблемы студентов, занимаются организацией любых мероприятий",
      "Отправляют студентов на летнюю практику",
    ],
    correctAnswer:
      "Решают проблемы студентов, занимаются организацией любых мероприятий",
  },
  {
    topic: "Анимационная команда",
    question: "Чем занимается анимационная команда АТ?",
    possibleAnswers: [
      "Готовят выступления, номера, концерты на всех мероприятиях",
      "Местные психологи АТ",
      "Выходят на летнюю практику, работая аниматорами",
    ],
    correctAnswer: "Готовят выступления, номера, концерты на всех мероприятиях",
  },
  {
    topic: "Ивенты",
    question: "Как часто проводятся ивенты в АТ?",
    possibleAnswers: [
      "Только по праздникам 🗓",
      "На всех каникулах",
      "Каждый день 🎉",
    ],
    correctAnswer: "Каждый день 🎉",
  },
  {
    topic: "Год основания",
    question: "В каком году основали АТ?",
    possibleAnswers: ["2004г.", "1994г.", "2023г."],
    correctAnswer: "1994г.",
  },
  {
    topic: "Логотип АТ",
    question: "Какой из данных логотипов принадлежит АТ?",
    possibleAnswers: [
      { text: "Логотип 1", image: "src/images/logo1.jpg" },
      { text: "Логотип 2", image: "src/images/logo2.jpg" },
      { text: "Логотип 3", image: "src/images/logo3.jpg" },
    ],
    correctAnswer: "src/images/logo2.jpg",
  },
  {
    topic: "Партнеры",
    question: "С какими компаниями сотрудничает АТ?",
    possibleAnswers: [
      "С туристическими, иностранными, международными компаниями 🗺",
      "С медицинскими компаниями 🦷",
      "С маркетинговыми компаниями 🏪",
    ],
    correctAnswer:
      "С туристическими, иностранными, международными компаниями 🗺",
  },
  {
    topic: "Отличие АТ",
    question: "Чем отличается Академия Туризма от других колледжей?",
    possibleAnswers: [],
    correctAnswer: "",
  },
  {
    topic: "Зимние каникулы",
    question:
      "Как вы планируете отпраздновать НГ и провести зимние каникулы? ☃🎄",
    possibleAnswers: [],
    correctAnswer: "",
  },
  {
    topic: "Для справки",
    question: "Ваше ФИО",
    possibleAnswers: [],
    correctAnswer: "",
  },
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
