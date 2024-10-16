<template>
  <div class="home d-flex justify-content-center align-items-center">
    <div class="container mt-3 quiz-container mb-5"> <!-- Menambahkan margin bawah di sini -->
      <h1 class="text-center mb-4 title">Kuis </h1>

      <div v-if="!showQuiz" class="card p-4 quiz-card mb-5"> <!-- Menambahkan margin bawah di sini -->
        <h3 class="text-center title">Peraturan Kuis</h3>
        <ul class="list-group mb-4">
          <li class="list-group-item">✅ Setiap pertanyaan memiliki satu jawaban yang benar.</li>
          <li class="list-group-item">✅ Pilih jawaban terbaik dari pilihan yang ada.</li>
          <li class="list-group-item">✅ Tekan tombol "Mulai Kuis" untuk memulai.</li>
        </ul>
        <button class="btn btn-start btn-block" @click="startQuiz">Mulai Kuis</button>
      </div>

      <div v-else-if="currentQuestion < questions.length" class="card p-4 quiz-card mb-5"> <!-- Menambahkan margin bawah di sini -->
        <h3 class="question">{{ questions[currentQuestion].question }}</h3>
        <div class="btn-group-vertical w-100 mb-3">
          <button
            v-for="(option, index) in questions[currentQuestion].options"
            :key="index"
            class="btn option-btn"
            :class="{ active: selectedAnswer === index, 'btn-success': selectedAnswer === index && index === questions[currentQuestion].answer }"
            @click="selectAnswer(index)"
          >
            {{ option }}
          </button>
        </div>
        <button class="btn btn-start" @click="nextQuestion" :disabled="selectedAnswer === null">
          Next
        </button>
      </div>

      <div v-else class="card p-4 text-center quiz-card mb-5"> <!-- Menambahkan margin bawah di sini -->
        <h3 class="text-success">Kuis Selesai!</h3>
        <p class="text-score">Skor Anda: <strong>{{ score }}</strong> dari <strong>{{ questions.length }}</strong></p>
        <button class="btn btn-start" @click="restartQuiz">Mulai Ulang Kuis</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showQuiz: false,
      currentQuestion: 0,
      selectedAnswer: null,
      score: 0,
      questions: [
        {
          question: "Dimana tempat kita pertama ketemu?",
          options: ["Kampus", "PVJ", "BIP", "TSM"],
          answer: 1,
        },
        {
          question: "Kapan aku nembak kamu?",
          options: ["07 Nov 2021", "07 Sep 2020", "07 Nov 2020", "07 Sep 2021"],
          answer: 0,
        },
        {
          question: "Di mana kita pergi untuk date pertama?",
          options: ["Japra", "Gacoan", "Scoop n Scoop", "Cafe depan PBB"],
          answer: 2,
        },
        {
          question: "Apa Konser pertama kita?",
          options: ["Fosfen Festival", "Playlist Live Festival", "Tau Tau Fest", "Now Playing Fest"],
          answer: 3,
        },
        {
          question: "Apa warna kesukaan aku",
          options: ["Merah", "Biru", "Coklat", "Item"],
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
    },
    restartQuiz() {
      this.showQuiz = false;
      this.currentQuestion = 0;
      this.selectedAnswer = null;
      this.score = 0;
    },
  },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');

.home {
  display: flex;
  justify-content: center; /* Menjajarkan konten secara horizontal */
  align-items: center; /* Menjajarkan konten secara vertikal */
  height: 100vh; /* Mengatur tinggi elemen agar memenuhi layar */
  text-align: center;
  font-family: 'Press Start 2P', cursive; /* Menggunakan font retro */
  background-color: #384B70; /* Warna latar belakang yang lebih retro */
}

.quiz-container {
  padding: 4rem; /* Menambahkan padding di sekitar kontainer kuis */
  background-color: #384B70; /* Warna latar belakang */
  border-radius: 10px; /* Radius border untuk tampilan retro */
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5); /* Bayangan untuk efek 3D */
}

/* Card styling */
.card {
  border: 2px solid #e15048; /* Border menggunakan warna dari palet */
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  background-color: #25222b; /* Warna latar belakang gelap */
}

/* Title styling */
.title {
  font-family: 'Press Start 2P', cursive; /* Font retro untuk judul */
  color: #e8e3be; /* Warna judul yang lebih terang */
}

/* Question styling */
.question {
  font-family: 'Press Start 2P', cursive; /* Font retro untuk pertanyaan */
  color: #e8e3be; /* Warna untuk pertanyaan */
}

/* Button styling */
.btn {
  font-family: 'Press Start 2P', cursive; /* Font retro untuk tombol */
  font-size: 1.2rem;
  text-transform: uppercase; /* Semua huruf menjadi kapital */
}

.btn-start {
  background-color: #5fc787; /* Latar belakang tombol */
  color: #25222b; /* Warna teks */
  transition: background-color 0.3s, color 0.3s; /* Transisi untuk efek hover */
}

.btn-start:hover {
  background-color: #4da75a; /* Warna latar belakang saat hover */
  color: #ffffff; /* Warna teks saat hover */
}

/* Success message styling */
.text-success {
  color: #e8e3be; /* Warna terang untuk kontras dengan latar belakang */
  font-family: 'Press Start 2P', cursive; /* Font 8-bit untuk teks selesai */
}

/* Score text styling */
.text-score {
  color: #5fc787; /* Warna untuk skor yang lebih cerah */
  font-family: 'Press Start 2P', cursive; /* Font 8-bit untuk teks skor */
}

/* List group item styling */
.list-group-item {
  cursor: pointer;
  font-family: 'Press Start 2P', cursive; /* Font retro untuk item */
  color: #e8e3be; /* Warna item */
  background-color: transparent; /* Latar belakang transparan */
}

/* Option button styling */
.option-btn {
  background-color: #507687; /* Latar belakang tombol pilihan menggunakan warna dari palet */
  color: #25222b; /* Warna teks tombol pilihan */
  transition: transform 0.3s, background-color 0.3s, color 0.3s; /* Transisi untuk efek hover */
}

.option-btn:hover {
  transform: scale(1.05); /* Efek zoom saat hover */
  background-color: #e15048; /* Mengubah latar belakang saat hover */
  color: #e8e3be; /* Mengubah warna teks saat hover */
}

.option-btn.active {
  background-color: #e15048; /* Warna untuk tombol yang aktif */
}
</style>
