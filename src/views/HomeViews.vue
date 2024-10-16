<template>
  <div class="home d-flex justify-content-center align-items-center">
    <div class="content">
      <ConfettiCanvas />
      <h1 class="title">Happy {{ ordinal(elapsedYears) }} Anniversary!</h1>
      <CountdownTimer />
    </div>
  </div>
</template>

<script>
import CountdownTimer from '../components/CountdownTimer.vue';
import ConfettiCanvas from '../components/ConfettiCanvas.vue';

export default {
  components: {
    CountdownTimer,
    ConfettiCanvas,
  },
  data() {
    return {
      currentDate: new Date(),
      startDate: new Date('November 7, 2021 00:00:00'),
    };
  },
  computed: {
    elapsedYears() {
      let years = this.currentDate.getFullYear() - this.startDate.getFullYear();
      if (
        this.currentDate.getMonth() < this.startDate.getMonth() ||
        (this.currentDate.getMonth() === this.startDate.getMonth() && this.currentDate.getDate() < this.startDate.getDate())
      ) {
        years--;
      }
      return years;
    },
  },
  methods: {
    ordinal(num) {
      const suffixes = ["th", "st", "nd", "rd"];
      const mod100 = num % 100;
      const mod10 = num % 10;

      if (mod100 >= 11 && mod100 <= 13) {
        return num + suffixes[0]; // "th" for 11, 12, 13
      } else {
        return num + (suffixes[mod10] || suffixes[0]);
      }
    },
    calculateTime(remainingTime) {
      const seconds = Math.floor(remainingTime / 1000) % 60;
      const minutes = Math.floor(remainingTime / (1000 * 60)) % 60;
      const hours = Math.floor(remainingTime / (1000 * 60 * 60)) % 24;
      const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));

      console.log(`Sisa waktu: ${days} hari, ${hours} jam, ${minutes} menit, ${seconds} detik`);
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
  color: #e15048; /* Warna teks untuk tampilan retro */
  background-color: #384B70; /* Warna latar belakang yang lebih retro */
}

.content {
  padding: 20px; /* Menambahkan padding untuk memberikan ruang di sekitar konten */
  border-radius: 10px; /* Radius border untuk tampilan lebih halus */
  background-color: #384B70; /* Warna latar belakang yang lebih retro */

  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5); /* Bayangan untuk efek 3D */
}

.title {
  font-size: 2.5rem; /* Ukuran font untuk judul */
  margin-bottom: 20px; /* Jarak bawah untuk judul */
  color: #e8e3be; /* Warna teks judul */
}
</style>
