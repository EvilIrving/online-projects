<template>
    <div v-if="isSvg" :style="computedStyle" v-html="iconData" aria-hidden="true" class="icon" />
    <img v-else :src="iconData" :style="computedStyle" aria-hidden="true" class="icon" />
</template>

<script setup lang="ts">
import { computed, defineProps } from 'vue'

defineOptions({
    name: "Icon",
});

interface Props {
    iconData: string; // SVG 数据字符串 或 图片 URL
    size?: string | number // 图标大小
}

const props = defineProps<Props>()

// 判断是否是 SVG 数据
const isSvg = computed(() => {
    return props.iconData.trim().startsWith('<svg')
})

// 计算图标样式
const computedStyle = computed(() => {
    const size = typeof props.size === 'number' ? `${props.size}px` : props.size
    return {
        width: size || '24px',
        height: size || '24px',
        display: 'inline-block',
        verticalAlign: 'middle',
    }
})
</script>

<style scoped>
/* 默认样式 */
.icon {
    object-fit: contain;
}

.icon svg {
    width: 100%;
    height: 100%;
    fill: currentColor;
}
</style>