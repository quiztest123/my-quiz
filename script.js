const writeBtn = document.getElementById('writeBtn');
const writeArea = document.getElementById('write-area');
const overlay = document.getElementById('overlay');

function showWriteInput() {
  writeBtn.classList.add('active');
  writeArea.classList.remove('hidden');
  overlay.classList.add('active');
}

function hideWriteInput() {
  writeBtn.classList.remove('active');
  writeArea.classList.add('hidden');
  overlay.classList.remove('active');
}

function answer(type) {
  alert('اخترت: ' + type);
  // لاحقًا: انتقل للسؤال التالي هنا
}
