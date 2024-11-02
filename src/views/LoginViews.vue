<template>
  <div class="home d-flex justify-content-center align-items-center">
    <div class="container d-flex justify-content-center align-items-center vh-100">
      <div class="card" style="width: 100%; max-width: 400px;">
        <div class="card-body">
          <h1 class="card-title text-center mb-4 title">Login</h1>
          <form @submit.prevent="handleLogin">
            <div class="mb-3">
              <label for="username" class="form-label">Username</label>
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
    };
  },
  methods: {
    handleLogin() {
      this.usernameError = '';
      this.passwordError = '';

      if (this.username !== 'jenjen') {
        this.usernameError = 'Username salah';
      }
      if (this.password !== 'altapntata4ever') {
        this.passwordError = 'Password salah';
      }

      if (this.username === 'jenjen' && this.password === 'altapntata4ever') {
        localStorage.setItem('isLoggedIn', true);
        this.$router.push('/');
      }
    },
  },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');

.home {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-family: 'Press Start 2P', cursive;
  color: #e15048;
  background-color: #384B70;
}

.card {
  background-color: #25222b;
  border: 2px solid #e15048;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5);
}

.title {
  font-family: 'Press Start 2P', cursive;
  color: #e8e3be;
}

.form-label {
  font-family: 'Press Start 2P', cursive;
  color: #e8e3be;
}

.btn-start {
  background-color: #5fc787;
  color: #25222b;
  font-family: 'Press Start 2P', cursive;
  transition: background-color 0.3s, color 0.3s;
}

.btn-start:hover {
  background-color: #4da75a;
  color: #ffffff;
}

.text-danger {
  font-family: 'Press Start 2P', cursive;
  color: #e15048;
}

.notification {
  margin-bottom: 15px; /* Menambahkan jarak di bawah notifikasi */
  padding: 10px;
  border-radius: 5px;
  font-family: 'Press Start 2P', cursive;
  color: #25222b;
  background-color: #e15048;
}

</style>
