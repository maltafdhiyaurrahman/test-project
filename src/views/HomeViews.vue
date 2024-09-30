<template>
  <div class="container">
    <h1>Home Page</h1>
    <p>Welcome to the Home Page!</p>
    <button class="btn btn-danger" @click="handleLogout">Logout</button>
  </div>
</template>

<script>
export default {
  name: 'HomeViews',
  methods: {
    handleLogout() {
      // Hapus status login
      localStorage.removeItem('isLoggedIn');
      // Redirect ke halaman login
      this.$router.push('/login');
    },
  },
};
</script>

<style scoped>
/* Tambahkan gaya tambahan jika diperlukan */
</style>
