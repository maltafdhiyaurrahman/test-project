<template>
  <div class="home d-flex justify-content-center align-items-center">

    <div class="container mt-3 mb-5">
      <div class="letter">
        <div class="letter-body">
          <p class="subtitle">Hey Love,</p>
          <p class="subtitle">
            Happy anniversary! Can you believe we've survived three years together? I'm not saying it's been easy, but it's definitely been worth it.          
          <!-- </p>
          <p class="subtitle"> -->
            Thank you for being patient with me and all my quirks. I know I can be a burden sometimes, but you always manage to make me feel loved and appreciated.     
          <!-- </p>
          <p class="subtitle"> -->
            Here's to many more years of love, laughter, and adventures together! I hope we can stay together forever, until death do us part.
          </p>
          <div class="row justify-content-center">
            <p class="title text-center">
              How long until the next anniversary?
            </p>
            <div class="col-auto" v-for="(unit, index) in timeUnits" :key="index">
              <div class="badge neutral-badge p-3 m-2">
                <h4>{{ unit.value }}</h4>
                <span>{{ unit.label }}</span>
              </div>
            </div>
          </div>
          <p class="subtitle">See you</p>
          <p class="subtitle">Love you</p>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: 'ThankYouCountdown',
  data() {
    return {
      timeUnits: [
        { label: 'Months', value: 0 },
        { label: 'Days', value: 0 },
        { label: 'Hours', value: 0 },
        { label: 'Minutes', value: 0 },
        { label: 'Seconds', value: 0 },
      ],
      intervalId: null,
      endDate: new Date('November 7, 2025 00:00:00')
    };
  },
  methods: {
    calculateTime() {
      const now = new Date();
      let delta = Math.floor((this.endDate - now) / 1000);

      const months = Math.floor(delta / (30.44 * 24 * 60 * 60));
      delta -= months * 30.44 * 24 * 60 * 60;

      const days = Math.floor(delta / (24 * 60 * 60));
      delta -= days * 24 * 60 * 60;

      const hours = Math.floor(delta / (60 * 60));
      delta -= hours * 60 * 60;

      const minutes = Math.floor(delta / 60);
      delta -= minutes * 60;

      const seconds = Math.floor(delta);

      this.timeUnits[0].value = months;
      this.timeUnits[1].value = days;
      this.timeUnits[2].value = hours;
      this.timeUnits[3].value = minutes;
      this.timeUnits[4].value = seconds.toString().padStart(2, '0');
    }
  },
  mounted() {
    this.calculateTime();
    this.intervalId = setInterval(this.calculateTime, 1000);
  },
  beforeUnmount() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');
.home {
  display: flex;
  justify-content: center; /* Menjajarkan konten secara horizontal */
  align-items: center; /* Menjajarkan konten secara vertikal */
  height: 100vh; /* Mengatur tinggi elemen agar memenuhi layar */
  font-family: 'Press Start 2P', cursive; /* Menggunakan font retro */
  background-color: #384B70; /* Warna latar belakang yang lebih retro */
}
.letter {
  border: 3px solid #e15048; /* Warna border yang sesuai dengan tema 8-bit */
  border-radius: 5px;
  padding: 20px;
  background-color: #e8e3be; /* Warna latar belakang surat */
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  position: relative;
  overflow: hidden;
  font-size: 16px; /* Ukuran font untuk gaya 8-bit */
  font-family: 'Press Start 2P', cursive; /* Font retro */

}

.letter-body {
  margin-top: 10px;
}

.letter-footer {
  margin-top: 20px;
  font-size: 14px; /* Ukuran font untuk footer */
}

.title {
  color: #e15048; /* Warna judul */
  font-family: 'Press Start 2P', cursive; /* Font retro */
}

.subtitle {
  color: #25222b; /* Warna teks untuk subtitle */
  font-family: 'Press Start 2P', cursive; /* Font retro */
}

.neutral-badge {
  background-color: #5fc787; /* Warna latar belakang badge */
  color: #25222b; /* Warna teks */
  font-family: 'Press Start 2P', cursive; /* Font retro */
  font-size: 2rem; /* Ukuran font yang lebih besar */
  width: 100px;
  text-align: center;
  border: 2px solid #e8e3be; /* Border pada badge */
  border-radius: 10px; /* Radius border untuk tampilan retro */
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5); /* Bayangan untuk efek 3D */
}

h4 {
  margin: 0;
}

span {
  font-size: 0.6rem; /* Ukuran font lebih kecil untuk label */
  color: #e8e3be; /* Warna teks untuk label */
}
</style>




