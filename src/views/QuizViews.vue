<template>
  <div class="home d-flex justify-content-center align-items-center">
    <div class="container mt-3 quiz-container mb-5">
      <h1 class="text-center mb-4 title d-none">Kuis </h1>

      <!-- Peraturan Kuis -->
      <div v-if="!showQuiz" class="card p-4 quiz-card mb-5">
        <h3 class="text-center title">Quiz Rules</h3>
        <ul class="list-group mb-4">
          <li class="list-group-item">✅ Each question has one correct answer.</li>
          <li class="list-group-item">✅ Choose the best answer from the available options.</li>
          <li class="list-group-item">✅ Press the "Start Quiz" button to begin.</li>
        </ul>
        <button class="btn btn-start btn-block" @click="startQuiz">Start Quiz</button>
      </div>


      <!-- Pertanyaan Quiz -->
      <div v-else-if="currentQuestion < questions.length" class="card p-4 quiz-card mb-5">
        <h3 class="question">{{ questions[currentQuestion].question }}</h3>
        <div class="btn-group-vertical w-100 mb-3">
          <button v-for="(option, index) in questions[currentQuestion].options" :key="index" class="btn option-btn"
            :class="{ active: selectedAnswer === index, 'btn-success': selectedAnswer === index && index === questions[currentQuestion].answer }"
            @click="selectAnswer(index)">
            {{ option }}
          </button>
        </div>
        <button class="btn btn-start" @click="nextQuestion" :disabled="selectedAnswer === null">
          Next
        </button>
      </div>

      <!-- Quiz Selesai -->
      <div v-else class="card p-4 text-center quiz-card mb-5">
        <h3 class="text-success">Quiz Completed!</h3>
        <p class="text-score">Your Score: <strong>{{ score }}</strong> out of <strong>{{ questions.length }}</strong>
        </p>
        <button class="btn btn-start" @click="restartQuiz">Restart Quiz</button>
      </div>


      <!-- Confetti Canvas, tampil jika semua jawaban benar -->
      <ConfettiCanvas v-if="showConfetti" />
    </div>
  </div>
</template>


<script>
import ConfettiCanvas from '../components/ConfettiCanvas.vue';

export default {
  components: {
    ConfettiCanvas,
  },
  data() {
    return {
      showQuiz: false,
      currentQuestion: 0,
      selectedAnswer: null,
      score: 0,
      showConfetti: false, // Tambahkan properti untuk confetti
      questions: [
        {
          question: "Where did we first meet?",
          options: ["Campus", "PVJ", "BIP", "TSM"],
          answer: 1,
        },
        {
          question: "When did I confess to you?",
          options: ["07 Nov 2021", "07 Sep 2020", "07 Nov 2020", "07 Sep 2021"],
          answer: 0,
        },
        {
          question: "Where did we go for our first date?",
          options: ["Japra", "Gacoan", "Scoop n Scoop", "Cafe in front of PBB"],
          answer: 2,
        },
        {
          question: "What was our first concert?",
          options: ["Fosfen Festival", "Playlist Live Festival", "Tau Tau Fest", "Now Playing Fest"],
          answer: 3,
        },
        {
          question: "When is my birthday?",
          options: ["02 May 2001", "02 April 2001", "03 May 2002", "02 April 2002"],
          answer: 3,
        },

      ],
    };
  },
  methods: {
    startQuiz() {
      this.showQuiz = true;
      this.currentQuestion = 0;
      this.selectedAnswer = null;
      this.score = 0;
      this.showConfetti = false; // Reset confetti saat mulai quiz
    },
    selectAnswer(index) {
      this.selectedAnswer = index;
      if (this.selectedAnswer === this.questions[this.currentQuestion].answer) {
        this.score++;
      }
    },
    nextQuestion() {
      this.currentQuestion++;
      this.selectedAnswer = null;

      // Cek jika quiz selesai
      if (this.currentQuestion === this.questions.length) {
        // Jika skor sempurna, tampilkan confetti
        if (this.score === this.questions.length) {
          this.showConfetti = true;
          // Hentikan confetti setelah 3 detik

        }
      }
    },
    restartQuiz() {
      this.showQuiz = false;
      this.currentQuestion = 0;
      this.selectedAnswer = null;
      this.score = 0;
      this.showConfetti = false; // Reset confetti
    },
  },
};
</script>


<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');

.home {
  display: flex;
  justify-content: center;
  /* Menjajarkan konten secara horizontal */
  align-items: center;
  /* Menjajarkan konten secara vertikal */
  height: 100vh;
  /* Mengatur tinggi elemen agar memenuhi layar */
  text-align: center;
  font-family: 'Press Start 2P', cursive;
  /* Menggunakan font retro */
  background-color: #384B70;
  /* Warna latar belakang yang lebih retro */
}

.quiz-container {
  padding: 4rem;
  /* Menambahkan padding di sekitar kontainer kuis */
  background-color: #384B70;
  /* Warna latar belakang */
  border-radius: 10px;
  /* Radius border untuk tampilan retro */
}

/* Card styling */
.card {
  border: 2px solid #e15048;
  /* Border menggunakan warna dari palet */
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  background-color: #25222b;
  /* Warna latar belakang gelap */
}

/* Title styling */
.title {
  font-family: 'Press Start 2P', cursive;
  /* Font retro untuk judul */
  color: #e8e3be;
  /* Warna judul yang lebih terang */
}

/* Question styling */
.question {
  font-family: 'Press Start 2P', cursive;
  /* Font retro untuk pertanyaan */
  color: #e8e3be;
  /* Warna untuk pertanyaan */
}

/* Button styling */
.btn {
  font-family: 'Press Start 2P', cursive;
  /* Font retro untuk tombol */
  font-size: 1.2rem;
  text-transform: uppercase;
  /* Semua huruf menjadi kapital */
}

.btn-start {
  background-color: #5fc787;
  /* Latar belakang tombol */
  color: #25222b;
  /* Warna teks */
  transition: background-color 0.3s, color 0.3s;
  /* Transisi untuk efek hover */
}

.btn-start:hover {
  background-color: #4da75a;
  /* Warna latar belakang saat hover */
  color: #ffffff;
  /* Warna teks saat hover */
}

/* Success message styling */
.text-success {
  color: #e8e3be;
  /* Warna terang untuk kontras dengan latar belakang */
  font-family: 'Press Start 2P', cursive;
  /* Font 8-bit untuk teks selesai */
}

/* Score text styling */
.text-score {
  color: #5fc787;
  /* Warna untuk skor yang lebih cerah */
  font-family: 'Press Start 2P', cursive;
  /* Font 8-bit untuk teks skor */
}

/* List group item styling */
.list-group-item {
  cursor: pointer;
  font-family: 'Press Start 2P', cursive;
  /* Font retro untuk item */
  color: #e8e3be;
  /* Warna item */
  background-color: transparent;
  /* Latar belakang transparan */
}

/* Option button styling */
.option-btn {
  background-color: #507687;
  /* Latar belakang tombol pilihan menggunakan warna dari palet */
  color: #25222b;
  /* Warna teks tombol pilihan */
  transition: transform 0.3s, background-color 0.3s, color 0.3s;
  /* Transisi untuk efek hover */
}

.option-btn:hover {
  transform: scale(1.05);
  /* Efek zoom saat hover */
  background-color: #e15048;
  /* Mengubah latar belakang saat hover */
  color: #e8e3be;
  /* Mengubah warna teks saat hover */
}

.option-btn.active {
  background-color: #e15048;
  /* Warna untuk tombol yang aktif */
}
</style>
