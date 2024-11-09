<script setup lang="ts">
import { computed } from 'vue';
import ArrowIcon from "@/assets/icons/svg/arrow-line-up-right.svg"


interface CardProps {
    // 卡片标题
    title?: string;
    // 子标题/描述
    subtitle?: string;
    // 用户名/账号
    username?: string;
    // 背景图片URL
    backgroundImage?: string;
    // 宽高比例 - 默认1:1
    aspectRatio?: number;
    // 卡片宽度
    width?: string;
    // 是否显示跳转图标
    showArrow?: boolean;
    // 是否显示操作按钮
    showAction?: boolean;
    // 卡片点击跳转链接
    href?: string;
    // 自定义背景色
    backgroundColor?: string;
    // 文字颜色
    textColor?: string;
}

const props = withDefaults(defineProps<CardProps>(), {
    aspectRatio: 1,
    width: '300px',
    showArrow: true,
    showAction: false,
    backgroundColor: '#000000',
    textColor: '#ffffff'
})

const arrowIcon = ArrowIcon;

// 计算样式
const cardStyle = computed(() => ({
    width: props.width,
    paddingBottom: `${100 / props.aspectRatio}%`,
    backgroundColor: props.backgroundColor,
    backgroundImage: props.backgroundImage ? `url(${props.backgroundImage})` : 'none'
}))
</script>

<template>
    <div class="card-wrapper" :style="{ width: width }">
        <a :href="href" target="_blank" rel="noopener noreferrer" class="card" :style="cardStyle">
            <div class="content" :style="{ color: textColor }">
                <!-- 右上角箭头图标 -->
                <div v-if="showArrow" class="arrow-icon">
                    <Icon :iconData="arrowIcon" :size="20" />
                </div>

                <!-- 卡片内容 -->
                <div class="text-content">
                    <h2 v-if="title" class="title">{{ title }}</h2>
                    <p v-if="subtitle" class="subtitle">{{ subtitle }}</p>
                    <p v-if="username" class="username">{{ username }}</p>
                </div>

                <!-- 操作按钮 -->
                <button v-if="showAction" class="action-button" @click.stop>
                    Follow
                </button>
            </div>
        </a>
    </div>
</template>

<style scoped>
.card-wrapper {
    position: relative;
    border-radius: 12px;
    overflow: hidden;
}

.card {
    position: relative;
    display: block;
    width: 100%;
    height: 0;
    background-size: cover;
    background-position: center;
    text-decoration: none;
    overflow: hidden;
}

.content {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background: linear-gradient(to bottom,
            rgba(0, 0, 0, 0.1),
            rgba(0, 0, 0, 0.4));
}

.arrow-icon {
    position: absolute;
    top: 12px;
    right: 12px;
    width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(4px);
    border-radius: 50%;
    opacity: 0.8;
    transition: opacity 0.2s;
}

.card:hover .arrow-icon {
    opacity: 1;
}

.text-content {
    margin-top: auto;
}

.title {
    font-size: 1.25rem;
    font-weight: 600;
    margin: 0 0 8px 0;
}

.subtitle {
    font-size: 1rem;
    margin: 0 0 4px 0;
    opacity: 0.9;
}

.username {
    font-size: 0.875rem;
    opacity: 0.7;
    margin: 0;
}

.action-button {
    align-self: flex-start;
    margin-top: 12px;
    padding: 6px 16px;
    border: none;
    border-radius: 20px;
    background: #0095f6;
    color: white;
    font-size: 0.875rem;
    font-weight: 600;
    cursor: pointer;
    transition: background-color 0.2s;
}

.action-button:hover {
    background: #0081d6;
}
</style>