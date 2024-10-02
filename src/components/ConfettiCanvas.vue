<template>
  <canvas id="canvas"></canvas>
</template>

<script>
export default {
  name: "ConfettiCanvas",
  mounted() {
    let W = window.innerWidth;
    let H = window.innerHeight;
    const canvas = document.getElementById("canvas");
    const context = canvas.getContext("2d");
    const maxConfettis = 150;
    const particles = [];

    const possibleColors = [
      "DodgerBlue",
      "OliveDrab",
      "Gold",
      "Pink",
      "SlateBlue",
      "LightBlue",
      "Gold",
      "Violet",
      "PaleGreen",
      "SteelBlue",
      "SandyBrown",
      "Chocolate",
      "Crimson",
    ];

    function randomFromTo(from, to) {
      return Math.floor(Math.random() * (to - from + 1) + from);
    }

    function confettiParticle() {
      this.x = Math.random() * W;
      this.y = Math.random() * H - H;
      this.r = randomFromTo(11, 33);
      this.d = Math.random() * maxConfettis + 11;
      this.color =
        possibleColors[Math.floor(Math.random() * possibleColors.length)];
      this.tilt = Math.floor(Math.random() * 33) - 11;
      this.tiltAngleIncremental = Math.random() * 0.07 + 0.05;
      this.tiltAngle = 0;
      this.alpha = 1; // Menambahkan properti alpha untuk transparansi

      this.draw = function () {
        context.beginPath();
        context.lineWidth = this.r / 2;
        context.strokeStyle = this.color;
        context.globalAlpha = this.alpha; // Mengatur transparansi
        context.moveTo(this.x + this.tilt + this.r / 3, this.y);
        context.lineTo(this.x + this.tilt, this.y + this.tilt + this.r / 5);
        context.stroke();
        context.globalAlpha = 1; // Mengembalikan transparansi ke 1
      };
    }

    function Draw() {
      requestAnimationFrame(Draw);
      context.clearRect(0, 0, W, window.innerHeight);

      if (particles.length > 0) {
        for (let j = 0; j < maxConfettis; j++) {
          if (particles[j]) {
            particles[j].draw();
          }
        }

        for (let j = 0; j < maxConfettis; j++) {
          const particle = particles[j];

          particle.tiltAngle += particle.tiltAngleIncremental;
          particle.y += (Math.cos(particle.d) + 3 + particle.r / 2) / 2;
          particle.tilt = Math.sin(particle.tiltAngle - j / 3) * 15;

          // Jika confetti sudah keluar dari layar, bawa kembali
          if (particle.x > W + 30 || particle.x < -30 || particle.y > H) {
            particle.x = Math.random() * W;
            particle.y = -30;
            particle.tilt = Math.floor(Math.random() * 10) - 20;
          }
        }
      }
    }

    window.addEventListener(
      "resize",
      function () {
        W = window.innerWidth;
        H = window.innerHeight;
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      },
      false
    );

    // Push new confetti objects to `particles[]`
    for (let j = 0; j < maxConfettis; j++) {
      particles.push(new confettiParticle());
    }

    canvas.width = W;
    canvas.height = H;
    Draw();

    // Hentikan efek confetti setelah 5 detik dengan efek memudar
    setTimeout(() => {
      const fadeOutInterval = setInterval(() => {
        // Mengurangi transparansi setiap partikel
        for (let j = 0; j < particles.length; j++) {
          if (particles[j].alpha > 0) {
            particles[j].alpha -= 0.05; // Mengurangi alpha untuk efek memudar
          } else {
            // Hapus partikel jika transparansi sudah nol
            particles.splice(j, 1);
            j--; // Menyesuaikan indeks setelah penghapusan
          }
        }

        // Jika tidak ada partikel tersisa, hentikan interval
        if (particles.length === 0) {
          clearInterval(fadeOutInterval);
          context.clearRect(0, 0, W, H); // Membersihkan canvas
        }
      }, 100); // Setiap 100 ms
    }, 5000); // 5000 ms = 5 detik
  },
};
</script>

<style scoped>
canvas {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none; /* Agar tidak mengganggu interaksi pengguna */
}
</style>
