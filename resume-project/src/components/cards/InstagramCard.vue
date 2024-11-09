<template lang="">
   <div class="w-[150px] h-[150px] border border-[#FF2442]/90 rounded-2xl p-4 shadow-sm cursor-pointer bg-[#FF244210] hover:shadow-xl transition-all duration-100">
        <a :href="href" target="_blank" rel="noopener noreferrer" class="card" :style="cardStyle">
            <div class="relative" :style="{ color: textColor }">
                <!-- 右上角箭头图标 -->
                <div v-if="showArrow" class="w-[30px] h-[30px] absolute -top-2 -right-2">
                    <Icon :iconData="arrowIcon" :size="14" :border="true" />
                </div>

                <!-- 卡片内容 -->
                <div class="text-content">
                     <section>
                      <div class="icon">
                        <Icon class="rounded-lg object-contain object-center" :iconData="xiaohongshuIcon" :size="35" />
                      </div>
                        <h2 class="text-lg mt-2  text-overflow">{{brand}}</h2>
                        <p class="text-base font-light text-gray-500 text-overflow"> {{username}}</p>
                     </section>
                </div>

                <!-- 操作按钮 -->
                <button v-if="showAction" class="action-button bg-[#FF2741cc]" @click.stop>
                    {{ actionText }}
                </button>
            </div>
        </a>
    </div>
</template>


<script setup lang="ts">
import XiaohongshuIcon from "@/assets/icons/brand/xhs.svg"
import ArrowIcon from "@/assets/icons/svg/arrow-line-up-right.svg"

import { ref } from "vue";


const showArrow = ref(true)
const xiaohongshuIcon = XiaohongshuIcon
const arrowIcon = ArrowIcon

const showAction = ref(true)
const actionText = ref('Follow')
const username = ref('@cain')
const brand = ref('小红书')
 
</script>


<style scoped>
/* border-radius: 6px;
    font-size: 13px;
    color: rgb(255, 255, 255);
    font-weight: bold;
    --603c8c9e: #FF2741;
    --2aab5631: #FF274177;
    --5102f3ea: #FF2741dd;
    --513bdcb2: #FF2741cc;
    --0bb65c17: #FF2741cc;
    --506e8d34: 0.97; */
</style>