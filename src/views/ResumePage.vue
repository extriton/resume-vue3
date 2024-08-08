<script setup>
import { ref, onMounted, onBeforeUnmount, } from 'vue'

import { PerfectScrollbar  } from 'vue3-perfect-scrollbar'
import { scrollSettings } from '@/consts/consts'

import { useUserStore } from '@/stores/user'
import { useControlStore } from '@/stores/control'

const userStore = useUserStore()
const controlStore = useControlStore()

const progressInterval = ref(null)
const percent = ref(0)

function min(n1, n2) {
    if (n1 < n2) return n1
    else return n2
}

function runProgress () {
    if (progressInterval.value !== null) {
        clearInterval(progressInterval.value)
        progressInterval.value = null
    }
        
    progressInterval.value = setInterval(() => {
        if (percent.value > 100) {
            clearInterval(progressInterval.value)
            progressInterval.value = null
            return
        }
        percent.value++
    }, 20)
}

onMounted(() => {
    runProgress()
})

onBeforeUnmount(() => {
    if(progressInterval.value !== null) clearInterval(progressInterval.value)
})

</script>

<template>
<div id="resume" class="box left">
    <perfect-scrollbar class="box-content" :options="scrollSettings" ref="scroll-area">
        <h3># {{ userStore.user.resume.title }}</h3>
        <p class="sub"></p>
        <div v-for="(item, index) in userStore.user.resume.paragraphs" :key="index">
            <p>
                <span v-show="item != 'br'">{{ item }}</span>
            </p>
        </div>
        <div class="skills">
            <div v-for="(skill, index) in userStore.user.resume.skills" :key="'s' + index" class="bar">
                <div class="block-pr" :style="{ backgroundSize: min(percent, skill.level) + '% 100%' }">
                    <div class="text"><span>{{ min(percent, skill.level) }}</span>%</div>
                </div>
                <div class="last">{{skill.name}}</div>
            </div>
        </div>
        <br />
        <h3># {{ userStore.user.resume.education.title }}</h3>
        <p class="sub"></p>
        <div v-for="(item, index) in userStore.user.resume.education.paragraphs" :key="'e' + index">
            <p>
                <span v-show="item != 'br'">{{ item }}</span>
            </p>
        </div>
        <br />
    </perfect-scrollbar>
</div>
</template>

<style lang="scss">
.skills {
    width: 100%;
    margin: 5px 0 20px 0;
    display: inline-block;
    .bar {
        width: 100%;
        min-height: 21px;
        line-height: 21px;
        margin: 0 10px 20px 0;
        padding: 0;
        background: url(../assets/img/progressbar.png) top left no-repeat;
        .block-pr {
            display: inline-block;
            width: 241px;
            min-height: 21px;
            line-height: 21px;
            background: url(../assets/img/progress1.png) top left no-repeat;
            background-size: 0% 100%;
            margin-right: 20px;
            .hidden {
                display: none;
            }
            .text {
                min-height: 21px;
                line-height: 21px;
                text-align: center;
                color: #79c113;
                font-size: 16px;
                text-shadow: 1px 1px 1px #000000;
            }
        }
        .last {
            display: inline-block;
            min-height: 21px;
            line-height: 21px;
            margin: 0;
            padding: 0;
            font-weight: 400;
            color: #aaa;
            font-size: 16px;
            text-shadow: 1px 1px 0px #000000;
        }
    }
}
</style>