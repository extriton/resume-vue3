<script setup>
import { ref, computed } from 'vue'
import { PerfectScrollbar } from 'vue3-perfect-scrollbar'
import { scrollSettings, imagePath } from '@/consts/consts'

import ModalBox from '@/components/ModalBox.vue'

import { useUserStore } from '@/stores/user'

const userStore = useUserStore()

const selectedProject = ref(null)

const isModalOpened = ref(false)

const projects = computed(() => userStore.user.portfolio.projects)

function imageUrl (project) {
    if (project === null) return ''
        return imagePath + project.imageFilename
}

function openModal(index) {
    selectedProject.value = projects.value[index]
    isModalOpened.value = true
}

function closeModal() {
    isModalOpened.value = false
}

</script>

<template>
<div id="portfolio" class="box left">
    <perfect-scrollbar class="box-content" :options="scrollSettings" ref="scroll-area">
        <h3># {{ userStore.user.portfolio.title }}</h3>
        <p class="sub"></p>
        <!-- gallery begin here -->
        <div class="gallery-block">
            <div class="gallery" v-for="(project, index) in projects" :key="'p' + index" :class="{ last: (index + 1) % 2 == 0 }">
                <div class="img">
                    <img :src="imageUrl(project)" :title="project.description" width="216" height="105" />
                </div>
                <div class="des">{{ project.name }}</div>
                <div class="block-zoom">
                    <div class="zoom" @click="openModal(index)"></div>
                    <a :href="project.link" :title="project.description" class="link" target="_blank"></a>
                </div>
            </div>   
        </div>
        <!-- gallery end here -->
    </perfect-scrollbar>
    <!-- MODAL -->
    <modal-box :isOpen="isModalOpened" @modal-close="closeModal" name="about-modal">
        <template #image>
            <img :src="imageUrl(selectedProject)" />
        </template>
        <template #footer>
            <div class="skills">
                <span class="tech" v-for="(item, index) in selectedProject.description.split(', ')" :key="'m' + index">
                    {{ item }}
                </span>
            </div>
            <div class="link">
                Link: <a :href="selectedProject.link" target="_blank">{{ selectedProject.link }}</a>
            </div>
        </template>
    </modal-box>
</div>
</template>

<style lang="scss">
.skills {
    display: block;
    width: 100%;
    text-align: left;
    padding: 30px 20px 20px 20px;
    margin: 30px 0 20px 0;
    border-top: 1px solid grey;
    & > span {
        margin-right: 30px;
        border: 1px solid #fff;
        padding: 10px 20px;;
        border-radius: 20px;
    }
}
.link {
    display: block;
    width: 100%;
    text-align: left;
    padding: 0 20px;
}
</style>
