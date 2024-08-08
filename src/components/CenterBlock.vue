<script setup>
import ScannerBlock from '@/components/ScannerBlock.vue'
import MainBlock from '@/components/MainBlock.vue'

import { useControlStore } from '@/stores/control'

const controlStore = useControlStore()

</script>

<template>
<div v-if="controlStore.control.isOpenedCenterBlock" class="center-block-wrapper">
    <scanner-block></scanner-block>
    <main-block></main-block>
</div>
</template>

<style lang="scss">
.center-block-wrapper {
    margin: 0 auto;
    background: #171d23;
    background: url(../assets/img/bg-center.jpg);
    border-top: 3px #14191f solid;
    padding: 30px 0;
}
</style>