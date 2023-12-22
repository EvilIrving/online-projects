<template>
  <div style="title-container">
    <svg-icon :icon-class="icon"></svg-icon>
    <span class="title">{{title}}</span>
  </div>
</template>

<script>
export default {
  name: 'Title',
  props: {
    title: {
      type: String,
      default: 'Test'
    }
  },
};
</script>


<style lang="scss" scoped>
.title-container {
  width: "100%";
  .title {
    font-size: 18px;
    color: "#ccc";
    font-weight: bold;
  }
}
</style>