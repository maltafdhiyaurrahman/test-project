<template>
    <nav class="navbar">
      <ul class="navbar-nav d-flex flex-row align-items-center">
        <li class="nav-item">
          <router-link class="nav-link" to="/" exact-active-class="active"><i class="fas fa-home"></i></router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/ourmemory" exact-active-class="active"><i class="fas fa-image"></i></router-link>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#services"><i class="fas fa-cog"></i></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#contact"><i class="fas fa-envelope"></i></a>
        </li>
        <li class="nav-item">
          <button class="btn btn-logout" @click="logout">Logout</button>
        </li>
      </ul>
    </nav>
  </template>
  
  <script>
  export default {
    name: 'FloatingNav',
    methods: {
      logout() {
        localStorage.removeItem('isLoggedIn');
        this.$router.push('/login');
      }
    }
  };
  </script>
  
  <style scoped>
  body {
    background-color: #000;
    margin: 0;
  }
  
  .navbar {
    background-color: #1a1a1a;
    border-radius: 50px;
    padding: 10px 20px;
    position: fixed;
    bottom: 20px; /* Menempatkan navbar di bagian bawah */
    left: 50%;
    transform: translateX(-50%); /* Memusatkan navbar */
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5);
  }
  
  .navbar-nav {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  
  .navbar-nav .nav-link {
    color: #fff;
    font-size: 24px;
    margin: 0 15px; /* Menambahkan jarak antar ikon */
  }
  
  .navbar-nav .nav-link.active {
    color: #ff0000; /* Mengubah warna link aktif */
  }
  
  .btn-logout {
    background-color: #ff0000;
    color: #fff;
    border-radius: 25px;
    padding: 5px 20px;
    border: none;
    margin-left: 15px; /* Menambahkan jarak antara tombol logout dan ikon */
  }
  </style>
  