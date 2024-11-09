<!-- SocialCard.vue -->
<template>
    <div :class="clsx({
        'transition-all duration-100 p-4 shadow-sm cursor-pointer rounded-2xl border': true,
        [bgColor]: true,
        [hoverShadow]: true,
        'w-[150px] h-[150px]': layout === 'card',
        'w-[350px] h-[70px]': layout !== 'card',
    })" :style="{ borderColor: borderColor }">
        <a :href="href" target="_blank" rel="noopener noreferrer" class="block h-full" :style="{ color: textColor }">
            <div :class="clsx({
                'relative flex': true,
                'flex-col': layout !== 'card',
            })">
                <!-- Top-right arrow icon -->
                <div v-if="showArrow" class="absolute -top-3 -right-3 w-[24px] h-[24px]">
                    <Icon :icon-data="arrowIcon" :size="14" :border="true" />
                </div>

                <!-- Card Content -->
                <div :class="clsx({
                    'flex': true,
                    'flex-col': layout === 'card',
                    'flex-row items-center justify-center gap-2': layout !== 'card',
                })">
                    <Icon class="rounded-lg object-contain object-center" :icon-data="iconData"
                        :size="layout === 'card' ? 35 : 35" />

                    <div :class="clsx({
                        'flex flex-col': true,
                        'mt-2': layout === 'card',
                    })">
                        <h2 class="text-base truncate leading-none mb-0.5">{{ brand }}</h2>
                        <p class="text-sm font-light text-gray-500 truncate leading-tight">
                            {{ username }}
                        </p>
                    </div>

                    <p v-show="layout !== 'card'" class="flex-1"></p>

                    <!-- Action Button -->
                    <button v-if="showAction" :class="clsx({
                        'action-button': true,
                        'mt-2': layout === 'card',
                        'mr-3': layout !== 'card',
                    })" :style="{ backgroundColor: actionColor }" @click.stop="$emit('action-click')">
                        {{ actionText }}
                    </button>
                </div>
            </div>
        </a>
    </div>
</template>

<script setup lang="ts">
import clsx from 'clsx';
interface Props {
    layout?: 'card' | 'row'
    href?: string
    textColor?: string
    bgColor?: string
    borderColor?: string
    hoverShadow?: string
    showArrow?: boolean
    showAction?: boolean
    actionText?: string
    actionColor?: string
    username: string
    brand: string
    iconData: string
    arrowIcon: string
}

// 使用withDefaults来设置默认值
const props = withDefaults(defineProps<Props>(), {
    layout: 'card',
    href: '#',
    textColor: '#000',
    bgColor: 'bg-red-50',
    borderColor: 'rgba(255, 36, 66, 0.9)',
    hoverShadow: 'hover:shadow-xl',
    showArrow: true,
    showAction: true,
    actionText: 'Follow',
    actionColor: 'rgba(255, 39, 65, 0.8)'
})

// 定义事件
defineEmits<{
    (e: 'action-click'): void
}>()
</script>

 