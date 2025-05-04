function answer(choice) {
  alert("إجابتك: " + choice);
  // تقدر تضيف هنا إرسال الإجابة لسيرفر أو تخزينها لاحقًا
}

function writeAnswer() {
  const textarea = document.getElementById("textAnswer");
  textarea.style.display = "block";
}
