<template>
    <div :class="clsx({
        'transition-all duration-300 p-4 shadow-sm cursor-pointer rounded-2xl border': true,
        [bgColor]: true,
        [hoverShadow]: true,
        [layoutModel[layout]]: true,
    })" :style="{ borderColor: borderColor }">
        <a :href="href" target="_blank" rel="noopener noreferrer" class="block h-full" :style="{ color: textColor }">
            <div :class="clsx({
                'relative flex': true,
                'flex-col': layout.includes('1:') || layout === '2:2',
                'flex-row items-center gap-2': layout === 'row' || layout === '2:1',
            })">

                <!-- Top-right arrow icon -->
                <div v-if="showArrow" class="absolute -top-3 -right-3 w-[24px] h-[24px]">
                    <Icon :icon-data="arrowIcon" :size="14" :border="true" />
                </div>

                <!-- Card Content -->
                <div :class="clsx({
                    'flex': true,
                    'flex-col': layout.includes('1:') || layout === '2:2',
                    'flex-row items-center gap-2': layout === 'row' || layout === '2:1',
                })">
                    <Icon v-if="layout !== '2:2'" class="rounded-lg object-contain object-center" :icon-data="iconData"
                        :size="35" />

                    <div :class="clsx({
                        'flex flex-col': true,
                        'mt-2': layout === '1:1' || layout === '2:2',
                    })">
                        <h2 class="text-base truncate leading-none mb-0.5">{{ brand }}</h2>
                        <p class="text-sm font-light text-gray-500 truncate leading-tight">
                            {{ username }}
                        </p>
                    </div>

                    <!-- Responsive image grid for 2:1 and 2:2 layouts -->
                    <div v-if="layout === '2:1' || layout === '2:2'" class="grid grid-cols-2 gap-2 w-full">
                        <img :src="image"
                            class="w-full h-auto rounded-lg object-cover" />
                    </div>

                    <!-- Description (only for 2:2 layout) -->
                    <p v-if="layout === '2:2'" class="text-sm font-light mt-2">{{ description }}</p>

                    <!-- Action Button -->
                    <button v-if="showAction" :class="clsx({
                        'action-button': true,
                        'mt-2': layout === 'card' || layout.includes('1:') || layout === '2:2',
                        'mr-3': layout === 'row' || layout === '2:1',
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
    layout?: '1:1' | 'row' | '2:1' | '1:2' | '2:2'
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
    description?: string
    image?: string
}

// Setting default values with withDefaults
const props = withDefaults(defineProps<Props>(), {
    layout: '1:1',
    href: '#',
    textColor: '#000',
    bgColor: 'bg-red-50',
    borderColor: 'rgba(255, 36, 66, 0.9)',
    hoverShadow: 'hover:shadow-xl',
    showArrow: true,
    showAction: true,
    actionText: 'Follow',
    actionColor: 'rgba(255, 39, 65, 0.8)',
    image: '',
})

// Emit events
defineEmits<{
    (e: 'action-click'): void
}>()

// Layout model for dynamic width and height
const layoutModel = {
    'card': 'w-[150px] h-[150px]',
    'row': 'w-[320px] h-[70px]',
    '2:1': 'w-[320px] h-[150px]',
    '1:2': 'w-[150px] h-[320px]',
    '2:2': 'w-[320px] h-[320px]',
};
</script>

<style scoped>
.action-button {
    padding: 0.25rem 0.75rem;
    border-radius: 0.375rem;
    font-weight: 500;
    color: #fff;
}
</style>
