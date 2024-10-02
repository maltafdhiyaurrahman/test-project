<template>
  <div class="container d-flex justify-content-center align-items-center vh-100">
    <div class="card" style="width: 100%; max-width: 400px;">
      <div class="card-body">
        <h1 class="card-title text-center mb-4">Login</h1>
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
          <button type="submit" class="btn btn-primary w-100">Login</button>
        </form>
        <!-- Pesan error umum setelah percobaan gagal -->
        <div v-if="generalError" class="alert alert-danger mt-3 text-center">
          {{ generalError }}
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
      usernameError: '', // Pesan kesalahan untuk username
      passwordError: '', // Pesan kesalahan untuk password
      attemptCount: 0,   // Menyimpan jumlah percobaan login
      generalError: '',   // Pesan kesalahan umum
    };
  },
  methods: {
    handleLogin() {
      // Reset pesan kesalahan
      this.usernameError = '';
      this.passwordError = '';
      this.generalError = '';

      // Cek username dan password
      let isValid = true; // Flag untuk validasi

      if (this.username !== '071121') {
        this.usernameError = 'Id salah';
        isValid = false;
      }
      if (this.password !== 'sephora') {
        this.passwordError = 'Password salah';
        isValid = false;
      }

      // Jika tidak valid, tambahkan percobaan
      if (!isValid) {
        this.attemptCount++;

        // Menentukan pesan kesalahan berdasarkan jumlah percobaan
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
        return; // Jangan lanjutkan jika input tidak valid
      }

      // Jika login berhasil, arahkan ke halaman utama
      localStorage.setItem('isLoggedIn', true);
      this.$router.push('/');
    },
  },
};
</script>

<style scoped>
/* Tidak ada CSS tambahan */
</style>
