<template>
    <div id="app">
      <HeaderViews v-if="isHomeOrLogin" />
      <router-view />
    </div>
  </template>
  
  <script>
  import HeaderViews from './components/HeaderViews.vue';
  
  export default {
    name: 'App',
    components: {
        HeaderViews,
    },
    computed: {
      isHomeOrLogin() {
        return this.$route.path === '/' ;
      },
    },
  };
  </script>
  
  <style>
  /* Tambahkan gaya tambahan jika diperlukan */
  </style>
  