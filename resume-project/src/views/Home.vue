<script setup lang="ts">
import Profile from '@/components/Profile.vue';
import InstagramCard from '@/components/cards/InstagramCard.vue';
import WeChatCard from '@/components/cards/WeChatCard.vue';
import UsageCard from '@/components/cards/UsageCard.tsx';

import ImageCard from '@/components/image-card/index';
import exampleImg from '@/assets/images/01.jpg';


const image = exampleImg
</script>

<template>
    <main class="flex h-full w-full max-w-[428px] flex-1 flex-col p-6 pt-0 xl:max-w-[1728px] xl:flex-row xl:p-16">
        <div class="mb-10 flex flex-col px-4 xl:mb-0 xl:mr-20 xl:flex-1 xl:px-0">
            <Profile></Profile>
        </div>
        <div class="relative flex-1 xl:w-[820px] xl:flex-none">
            <div class="bento-grid flex flex-col gap-4">
                <!-- <Projects></Projects> -->


                <!-- 
                <div class="flex flex-row flex-wrap gap-4">

                    <InstagramCard></InstagramCard>



                </div>

                <div class="flex flex-row flex-wrap gap-4">
                    <WeChatCard></WeChatCard>
                </div> -->


                <!-- <UsageCard></UsageCard> -->
                <ImageCard :image="image" desc="example" link="https://www.baidu.com"></ImageCard>
            </div>

        </div>
    </main>
</template>

<style scoped></style>