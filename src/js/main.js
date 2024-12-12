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
    correctAnswer: "Логотип 1",
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
    question: "Ваше ФИО,курс-группа,рег номер",
    possibleAnswers: [],
    correctAnswer: "",
  },
];

const welcomeScreen = document.getElementById("welcomeScreen");
const quizContainer = document.getElementById("quizContainer");
const startButton = document.getElementById("startButton");

startButton.addEventListener("click", () => {
  // Скрываем приветственный экран
  welcomeScreen.style.display = "none";

  // Показываем экран викторины
  quizContainer.style.display = "block";

  // Загружаем первый вопрос викторины
  handleQuestion(currentQuestionIndex);
});

const quizProgress = document.getElementById("quizProgress");
const quiestionContainer = document.getElementById("questionContainer");
const answerContainer = document.getElementById("answerContainer");
let currentQuestionIndex = 0;

let score = 0; // Счетчик правильных ответов
let userResponses = {}; // Сохранение ответов пользователя

function handleQuestion(index, e) {
  // Очистка прогресса и отображение прогресс-бара
  quizProgress.innerHTML = "";
  questions.forEach(() => {
    quizProgress.innerHTML += "<span></span>";
  });

  let spans = document.querySelectorAll("span");
  for (let i = 0; i < index; i++) {
    spans[i].classList.add("seen");
  }

  // Очистка предыдущего содержимого
  quiestionContainer.innerHTML = "";
  answerContainer.innerHTML = "";

  // Отображение темы и вопроса
  quiestionContainer.innerHTML = `
    <p>${questions[index].topic}</p>
    <p>${questions[index].question}</p>
  `;

  // Обработка вариантов ответа
  if (questions[index].possibleAnswers.length > 0) {
    if (questions[index].possibleAnswers[0]?.image) {
      // Вопросы с изображениями
      questions[index].possibleAnswers.forEach((answer) => {
        answerContainer.innerHTML += `
          <div style="margin-bottom: 20px; text-align: center;">
            <img src="${answer.image}" alt="${answer.text}" style="width: 150px; height: auto; display: block; margin: 0 auto;" />
            <button style="margin-top: 10px;">${answer.text}</button>
          </div>
        `;
      });
    } else {
      // Текстовые варианты ответа
      questions[index].possibleAnswers.forEach((answer) => {
        answerContainer.innerHTML += `<button>${answer}</button>`;
      });
    }

    let answers = document.querySelectorAll("#answerContainer button");
    answers.forEach((answer) => {
      answer.addEventListener("click", (e) => {
        if (e.target.textContent === questions[index].correctAnswer.trim()) {
          score++;
        }

        saveUserResponse(index, e.target.textContent); // Сохранить ответ пользователя
        goToNextQuestion(index);
      });
    });
  } else if (index === 13 || index === 14 || index === 15) {
    // Вопросы с пользовательским вводом
    answerContainer.innerHTML = `
      <input type="text" id="userInput" placeholder="Ваш ответ..." />
      <button id="submitAnswer">Отправить</button>
    `;

    const submitButton = document.getElementById("submitAnswer");
    submitButton.addEventListener("click", () => {
      const userInput = document.getElementById("userInput").value;
      if (userInput.trim() !== "") {
        saveUserResponse(index, userInput); // Сохранить пользовательский ответ
if (userInput.toLowerCase() === questions[index].correctAnswer.toLowerCase()) {
  score++;
}
        if (index === 15) {
          sendAnswersToEmail(userResponses); // Отправить ответы на email
        }

        goToNextQuestion(index);
      } else {
        alert("Пожалуйста, введите ответ.");
      }
    });
  }
}

// Переход к следующему вопросу
function goToNextQuestion(index) {
  if (index === questions.length - 1) {
    showFinalResult(); // Показать результаты
  } else {
    currentQuestionIndex++;
    handleQuestion(currentQuestionIndex);
  }
}

// Сохранение ответов пользователя
function saveUserResponse(index, response) {
  userResponses[index] = {
    question: questions[index].question,
    answer: response,
  };
}

// Отправка ответов на email
function sendAnswersToEmail(responses) {
  const emailContent = Object.entries(responses)
    .map(
      ([index, response]) =>
        `Вопрос ${Number(index) + 1}: ${response.question}\nОтвет: ${
          response.answer
        }\n`
    )
    .join("\n");

  // Инициализация EmailJS
  emailjs.init("b4rGtldbDMlzXSqzK"); // Замените "Ваш_Public_Key" на ваш публичный ключ

  // Отправка email
  emailjs
    .send("service_2d2y6xh", "template_evxqdm8", {
      subject: "Ответы на викторину",
      message: emailContent,
    })
    .then(
      (response) => {
        console.log("Email отправлен успешно!", response.status, response.text);
        alert("Спасибо за пройденную викторину!");
      },
      (error) => {
        console.error("Ошибка отправки email:", error);
        console.log("Не удалось отправить ответы. Попробуйте позже.");
      }
    );
}

// Показ финального результата
function showFinalResult() {
  quiestionContainer.innerHTML = `
    <h2 style="color: white">Ваш результат</h2>
    <p style="color: white">Вы ответили правильно на ${score} из 13 вопросов!</p>
  `;
  answerContainer.innerHTML = `<button onclick="restartQuiz()">Пройти заново</button>`;
}

// Перезапуск викторины
function restartQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  userResponses.length = 0;
  handleQuestion(currentQuestionIndex);
}
