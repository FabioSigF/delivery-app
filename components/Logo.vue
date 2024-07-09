<script setup>
import { ref, onMounted } from 'vue';

// Estado reativo para armazenar a URL do logo
const logoURL = ref('');

// Função assíncrona para buscar a URL do logo
const getLogo = async () => {
  const data = await $fetch('/api/db');

  if (data) {
    console.log(data.company.logo);
    logoURL.value = data.company.logo;
  } else {
    console.error('Failed to fetch logo:', error.value);
  }
};

// Chamar a função `getLogo` quando o componente for montado
onMounted(() => {
  getLogo();
});
</script>

<template>
  <div>
    <img :src="logoURL" alt="Company Logo" />
  </div>
</template>

<style scoped>
</style>
