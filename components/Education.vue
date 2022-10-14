<template>
  <div class="school-container" v-for="item in items" :key="item">
    <div class="school" v-for="x in item" :key="x">
      <h4 class="title">{{ x.name }}</h4>
      <p>{{ x.major }}</p>
      <p>{{ x.location }}</p>
      <p>{{ x.grade }}</p>
      <p>{{ x.remarks }}</p>
      <p>{{ x.dates }}</p>
    </div>
  </div>
</template>

<script setup>
const { data: schools } = await useFetch("/api/schools");
const items = ref(schools);
</script>

<style>
.school-container {
  margin-left: 1rem;
  padding: 1rem;
  border: 1px solid grey;
  border-radius: 2rem;
  display: flex;
  justify-content: center;
}
.school {
  display: flex;
  flex-direction: column;
  padding-left: 1rem;
}
p {
  padding-left: 2rem;
}
</style>
