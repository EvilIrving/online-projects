<!-- // LottieIcon.vue
https://juejin.cn/post/7121638665180168228 高级属性 
-->
<script setup lang="ts">

defineOptions({
    name: "LottieIcon",
});

import { onMounted, onBeforeUnmount, ref, watch } from 'vue'
import lottie, { AnimationItem } from 'lottie-web'

interface Props {
    // Lottie 动画的 JSON 数据
    data: object
    // 动画容器的宽度
    width?: number | string
    // 动画容器的高度
    height?: number | string
    // 是否循环播放
    loop?: boolean
    // 是否自动播放
    autoplay?: boolean
    // 动画速度
    speed?: number
}

const props = withDefaults(defineProps<Props>(), {
    width: '1em',
    height: '1em',
    loop: true,
    autoplay: true,
    speed: 0.8
})

// 动画容器引用
const container = ref<HTMLElement | null>(null)
// 动画实例
let animation: AnimationItem | null = null

// 初始化 Lottie 动画
const initLottie = () => {
    if (!container.value) return

    animation = lottie.loadAnimation({
        container: container.value,
        renderer: 'svg',
        loop: props.loop,
        autoplay: props.autoplay,
        animationData: props.data
    })

    if (props.speed !== 1) {
        animation.setSpeed(props.speed)
    }
}

// 监听数据变化
watch(
    () => props.data,
    () => {
        animation?.destroy()
        initLottie()
    },
    { deep: true }
)

// 监听速度变化
watch(
    () => props.speed,
    (newSpeed) => {
        animation?.setSpeed(newSpeed)
    }
)

// 组件挂载时初始化动画
onMounted(() => {
    initLottie()
})

// 组件卸载前销毁动画
onBeforeUnmount(() => {
    animation?.destroy()
})

// 暴露控制方法
defineExpose({
    play: () => animation?.play(),
    pause: () => animation?.pause(),
    stop: () => animation?.stop()
})
</script>

<template>
    <div ref="container" :style="{
        width: typeof width === 'number' ? `${width}px` : width,
        height: typeof height === 'number' ? `${height}px` : height
    }">
    </div>
</template>