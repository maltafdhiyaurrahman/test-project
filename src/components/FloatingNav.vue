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
        <router-link class="nav-link" to="/quiz" exact-active-class="active"><i class="fas fa-gamepad"></i></router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/anjay" exact-active-class="active"><i class="fas fa-envelope"></i></router-link>
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
@import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');

body {
  background-color: #25222b; /* Latar belakang gelap untuk kontras yang baik */
  margin: 0;
}

.navbar {
  background-color: #25222b; /* Warna latar belakang yang lebih retro */
  border: 2px solid #e15048; /* Border untuk kesan retro */
  border-radius: 10px;
  padding: 15px 25px; /* Padding lebih besar */
  position: fixed;
  bottom: 20px; /* Menempatkan navbar di bagian bawah */
  left: 50%;
  transform: translateX(-50%); /* Memusatkan navbar */
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5);
  font-family: 'Press Start 2P', cursive; /* Font retro */
}

.navbar-nav {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.navbar-nav .nav-link {
  color: #e8e3be; /* Warna teks untuk link */
  font-size: 24px;
  margin: 0 15px; /* Menambahkan jarak antar ikon */
  transition: color 0.3s; /* Animasi saat hover */
}

.navbar-nav .nav-link.active {
  color: #e15048; /* Mengubah warna link aktif */
}

.navbar-nav .nav-link:hover {
  color: #5fc787; /* Efek hover */
}

.btn-logout {
  background-color: #e15048; /* Latar belakang tombol logout */
  color: #e8e3be; /* Warna teks tombol */
  border: 2px solid #e8e3be; /* Border pada tombol logout */
  border-radius: 5px;
  padding: 5px 20px;
  cursor: pointer; /* Menunjukkan bahwa tombol dapat diklik */
  transition: background-color 0.3s, color 0.3s; /* Animasi saat hover */
}

.btn-logout:hover {
  background-color: #ff0000; /* Efek hover untuk tombol logout */
  color: #25222b; /* Warna teks saat hover */
}
</style>
