<template>
    <div id="app">
      <div class="content">
        <router-view />
      </div>
      <FloatingNav v-if="isHomeOrLogin"/>
    </div>
  </template>
  
  <script>
  import FloatingNav from './components/FloatingNav.vue';
  
  export default {
    name: 'App',
    components: {
        FloatingNav
    },
    computed: {
      isHomeOrLogin() {
        return this.$route.path != '/login' ;
      },
    },
  };
  </script>
  
  <style>
  /* Tambahkan gaya tambahan jika diperlukan */
  

  </style>
  