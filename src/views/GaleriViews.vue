<template>
    <div class="home d-flex justify-content-center align-items-center">

      <div class="container mt-3 gallery-container mb-5">
        <h4 class="text-center mb-4 title">Our Photo Gallery</h4>
        <div class="row">
          <div class="col-md-4" v-for="(photo, index) in photos" :key="index">
            <div class="photo-card mb-4">
              <div class="photo-wrapper">
                <img :src="photo.src" class="photo" :alt="photo.alt" />
                <div class="caption">
                  <h5>{{ photo.caption }}</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'PhotoGallery',
  data() {
    return {
      photos: [
        {
          src: 'https://via.placeholder.com/300x200',
          alt: 'Photo 1',
          caption: 'Beautiful Sunset'
        },
        {
          src: 'https://via.placeholder.com/300x200',
          alt: 'Photo 2',
          caption: 'Mountain Adventure'
        },
        {
          src: 'https://via.placeholder.com/300x200',
          alt: 'Photo 3',
          caption: 'Calm Beach'
        },
        {
          src: 'https://via.placeholder.com/300x200',
          alt: 'Photo 4',
          caption: 'Urban Exploration'
        },
        {
          src: 'https://via.placeholder.com/300x200',
          alt: 'Photo 5',
          caption: 'Forest Journey'
        },
        {
          src: 'https://via.placeholder.com/300x200',
          alt: 'Photo 6',
          caption: 'Night Sky'
        }
      ]
    };
  }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');

.home {
  display: flex;
  justify-content: center; /* Menjajarkan konten secara horizontal */
  align-items: center; /* Menjajarkan konten secara vertikal */
  text-align: center;
  font-family: 'Press Start 2P', cursive; /* Menggunakan font retro */
  color: #e15048; /* Warna teks untuk tampilan retro */
  background-color: #384B70; /* Warna latar belakang yang lebih retro */
}

/* Container styling */
.gallery-container {
  padding: 4rem; /* Menambahkan padding di sekitar kontainer kuis */
  background-color: #384B70; /* Warna latar belakang */
  border-radius: 10px; /* Radius border untuk tampilan retro */
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5); /* Bayangan untuk efek 3D */
}

/* Title styling */
.title {
  font-size: 2.5rem; /* Ukuran font untuk judul */
  margin-bottom: 20px; /* Jarak bawah untuk judul */
  color: #e8e3be; /* Warna teks judul */
}

/* Photo card styling */
.photo-card {
  transition: transform 0.3s, box-shadow 0.3s;
  border: 2px solid #B8001F; /* Border pada photo card */
  border-radius: 10px; /* Radius border untuk tampilan retro */
  overflow: hidden; /* Menjaga gambar agar tidak keluar dari border */
}

.photo-card:hover {
  transform: scale(1.05);
  box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.5);
}

/* Photo wrapper and image styling */
.photo-wrapper {
  position: relative;
  overflow: hidden;
}
.photo {
  width: 100%;
  height: auto;
  transition: transform 0.3s;
}
.photo-wrapper:hover .photo {
  transform: scale(1.1);
}

/* Caption styling */
.caption {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
  color: #fff;
  padding: 1rem;
  text-align: center;
  opacity: 0;
  transition: opacity 0.3s;
}
.photo-wrapper:hover .caption {
  opacity: 1;
}
.caption h5 {
  margin: 0;
  font-family: 'Press Start 2P', cursive; /* Font retro untuk caption */
  font-size: 1.2rem; /* Ukuran font untuk caption */
}
</style>
