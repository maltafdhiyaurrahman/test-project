<template>
    <div class="gallery">
      <h1>Memorable Moments</h1>
      <div class="gallery-grid">
        <div
          class="gallery-item"
          v-for="(photo, index) in photos"
          :key="index"
          @click="openModal(photo)"
        >
          <img :src="photo.imageUrl" :alt="photo.description" />
        </div>
      </div>
  
      <ModalPhoto v-if="isModalOpen" :image="selectedPhoto?.imageUrl" @close="closeModal">
        <template #header>
          <h2>{{ selectedPhoto?.description }}</h2>
        </template>
        <template #body>
          <p><strong>Date:</strong> {{ selectedPhoto?.date }}</p>
        </template>
      </ModalPhoto>
    </div>
  </template>
  
  <script>
  import ModalPhoto from '../components/ModalPhoto.vue';
  
  export default {
    name: "GaleriViews",
    components: {
      ModalPhoto,
    },
    data() {
      return {
        isModalOpen: false,
        selectedPhoto: null,
        photos: [
          {
            imageUrl: 'https://picsum.photos/200/300?random=1',
            description: 'My first memorable trip',
            date: 'January 15, 2020',
          },
          {
            imageUrl: 'https://picsum.photos/200/300?random=2',
            description: 'Graduation day',
            date: 'May 22, 2021',
          },
          {
            imageUrl: 'https://picsum.photos/200/300?random=3',
            description: 'Family gathering',
            date: 'December 10, 2022',
          },
          {
            imageUrl: 'https://picsum.photos/200/300?random=4',
            description: 'Beach vacation',
            date: 'July 14, 2019',
          },
          {
            imageUrl: 'https://picsum.photos/200/300?random=5',
            description: 'Hiking adventure',
            date: 'March 5, 2021',
          },
        ],
      };
    },
    methods: {
      openModal(photo) {
        this.selectedPhoto = photo;
        this.isModalOpen = true;
      },
      closeModal() {
        this.isModalOpen = false;
        this.selectedPhoto = null;
      },
    },
  };
  </script>
  
  <style scoped>
  .gallery {
    text-align: center;
  }
  
  .gallery-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 16px; /* Jarak antar foto */
  }
  
  .gallery-item img {
    width: 100%;
    border-radius: 8px;
    cursor: pointer;
    transition: transform 0.2s;
  }
  
  .gallery-item img:hover {
    transform: scale(1.05); /* Efek zoom saat hover */
  }
  </style>
  