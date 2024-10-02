<template>
  <div class="home">
    <h1>Happy {{ ordinal(elapsedYears) }} Anniversary!</h1>
    <CountdownTimer />
  </div>
</template>

<script>
import CountdownTimer from '../components/CountdownTimer.vue';

export default {
  components: {
    CountdownTimer,
  },
  data() {
    return {
      currentDate: new Date(),
      startDate: new Date('November 7, 2021 00:00:00')
    };
  },
  computed: {
    elapsedYears() {
      // Menghitung perbedaan tahun
      let years = this.currentDate.getFullYear() - this.startDate.getFullYear();

      // Memeriksa jika bulan dan hari belum melewati 7 November pada tahun ini
      if (
        this.currentDate.getMonth() < this.startDate.getMonth() || 
        (this.currentDate.getMonth() === this.startDate.getMonth() && this.currentDate.getDate() < this.startDate.getDate())
      ) {
        years--; // Kurangi satu jika belum mencapai 7 November tahun ini
      }

      return years;
    }
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
    }
  }
};
</script>

<style scoped>
.home {
  text-align: center;
}
</style>
