<template>
  <div>
    <img :src="image" :alt="alt" />
    <div class="credits">
      Photo by
      <a class="photographer" :href="photographerLink">{{
        photographerName
      }}</a>
      on
      <a class="unsplash" :href="unsplashLink">Unsplash</a>
    </div>
  </div>
</template>

<script setup>
defineProps({
  image: String,
  alt: String,
  photographerLink: String,
  photographerName: String,
  unsplashLink: String,
});
</script>

<style lang="scss" scoped></style>
