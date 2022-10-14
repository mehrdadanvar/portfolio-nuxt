<template>
  <div class="cont">
    <div class="group">
      <label for="">Name</label>
      <textarea class="area" name="" id="" cols="30" rows="10">mehrdad</textarea>
    </div>
    <div class="group">
      <label for="">Email</label>
      <textarea class="area" name="" id="" cols="30" rows="10">mehrdad</textarea>
    </div>
    <div class="group">
      <label for="">text</label>
      <textarea class="area" name="" id="" cols="30" rows="10">mehrdad</textarea>
    </div>
  </div>
</template>

<script>
export default {
  name: "Table",
};
</script>

<style>
.cont {
  display: flex;
}
.group {
  display: flex;
  flex-direction: column;
}
.area {
  border: 2px solid grey;
  border-radius: 1rem;
  padding: 1rem;
}
</style>
