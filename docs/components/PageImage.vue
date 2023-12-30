<template>
  <figure class="unsplash-image">
    <img :src="image" :alt="alt" />
    <figcaption :style="{ color: color }">
      Photo by
      <a class="photographer" :href="photographerLink">{{
        photographerName
      }}</a>
      on
      <a class="unsplash" :href="unsplashLink">Unsplash</a>
    </figcaption>
  </figure>
</template>

<script setup>
defineProps({
  image: String,
  alt: String,
  photographerLink: String,
  photographerName: String,
  unsplashLink: String,
  color: String,
});
</script>

<style lang="scss" scoped>
.unsplash-image {
  position: relative;
  margin-top: 1.5em;
  margin-bottom: 2.5em;
}

figcaption {
  position: absolute;
  bottom: 2px;
  right: 8px;
  font-size: 0.75em;
}
</style>
