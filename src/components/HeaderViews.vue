<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">My App</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link class="nav-link" to="/">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/login">Login</router-link>
            </li>
            <li class="nav-item">
              <button class="btn btn-danger" @click="handleLogout">
                Logout
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </template>
  
  <script>
  export default {
    name: 'HeaderViews',
    methods: {
    handleLogout() {
      // Hapus status login dari localStorage
      localStorage.removeItem('isLoggedIn');
      // Arahkan pengguna kembali ke halaman login
      this.$router.push('/login');
    }
  }
  };
  </script>
  
  