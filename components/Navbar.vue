<template>
  <nav class="navbar">
    <div class="navigation">
      <div class="list-item">
        <NuxtLink class="text" to="/">Home</NuxtLink>
      </div>
      <div class="list-item">
        <NuxtLink class="text" to="/about">About</NuxtLink>
      </div>
      <div class="list-item">
        <NuxtLink class="text" to="/contact">Contact</NuxtLink>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style scoped>
.navbar {
  display: flex;
  align-items: flex-start;
}
.navigation {
  display: flex;
  justify-content: space-around;
  min-width: 10rem;
  width: 15rem;
}
a {
  list-style: none;
  text-decoration: none;
}
.list-item:hover {
  background-color: rgb(200, 193, 193);
}
</style>
