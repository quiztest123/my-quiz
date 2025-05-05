/* تعيين الخط الافتراضي إذا لم يتم تحميل خط الويب */
body {
  font-family: 'Inter', sans-serif;
  /* إزالة أي هامش افتراضي */
  margin: 0;
  /* ضمان أن الخلفية تغطي الشاشة بأكملها */
  min-height: 100vh;
}

/* أنماط الخلفيات المختلفة */
.bg-calm {
  background: linear-gradient(135deg, #a8e6cf 0%, #dcedc1 100%);
}

.bg-medium {
  background: linear-gradient(135deg, #ffd3b6 0%, #ffaaa5 100%);
}

.bg-intense {
  background: linear-gradient(135deg, #ff8c94 0%, #fde2e4 100%);
}

/* تحريك الخلفية */
body {
  background-size: 400% 400%; /* حجم أكبر للسماح بالحركة */
  animation: gradientWave 15s ease infinite; /* تطبيق التحريك */
}

/* تعريف حركة الخلفية */
@keyframes gradientWave {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}


/* تنسيق أزرار الإجابة الدائرية */
.answer-button {
  width: 70px; /* حجم الزر */
  height: 70px;
  border-radius: 50%; /* جعل الزر دائريًا */
  border: none;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15); /* ظل للزر */
  font-size: 1rem; /* حجم الخط */
  font-weight: 500; /* وزن الخط */
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease; /* انتقالات ناعمة */
  animation: float 3s ease-in-out infinite; /* تطبيق تأثير الطفو */
}

/* تأخير مختلف لكل زر لعدم التزامن */
#yes-button { animation-delay: 0s; }
#no-button { animation-delay: 0.5s; }
#other-button { animation-delay: 1s; }

/* تأثير عند المرور فوق الزر */
.answer-button:hover {
  transform: translateY(-8px) scale(1.05); /* رفع الزر قليلاً وتكبيره */
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.2); /* زيادة الظل */
}

/* تعريف حركة الطفو */
@keyframes float {
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); } /* الارتفاع لأعلى */
  100% { transform: translateY(0px); }
}

/* إظهار النافذة المنبثقة */
#other-input-modal.visible {
  opacity: 1;
  pointer-events: auto; /* السماح بالتفاعل معها */
}

/* تأثير الانتقال لصندوق السؤال */
#question-container.exiting {
  opacity: 0;
  transform: scale(0.9);
}
