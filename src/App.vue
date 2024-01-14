<script setup>
import {ref, onMounted} from "vue";
// import {RouterLink, RouterView} from "vue-router";
import MenuItem from "@/components/MenuItem.vue";
import ChevronUp from 'vue-material-design-icons/ChevronUp.vue';
import ChevronDown from 'vue-material-design-icons/ChevronDown.vue';
import ChevronRight from 'vue-material-design-icons/ChevronRight.vue';
import ChevronLeft from 'vue-material-design-icons/ChevronLeft.vue';

let openMenu = ref(false)
</script>

<template>
  <div>
    <div class="w-[calc(100%-240px)] h-[60px] fixed right-0 z-20 bg-[#101010] bg-opacity-80 flex items-center justify-between">
      <div class="flex items-center ml-6">
        <button type="button" class="rounded-full bg-black p-[1px] cursor-pointer">
          <ChevronLeft fillColor="#FFFFFF" :size="30"/> <!--Левая кнопка-->
        </button>
        <button type="button" class="rounded-full bg-black p-[1px] ml-4 cursor-pointer">
          <ChevronRight fillColor="#FFFFFF" :size="30"/> <!--Правая кнопка-->
        </button>
      </div>

      <button
          @click="openMenu = !openMenu" :class="openMenu ? 'bg-[#282828]' : 'bg-black'"
          class="bg-black hover:bg-[#282828] rounded-full p-0.5 mr-8 mt-0.5 cursor-pointer"
      > <!--КЛИК: МЕНЯЕТЬСЯ ТРУ/ФАЛС-->
        <div class="flex items-center">
          <img src="https://yt3.ggpht.com/yti/AGOGRCqu7_bLHzCAT8Zryc1s2pMRXB9_N0LhUiM28YIhIA=s88-c-k-c0x00ffffff-no-rj" width="27" class="rounded-full" alt="">
          <div class="text-white text-[14px] ml-1.5 font-semibold">usssagn1</div>
          <ChevronDown v-if="!openMenu" @click="openMenu = true" fill-color="#ffffff" :size="25"/> <!--ЕСЛИ openMinu - false, клик - openMenu - true-->
          <ChevronUp v-else @click="openMenu = false" fill-color="#ffffff" :size="25"/> <!--ТУТ клик - openMenu - false-->
        </div>
      </button> <!--КНОПКА АККАУНТ-->
      <span
          v-if="openMenu"
          class="fixed w-[190px] bg-[#282828] shadow-2xl z-50 rounded-md top-[52px] right-[35px] p-1 cursor-pointer"
      >
        <ul class="text-gray-200 font-semibold text-[14px]">
          <li class="px-3 py-2.5 hover:bg-[#3E3D3D] border-b border-b-gray-600">Profile</li>
          <li class="px-3 py-2.5 hover:bg-[#3E3D3D]">Log out</li>
        </ul>
      </span> <!--МЕНЮ АККАУНТА-->
    </div>

    <div id="SideNav" class="h-[100%] p-6 w-[240px] fixed z-50 bg-black">
      <Router-link to="/">
        <img width="125" src="/images/icons/spotify-logo.png">
      </Router-link>
      <div class="my-8"></div>
      <ul>
        <Router-link to="/">
          <MenuItem class="ml-[1px]" :icon-size="23" name="Home" icon-string="home" page-url="/"/>
        </Router-link>
      </ul>
    </div>
  </div>
</template>

<style scoped>

</style>
