<template>
  <div class="home d-flex justify-content-center align-items-center">

    <div class="container d-flex justify-content-center align-items-center vh-100">
      <div class="card" style="width: 100%; max-width: 400px;">
        <div class="card-body">
          <h1 class="card-title text-center mb-4 title">Login</h1>
          <form @submit.prevent="handleLogin">
            <div class="mb-3">
              <label for="username" class="form-label">Id</label>
              <input type="text" class="form-control" id="username" v-model="username" required>
              <div v-if="usernameError" class="text-danger">{{ usernameError }}</div>
            </div>
            <div class="mb-3">
              <label for="password" class="form-label">Password</label>
              <input type="password" class="form-control" id="password" v-model="password" required>
              <div v-if="passwordError" class="text-danger">{{ passwordError }}</div>
            </div>
            <button type="submit" class="btn btn-start w-100">Login</button>
          </form>
          <!-- Pesan error umum setelah percobaan gagal -->
          <div v-if="generalError" class="alert alert-danger mt-3 text-center">
            {{ generalError }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoginViews',
  data() {
    return {
      username: '',
      password: '',
      usernameError: '',
      passwordError: '',
      attemptCount: 0,
      generalError: '',
    };
  },
  methods: {
    handleLogin() {
      this.usernameError = '';
      this.passwordError = '';
      this.generalError = '';

      let isValid = true;

      if (this.username !== '071121') {
        this.usernameError = 'Id salah';
        isValid = false;
      }
      if (this.password !== 'sephora') {
        this.passwordError = 'Password salah';
        isValid = false;
      }

      if (!isValid) {
        this.attemptCount++;
        switch (this.attemptCount) {
          case 2:
            this.generalError = 'Yah, salah!';
            break;
          case 3:
            this.generalError = 'Dih, salah!';
            break;
          case 4:
            this.generalError = 'Masih salah!';
            break;
          default:
            break;
        }
        return;
      }

      localStorage.setItem('isLoggedIn', true);
      this.$router.push('/');
    },
  },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');

.home {
  display: flex;
  justify-content: center; /* Menjajarkan konten secara horizontal */
  align-items: center; /* Menjajarkan konten secara vertikal */
  height: 100vh; /* Mengatur tinggi elemen agar memenuhi layar */
  font-family: 'Press Start 2P', cursive; /* Menggunakan font retro */
  color: #e15048; /* Warna teks untuk tampilan retro */
  background-color: #384B70; /* Warna latar belakang yang lebih retro */
}

.card {
  background-color: #25222b; /* Warna latar belakang gelap */
  border: 2px solid #e15048; /* Border menggunakan warna dari palet */
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5); /* Bayangan untuk efek 3D */
}

.title {
  font-family: 'Press Start 2P', cursive; /* Font retro untuk judul */
  color: #e8e3be; /* Warna judul yang lebih terang */
}

.form-label {
  font-family: 'Press Start 2P', cursive; /* Font retro untuk label */
  color: #e8e3be; /* Warna label */
}

.btn-start {
  background-color: #5fc787; /* Latar belakang tombol */
  color: #25222b; /* Warna teks */
  font-family: 'Press Start 2P', cursive; /* Font retro untuk tombol */
  transition: background-color 0.3s, color 0.3s;
}

.btn-start:hover {
  background-color: #4da75a; /* Warna latar belakang saat hover */
  color: #ffffff; /* Warna teks saat hover */
}

.text-danger {
  font-family: 'Press Start 2P', cursive; /* Font retro untuk teks error */
  color: #e15048; /* Warna teks kesalahan */
}
</style>
