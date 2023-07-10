<template>
  <span>{{title}}</span>
</template>

<script>
export default {
  name: 'MenuItem',
  functional: true,
  props: {
    title: {
      type: String,
      default: ''
    }
  },
}
</script>

<style scoped>
.sub-el-icon {
  color: currentColor;
  width: 1em;
  height: 1em;
}
</style>
