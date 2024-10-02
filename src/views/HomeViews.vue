<template>
  <div class="home">
    <ConfettiCanvas />
    <h1>Happy {{ ordinal(elapsedYears) }} Anniversary!</h1>
    <CountdownTimer />
    <Countdown :deadlineDate="new Date(2025, 7, 11, 0, 0, 0, 0)"/>
 </div>
</template>

<script>
import CountdownTimer from '../components/CountdownTimer.vue';
import ConfettiCanvas from '../components/ConfettiCanvas.vue';
import {Countdown} from 'vue3-flip-countdown'



export default {
  components: {
    CountdownTimer,
    ConfettiCanvas,
    Countdown,
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
      // remainingTime adalah sisa waktu dalam millisecond
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
.home {
  text-align: center;
}
</style>
