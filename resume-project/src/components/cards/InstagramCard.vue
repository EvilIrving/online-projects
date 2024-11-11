<template lang="">

<Card
  layout="card"
  brand="小红书"
  username="@cain"
  :icon-data="xiaohongshuIcon"
  :arrow-icon="arrowIcon"
/>

<Card
  layout="row"
  brand="小红书"
  username="@cain"
  :icon-data="xiaohongshuIcon"
  :arrow-icon="arrowIcon"
  bg-color="bg-blue-50"
  border-color="rgba(59, 130, 246, 0.9)"
  action-color="rgba(59, 130, 246, 0.8)"
  @action-click="handleFollow"
/>
   </template>


<script setup lang="ts">
import Card from "@/components/common/Card.vue"
import XiaohongshuIcon from "@/assets/icons/brand/xhs.svg"
import ArrowIcon from "@/assets/icons/svg/arrow-line-up-right.svg"

import { ref } from "vue";


const showArrow = ref(true)
const xiaohongshuIcon = XiaohongshuIcon
const arrowIcon = ArrowIcon


</script>


<style scoped>
/* border-radius: 6px;
    font-size: 13px;
    color: rgb(255, 255, 255);
    font-weight: bold;
    --603c8c9e: #FF2741;
    --2aab5631: #FF274177;
    --5102f3ea: #FF2741dd;
    --513bdcb2: #FF2741cc;
    --0bb65c17: #FF2741cc;
    --506e8d34: 0.97; */
</style>