function handleChoice(choice) {
  alert("اخترت: " + choice);
}

function showWriteAnswer(el) {
  const overlay = document.getElementById("overlay");
  const writeBox = document.getElementById("writeBox");

  // نسخ الزر وتحريكه
  const rect = el.getBoundingClientRect();
  const animatedDiv = document.createElement("div");
  animatedDiv.className = "write-circle-animate";
  document.body.appendChild(animatedDiv);

  overlay.style.display = "block";
  writeBox.style.display = "block";

  // عند الضغط خارج الكتابة
  overlay.onclick = () => {
    overlay.style.display = "none";
    writeBox.style.display = "none";
    animatedDiv.remove();
  };
}
