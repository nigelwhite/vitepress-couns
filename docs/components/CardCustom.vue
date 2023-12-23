<template>
  <div class="card">
    <img class="card-image" :src="image" />
    <h2 class="card-title">{{ title }}</h2>
    <p class="card-experience">{{ experience }}</p>
    <p class="card-text">{{ message }}</p>
  </div>
</template>

<script setup>
defineProps({
  image: String,
  title: String,
  experience: String,
  message: String,
});
</script>

<style lang="scss" scoped>
.card {
  margin: 3em;
  // border: 1px solid;
  // border-color: rgba(60, 60, 67);
  // border-radius: 12px;
  background-color: aquamarine;
  .card-image {
    margin-bottom: 20px;
  }
  .card-title {
    text-align: center;
    font-size: 24px;
    font-family: var(--vp-font-family-base);
    color: var(--vp-c-text-1);
    line-height: 24px;
    font-weight: 600;
    color: rgba(60, 60, 67);
  }
  .card-text,
  .card-experience {
    text-align: center;
    font-size: 16px;
    flex-grow: 1;
    color: rgba(60, 60, 67);
    padding-top: 8px;
    line-height: 24px;
    font-weight: 500;
  }
  .card-text {
    padding: 8px;
  }
}
</style>
