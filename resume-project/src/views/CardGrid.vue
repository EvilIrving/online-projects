<script setup lang="ts">
import { type Component, computed } from 'vue'
defineOptions({
    name: 'CardGrid'
})
interface GridItem {
    id: string | number
    title?: string
    subtitle?: string
    username?: string
    backgroundImage?: string
    href?: string
    colspan?: number
    rowspan?: number
    backgroundColor?: string
}

interface CardGridProps {
    // 卡片数据数组
    items: GridItem[]
    // 网格的列数，默认为 3
    columns?: number
    // 卡片间距
    gap?: string
    // 容器宽度
    containerWidth?: string
    // 基础卡片组件
    cardComponent?: Component
}

const props = withDefaults(defineProps<CardGridProps>(), {
    columns: 3,
    gap: '12px',
    containerWidth: '100%'
})

// 计算每个卡片在网格中的位置和大小
const gridItems = computed(() => {
    return props.items.map(item => ({
        ...item,
        gridColumn: item.colspan ? `span ${item.colspan}` : 'span 1',
        gridRow: item.rowspan ? `span ${item.rowspan}` : 'span 1'
    }))
})

// 计算网格容器样式
const gridStyle = computed(() => ({
    width: props.containerWidth,
    display: 'grid',
    gridTemplateColumns: `repeat(${props.columns}, 1fr)`,
    gap: props.gap
}))
</script>

<template>
    <div class="card-grid" :style="gridStyle">
        <div v-for="item in gridItems" :key="item.id" class="grid-item" :style="{
            gridColumn: item.gridColumn,
            gridRow: item.gridRow
        }">
            <!-- 使用传入的卡片组件或默认的 SocialCard 组件 -->
            <component :is="cardComponent" v-bind="item" :style="{
                height: item.rowspan ? '100%' : undefined
            }" />
        </div>
    </div>
</template>

<style scoped>
.card-grid {
    margin: 0 auto;
}

.grid-item {
    width: 100%;
    height: 100%;
    min-width: 0;
    /* 防止网格项溢出 */
}

/* 响应式布局 */
@media (max-width: 1024px) {
    :deep(.card-grid) {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media (max-width: 640px) {
    :deep(.card-grid) {
        grid-template-columns: 1fr;
    }
}
</style>