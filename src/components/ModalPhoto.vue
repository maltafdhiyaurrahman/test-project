<template>
    <div class="modal-overlay" @click.self="close">
      <div class="modal-content">
        <slot name="header"></slot>
        <div class="modal-body">
          <img :src="image" alt="" class="modal-image" />
          <div class="modal-description">
            <slot name="body"></slot>
          </div>
        </div>
        <button class="close-button" @click="close">Close</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      image: String,
    },
    methods: {
      close() {
        this.$emit('close');
      },
    },
  };
  </script>
  
  <style scoped>
  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .modal-content {
    background-color: #fff;
    border-radius: 8px;
    padding: 20px;
    width: 80%;
    max-width: 800px; /* Mengatur lebar maksimum modal */
  }
  
  .modal-body {
    display: flex; /* Menggunakan flexbox untuk menyusun gambar dan deskripsi */
    align-items: center; /* Memastikan konten terpusat secara vertikal */
  }
  
  .modal-image {
    width: 50%; /* Mengatur lebar gambar modal */
    border-radius: 8px;
  }
  
  .modal-description {
    padding-left: 20px; /* Jarak antara gambar dan deskripsi */
  }
  
  .close-button {
    background-color: #ff0000; /* Warna tombol close */
    color: white;
    border: none;
    padding: 10px 15px;
    border-radius: 5px;
    cursor: pointer;
  }
  </style>
  