<script setup lang="ts">
import CardGrid from '@/views/CardGrid.vue'
import Card from '@/components/common/Card.vue'

// 模拟卡片数据
const cardItems = [
    {
        id: 1,
        title: "a curious creative designing for human",
        username: "@samarthjajodia",
        backgroundColor: "#000000",
        colspan: 1, // 占据两列
        rowspan: 1
    },
    {
        id: 2,
        title: "Buy Me a Coffee",
        username: "@samarthjajodia",
        backgroundColor: "#FFFFFF",
        textColor: "#000000"
    },
    {
        id: 3,
        title: "Baking delicious design",
        username: "@samarthjajodia",
        backgroundColor: "#833AB4"
    },
    {
        id: 4,
        title: "Magical Secrets",
        username: "@samarthjajodia",
        backgroundColor: "#1DA1F2",
        colspan: 2,
        rowspan: 2
    },
    {
        id: 5,
        title: "Let's vibe here on design, art & beyond...",
        username: "@samarthjajodia",
        backgroundColor: "#0077B5"
    },
    {
        id: 6,
        title: "Say hello",
        username: "@samarthjajodia",
        backgroundColor: "#1DA1F2"
    }
]
</script>

<template>
    <CardGrid :items="cardItems" :columns="3" gap="12px" container-width="1200px" :card-component="Card" />
</template>