<template>
    <div class="container text-center mt-5">
      <h4>How long we've been together?</h4>
      <div class="mt-4">
        <div class="row justify-content-center">
          <div class="col-auto">
            <div class="badge neutral-badge p-3 m-2">
              <h4>{{ years }}</h4>
              <span>Year</span>
            </div>
          </div>
          <div class="col-auto">
            <div class="badge neutral-badge p-3 m-2">
              <h4>{{ months }}</h4>
              <span>Mounths</span>
            </div>
          </div>
          <div class="col-auto">
            <div class="badge neutral-badge p-3 m-2">
              <h4>{{ days }}</h4>
              <span>Days</span>
            </div>
          </div>
          <div class="col-auto">
            <div class="badge neutral-badge p-3 m-2">
              <h4>{{ hours }}</h4>
              <span>Hours</span>
            </div>
          </div>
          <div class="col-auto">
            <div class="badge neutral-badge p-3 m-2">
              <h4>{{ minutes }}</h4>
              <span>Minutes</span>
            </div>
          </div>
          <div class="col-auto">
            <div class="badge neutral-badge p-3 m-2">
              <h4>{{ seconds }}</h4>
              <span>Seconds</span>
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
        years: 0,
        months: 0,
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
        intervalId: null,
        startDate: new Date('November 7, 2021 00:00:00')
      };
    },
    methods: {
      calculateTime() {
        const now = new Date();
        let delta = Math.floor((now - this.startDate) / 1000);
  
        this.years = Math.floor(delta / (365.25 * 24 * 60 * 60));
        delta -= this.years * 365.25 * 24 * 60 * 60;
  
        this.months = Math.floor(delta / (30.44 * 24 * 60 * 60));
        delta -= this.months * 30.44 * 24 * 60 * 60;
  
        this.days = Math.floor(delta / (24 * 60 * 60));
        delta -= this.days * 24 * 60 * 60;
  
        this.hours = Math.floor(delta / (60 * 60));
        delta -= this.hours * 60 * 60;
  
        this.minutes = Math.floor(delta / 60);
        delta -= this.minutes * 60;
  
        this.seconds = delta;
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
  .neutral-badge {
    background-color: #e0e0e0;
    color: #333;
    font-size: 1.2rem;
    width: 100px;
    text-align: center;
  }
  h4 {
    margin: 0;
  }
  span {
    font-size: 0.8rem;
  }
  </style>
  