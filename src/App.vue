<template>
  <main>
    <router-view v-slot="{ Component }">
      <component :is="Component" />
    </router-view>
  </main>
</template>

<style>
/* vue3-perfect-scrollbar styles */
.ps__rail-y {display: block; opacity: 1; width: 4px; height: 390px; background: #101519; right: 2px; position: absolute;}
.ps--active-y > .ps__rail-y,
.ps:hover > .ps__rail-y {display: block; opacity: 1; background: #101519;}
.ps__thumb-y { background: url('./assets/img/scroll.png'); width: 10px; height: 103px!important; right: -4px; position: absolute;}
.ps__rail-y:hover > .ps__thumb-y,
.ps__rail-y:focus > .ps__thumb-y,
.ps__rail-y.ps--clicking .ps__thumb-y {background: url('./assets/img/scroll.png'); width: 10px; height: 103px!important;}
.ps__thumb-y:hover {cursor: pointer;}
</style>
