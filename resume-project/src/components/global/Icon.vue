<template>
    <div
        :class="{ 'w-full h-full border-2 border-gray-100 bg-gray-300 rounded-full flex items-center justify-center': border }">
        <div v-if="isSvg" :style="computedStyle" v-html="iconData" aria-hidden="true" class="icon"></div>
        <img v-else :src="iconData" :style="computedStyle" aria-hidden="true" class="icon" />
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

defineOptions({
    name: "Icon",
});

interface Props {
    iconData: string; // SVG 数据字符串 或 图片 URL
    size?: string | number // 图标大小
    border?: boolean // 是否显示边框
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