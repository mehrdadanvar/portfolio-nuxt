<template>
  <div class="box">
    <div class="container">
      <div class="card">
        <div class="card-content">
          <div class="media">
            <div class="media-left">
              <figure class="image is-96x96">
                <img />
              </figure>
              <button @click="fireFun()" class="button is-primary">press me</button>
            </div>
            <div class="media-content">
              <p class="title is-4">{{ skillTitle }}</p>
              <p></p>
            </div>
          </div>

          <div class="content">
            of research projects from proposals to publications.
            <br />
          </div>
        </div>
        <div class="text"><a href="" class="is-size-4">read more</a></div>
      </div>
      <div class="card">
        <div class="card-image"></div>
        <div class="card-content">
          <div class="media">
            <div class="media-left">
              <figure class="image is-96x96">
                <img src="../assets/docker.svg" alt="Placeholder image" />
              </figure>
            </div>
            <div class="media-content">
              <p class="title is-5">Docker</p>
            </div>
          </div>

          <div class="content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris
            <br />
            <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
          </div>
        </div>
      </div>

      <footer>
        <a href="https://icons8.com/">Icons by icon8.com</a>
        <div>
          <a href="https://iconscout.com/icons/html" target="_blank">Html Icon</a> by
          <a href="https://iconscout.com/contributors/jagathish">Jagathish Saravanan</a> on
          <a href="https://iconscout.com">IconScout</a>
        </div>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  name: "Skills",
  props: {
    skillTitle: String,
    imageName: String,
  },
  methods: {
    fireFun() {
      console.log("botton was clicked");
    },
  },
  data() {
    return {};
  },
};
</script>

<style scoped>
.container {
  display: grid;
  grid-template-columns: 9fr 6fr;
  width: 1500px;
}
.box {
  border-radius: 1rem;
  padding: 1rem;
  box-shadow: 0.2rem 0.2rem 0.2rem 0.2rem rgb(73, 70, 66);
  border-style: solid;
  border-color: rgb(129, 124, 124);
}
.img {
  border-radius: 60%;
}

.fas {
  color: red;
}
</style>
