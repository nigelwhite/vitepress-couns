<template>
  <div class="card">
    <h2>{{ title }}</h2>
    <p>{{ message }}</p>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  message: String,
});
</script>

<style lang="scss" scoped></style>
