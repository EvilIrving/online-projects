<script setup lang="ts">
import Chrome from '@/assets/icons/Chrome.json';
import Camera from '@/assets/icons/Camera V3.json';
import Hacker from '@/assets/icons/Hacker.json';
import Phone from '@/assets/icons/phone.json';

import InsCard from '@/components/InsCard.vue';

import { ref, shallowRef } from 'vue';

const name = ref('Cain');
const description = ref('很好奇很纠结很爱玩很懒');
const skills = shallowRef([
    {
        desc: 'Front End Engineer',
        icon: Hacker,
    },
    {
        desc: 'IOS Developer',
        icon: Phone,
    },
    {
        desc: 'Sony Alpha 6400, Sigma 18-50mm',
        icon: Camera,
    },
]);
</script>

<template>
    <div class="flex flex-col items-start space-y-4">
        <div class="w-40 h-4w-40 rounded-full overflow-hidden mb-6"
            style="transform: rotateZ(0deg); transition: transform 1s cubic-bezier(0.2, 1.18, 0.47, 1);">
            <img src="../../assets/images/IMG_7565.JPG" alt="">
        </div>

        <h2 class="text-3xl font-bold leading-5 text-center font-Nabla">
            {{ name }}
        </h2>

        <div class="mt-6">
            <p class="text-lg font-DMSerif">
                <strong>{{ description }}</strong>
            </p>

            <ul class=" flex flex-col text-xl font-Nabla">
                <li v-for="skill in skills" :key="skill.desc" class="flex justify-start items-center space-x-1 mt-4">
                    <LottieIcon :data="skill.icon" :width="32" :height="32" />
                    <span class="">
                        {{ skill.desc }}
                    </span>
                </li>
            </ul>
        </div>


    </div>
</template>

<style scoped></style>