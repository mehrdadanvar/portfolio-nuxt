<template>
  <section class="grid">
    <div class="containe container-right">Sidebar</div>
    <div class="box container-left">
      <section class="article">
        <div class="container mb-4 mt-4" v-bind:key="article" v-for="article in articles">
          <div class="inner-box">
            <h3 class="is-size-5">{{ article.title }}</h3>
            <div class="authors">
              <span class="text is-size-5 my-2 py-2">Authors</span>
              <br />
              <div :key="value" v-for="value in article.authors" class="is-inline-flex">
                <p class="text">
                  {{ value }}
                </p>
              </div>
            </div>
            <h5>{{ article.journal }}</h5>
            <p :key="i" v-for="i in article.pissue" class="text is-size-6 is-inline-flex">
              {{ i }}
            </p>
            <br />
            <p class="text is-size-6 is-inline-flex">{{ article.year }}</p>
            <div class="media-left">
              <a :href="article.link" target="_blank" class="is-danger">Full Text</a>
              <a :href="`${article.pdf}`" class="" target="_blank">
                Download PDF
                <i class="fas fa-download"></i>
              </a>
            </div>
            <div class="dropdown is-active" @click="releaseMenu = !releaseMenu">
              <div class="dropdown-trigger">
                <button class="button" aria-haspopup="true" aria-controls="dropdown-menu">
                  <span>Dropdown button</span>
                  <span class="icon is-small">
                    <i class="fas fa-angle-down" aria-hidden="true"></i>
                  </span>
                </button>
              </div>
              <div class="dropdown-menu" id="dropdown-menu" role="menu" v-if="releaseMenu">
                <p>{{ article.abstract }}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </section>
</template>

<script>
import Publications from "../assets/data.js";
export default {
  name: "",
  components: {},
  data() {
    return {
      articles: "",
      releaseMenu: false,
    };
  },
  methods: {
    getPubs() {
      this.articles = Publications;
      // Publications.forEach(function (Publication) {

      // });
    },
    onsubmit() {
      console.log("clicked");
    },
  },
  created() {
    this.getPubs();
  },
};
</script>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: 2fr 5fr 1fr;
}

.box {
  border-radius: 1rem;
  border-style: solid;
  border-width: 1px;
  border-color: rgb(8, 8, 248);
  box-shadow: 2px 2px 10px rgb(31, 31, 34);
  /* background-color: rgb(30, 27, 27); */
  color: rgb(83, 78, 78);
}
.abstract-container {
  text-align: justify;
}
h2 {
  font-style: italic;
}
a:hover {
  border-radius: 0.5rem;
}
p {
  line-height: 2rem;
  justify-content: center;
}
#mehrdad {
  color: rgb(132, 140, 140);
  display: flex;
  flex-direction: row;
}
/* .inner-box {
  display: grid;
  grid-template-rows: 1fr;
  row-gap: 1rem;
} */
</style>
