<script setup lang="ts">
import Profile from '@/components/Profile.vue';
import InstagramCard from '@/components/cards/InstagramCard.vue';
</script>

<template>
    <main class="flex h-full w-full max-w-[428px] flex-1 flex-col p-6 pt-0 xl:max-w-[1728px] xl:flex-row xl:p-16">
        <div class="mb-10 flex flex-col px-4 xl:mb-0 xl:mr-20 xl:flex-1 xl:px-0">
            <Profile></Profile>
        </div>
        <div class="relative flex-1 xl:w-[820px] xl:flex-none">
            <div class="bento-grid">
                <!-- <Projects></Projects> -->
                <InstagramCard></InstagramCard>
            </div>

        </div>
    </main>
</template>

<style scoped></style>