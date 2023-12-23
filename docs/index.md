---
layout: home

hero:
  name: "Nigel White Counselling"
  tagline: One-to-one counselling for adults
  image:
    src: ./img/paper.jpg
    alt: VitePress
  actions:
    - theme: brand
      text: Book a free call
      link: /experience
# features:
#   - icon:
#       src: ./img/paper.jpg
#     title: Counselling
#     details: Lorem ipsum...
#   - icon:
#       src: ./img/paper.jpg
#     title: Supervision
#     details: Lorem ipsum...
---

<div class ="container-index">
<div class="card-row">
<CardCustom title="Counselling" message="message 1" image="/img/paper.jpg"/>
<CardCustom title="Supervision" message="message 2" image="/img/paper.jpg"/>
</div>

<div class="card-row">
<CardCustom title="Experience" message="message 1" image="/img/paper.jpg"/>
<CardCustom title="Training" message="message 2" image="/img/paper.jpg"/>
</div>
</div>

<script setup>
import CardCustom from './components/CardCustom.vue'
</script>

<style lang="scss">
    .card-row {
      margin: 0 auto;
      max-width: 1152px;
      display: flex;
      flex-direction: column;
    }
</style>
