<template>
  <div class="box main-publications">
    <h2 class="text is-size-4 has-text-weight-bold">Peer Reviewed Publications</h2>
    <i class="fa-thin fa-books"></i>
    <hr />
    <div class="pub-right hoverable pb-2" v-bind:key="article" v-for="article in articles">
      <ul>
        <li class="text pb-1 is-size-5">{{ article.title }}</li>
      </ul>

      <div class="text ml-5">
        <p :key="value" v-for:="value in article.authors" class="is-inline-flex">
          {{ " " }}{{ value }}{{ "" }},
        </p>
      </div>
      <div class="text ml-5">
        <p :key="index" v-for:="index in article.pissue" class="is-inline-flex">
          {{ index }}
        </p>
      </div>
      <p class="text ml-5">{{ article.year }}</p>
      <div class="is-inline-flex">
        <p class="text is-italic ml-5">
          {{ article.journal }}
        </p>
        <a :href="article.link" class="ml-5 has-text-success">
          <i class="fa-brands fa-readme"></i>
        </a>
        <a :href="article.pdf" class="ml-4 has-text-warning">
          <i class="fa-solid fa-download"></i>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import Publications from "../../assets/data";

export default {
  name: "MainPublications",
  components: {
    Publications,
  },
  data() {
    return {
      articles: "",
    };
  },
  methods: {
    loadPubs() {
      this.articles = Publications;
    },
  },
  created() {
    this.loadPubs();
    console.log(Publications);
  },
};
</script>

<style></style>
