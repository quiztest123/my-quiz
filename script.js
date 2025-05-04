function submitAnswer(answer) {
  console.log("Answer:", answer);
  showThankYou();
}

function submitCustom() {
  const custom = document.getElementById("customAnswer").value;
  if (custom) {
    console.log("Custom Answer:", custom);
    showThankYou();
  } else {
    alert("Please write something!");
  }
}

function showThankYou() {
  document.getElementById("questionBox").style.display = "none";
  document.getElementById("thankYou").style.display = "block";
}

