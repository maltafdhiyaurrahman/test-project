<template>
  <div class="container text-center mt-5">
    <h4 class="title">How long we've been together?</h4>
    <div class="mt-4">
      <div class="row justify-content-center">
        <div class="col-auto" v-for="(unit, index) in timeUnits" :key="index">
          <div class="badge neutral-badge p-3 m-2">
            <h4>{{ unit.value }}</h4>
            <span>{{ unit.label }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CountdownTimer',
  data() {
    return {
      timeUnits: [
        { label: 'Year', value: 0 },
        { label: 'Months', value: 0 },
        { label: 'Days', value: 0 },
        { label: 'Hours', value: 0 },
        { label: 'Minutes', value: 0 },
        { label: 'Seconds', value: 0 },
      ],
      intervalId: null,
      startDate: new Date('November 7, 2021 00:00:00')
    };
  },
  methods: {
    calculateTime() {
      const now = new Date();
      let delta = Math.floor((now - this.startDate) / 1000);

      const years = Math.floor(delta / (365.25 * 24 * 60 * 60));
      delta -= years * 365.25 * 24 * 60 * 60;

      const months = Math.floor(delta / (30.44 * 24 * 60 * 60));
      delta -= months * 30.44 * 24 * 60 * 60;

      const days = Math.floor(delta / (24 * 60 * 60));
      delta -= days * 24 * 60 * 60;

      const hours = Math.floor(delta / (60 * 60));
      delta -= hours * 60 * 60;

      const minutes = Math.floor(delta / 60);
      delta -= minutes * 60;

      const seconds = Math.floor(delta);

      this.timeUnits[0].value = years;
      this.timeUnits[1].value = months;
      this.timeUnits[2].value = days;
      this.timeUnits[3].value = hours;
      this.timeUnits[4].value = minutes;
      this.timeUnits[5].value = seconds.toString().padStart(2, '0');
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

.title {
  color: #e15048; /* Warna judul */
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
