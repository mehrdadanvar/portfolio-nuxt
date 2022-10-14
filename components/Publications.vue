<template>
  <div class="publications">
    <div class="first" v-for="pub in publications" :key="pub">
      <div class="pub" v-for="x in pub" :key="x">
        <h4 class="title">{{ x.title }}</h4>
        <span v-for="author in x.authors" :key="author">{{ author }},</span>
        <div class="journal">
          <span>{{ x.journal }}.</span>
          <span>{{ x.year }}</span>
        </div>
        <div class="ab">
          <a :href="x.link" target="_blank">Article</a>
          <a :href="x.pdf" target="_blank">PDF</a>
          <a>Abstract</a>
          <img src="../assets/arrow-down-circle.svg" alt="" @click="toggleAbstract(pub.id)" />
        </div>
        <div class="article">
          <article v-if="abstract_status" class="explicit">{{ x.abstract }}</article>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const { data: pubs } = await useFetch("/api/pubs");
const publications = ref(pubs);
const abstract_status = ref(false);
const toggleAbstract = (id) => {
  console.log("working");
  abstract_status.value = !abstract_status.value;
};
</script>

<style>
.publications {
  display: flex;
  flex-direction: column;
  border: 2px solid rgb(236, 235, 235);
  padding-left: 2rem;
  border-radius: 2rem;
  line-height: 2rem;
}
.pub {
  flex-direction: column;
  margin-bottom: 1rem;
  border: 10px solid;
  border-image-source: liear-gradient(90deg, blue, red);
  border-image-slice: 1;
  border-radius: 2rem;
  max-width: 60rem;
  padding: 0.5rem 1rem;
}
.ab {
  display: flex;
  gap: 1rem;
}
.journal {
  display: flex;
  gap: 1rem;
}
image {
  transform: scale(2);
}
img:hover {
  cursor: pointer;
  background-color: blue;
}
.first {
}
.explicit {
  transition: height 4s ease-in;
  line-height: 3rem;
}
</style>
