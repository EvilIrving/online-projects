<template lang="">
    <Card
      v-for="(card, index) in cards"
      :key="index"
      :layout="card.layout"
      :brand="card.brand"
      :username="card.username"
      :icon-data="card.iconData"
      :arrow-icon="card.arrowIcon"
      :bg-color="colors.bgColor"
      :border-color="colors.border"
      :action-color="colors.action"
      @action-click="handleFollow"
      :action-text="actionText"
    />
</template>

<script setup lang="ts">
// 点击
import Card from "@/components/common/Card.vue"

const colors = {
    brand: "#07c160",
    bgColor: "bg-[#07c16017]",
    border: "rgba(7, 193, 96, 0.9)",
    action: "rgba(7, 193, 96, 0.8)",
}
import WechatIcon from "@/assets/icons/brand/wechat.svg"
import ArrowIcon from "@/assets/icons/svg/arrow-line-up-right.svg"

import { ref } from "vue";

const actionText = ref("查看")
const showArrow = ref(true)
const wechatIcon = WechatIcon
const arrowIcon = ArrowIcon

// 新增卡片数据
const cards = ref([
    {
        layout: "card",
        brand: "微信",
        username: "@heyiwuyi",
        iconData: wechatIcon,
        arrowIcon: arrowIcon,
    },
    {
        layout: "row",
        brand: "微信",
        username: "@heyiwuyi",
        iconData: wechatIcon,
        arrowIcon: arrowIcon,
    }
])

const handleFollow = () => {
     // 复制微信号,  到手机查看
}
</script>
