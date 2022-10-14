<template>
  <div class="box mb-2 pb-2">
    <i class="fa-solid fa-graduation-cap is-size-2"></i>
    <!-- <h2 class="text is-size-4 has-text-weight-bold">Education</h2> -->
    <i class="fa-solid fa-graduation-cap is-size-2"></i>

    <hr />
    <div class="grid-education">
      <div class="education-element">
        <p class="text is-size-6 mb-2">
          <strong>Fairleigh Dickinson University</strong>
        </p>
        <div class="container px-2">
          <p>Mater of Global Health and Human Services Administration</p>
          <p>Vancouver, British Columbia</p>
          <p>Canada</p>
        </div>
      </div>
      <div class="education-element">
        <p class="text is-italic has-text-grey-light">September 2021- Current</p>
      </div>
      <div class="education-element">
        <p class="text is-size-6 mb-2">
          <strong>Shiraz University of Medical Sciences</strong>
        </p>
        <div class="container px-2">
          <p>Medical Doctraite</p>
          <p>Shiraz, Fars</p>
          <p>Iran</p>
          <p>
            Forty two months of supervised pre-graduate internship at university affiliated clinics
          </p>
          <p>Cumulative Weighted Average 17.85/20 (80%)</p>
        </div>
      </div>
      <div class="education-element">
        <p class="text is-italic has-text-grey-light">September 2006 to May 2014</p>
      </div>
    </div>
    <i class="fa-thin fa-book-open-cover"></i>
  </div>
</template>

<script>
export default {
  name: "MainEducation",
};
</script>

<style scoped>
.grid-education {
  display: grid;
  grid-template-columns: 2fr 1fr;
  row-gap: 10px;
}
</style>
