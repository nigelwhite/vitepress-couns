<template>
  <div>
    <img :src="image" :alt="alt" />
  </div>
</template>

<script setup>
defineProps({
  image: String,
  alt: String,
  link: String,
});
</script>

<style lang="scss" scoped></style>
