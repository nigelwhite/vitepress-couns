<template>
  <div class="card">
    <img :src="image" />
    <h2>{{ title }}</h2>
    <p>{{ message }}</p>
  </div>
</template>

<script setup>
defineProps({
  image: String,
  title: String,
  message: String,
});
</script>

<style lang="scss" scoped></style>
