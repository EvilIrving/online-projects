<script setup lang="ts">
import { ref, reactive, effect, Ref } from 'vue'

defineProps<{ msg: string }>()

// 定义类型
interface User {
  name: string
}

// 使用 ref
let name: Ref<User> = ref({
  name: 'Ref Name'
})

// 使用 TypeScript 的 typeof 来检查类型
type NameType = typeof name
console.log('name type:', typeof name) // 运行时的 typeof
console.log('name value:', name.value.name) // 访问实际值

// 使用 reactive
let user: User = reactive({ name: 'Reactive Name' })
type UserType = typeof user
</script>

<template>
  <h1>{{ name.name }}</h1>
  <h2>{{ user.name }}</h2>


  <p>
    Check out
    <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank">create-vue</a>, the official Vue + Vite
    starter
  </p>
  <p>
    Learn more about IDE Support for Vue in the
    <a href="https://vuejs.org/guide/scaling-up/tooling.html#ide-support" target="_blank">Vue Docs Scaling up
      Guide</a>.
  </p>
  <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
