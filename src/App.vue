<template>
  <div id="app">
    <AppHeader />
    <p>test</p>
    <AppHome />
    <AppFooter />
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';
import AppHome from './views/AppHome.vue';

export default {
  components: {
    AppHeader,
    AppFooter,
    AppHome
  }
}
</script>
