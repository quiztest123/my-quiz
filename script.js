let currentQuestion = 0;
const questions = [
  { question: "هل تفضل الهدوء على الأماكن الصاخبة؟", answer: null },
  { question: "هل تفضل العمل في فريق أم بمفردك؟", answer: null },
  { question: "هل تعتقد أن التفكير المنطقي أكثر أهمية من العاطفة؟", answer: null }
];

function showQuestion() {
  const questionText = document.getElementById("question");
  questionText.innerHTML = questions[currentQuestion].question;
}

function answer(choice) {
  const answerBox = document.getElementById("answerBox");
  answerBox.classList.add('visible'); // ظهور خانة الإجابة
  answerBox.innerHTML = `إجابتك: ${choice}`;

  // إخفاء دوائر الإجابات
  const circles = document.querySelectorAll('.answer-circle');
  circles.forEach(circle => {
    circle.style.display = 'none';
  });

  // تغيير مكان خانة الإجابة
  setTimeout(() => {
    answerBox.style.transform = 'scale(1.5)';
  }, 500);

  // تخزين الإجابة
  questions[currentQuestion].answer = choice;
  currentQuestion++;

  // إذا انتهت الأسئلة
  if (currentQuestion < questions.length) {
    setTimeout(() => {
      showQuestion();
      resetPage();
    }, 2000);
  } else {
    setTimeout(() => {
      alert("شكراً لك على إتمام الاختبار!");
      resetPage();
    }, 2000);
  }
}

function resetPage() {
  // إعادة الدوائر وإخفاء خانة الإجابة
  const circles = document.querySelectorAll('.answer-circle');
  circles.forEach(circle => {
    circle.style.display = 'inline-block';
  });

  const answerBox = document.getElementById("answerBox");
  answerBox.classList.remove('visible');
  answerBox.style.transform = 'scale(1)';
}
