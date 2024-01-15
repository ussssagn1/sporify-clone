<script setup>
import {ref, onMounted} from "vue";
// import {RouterLink, RouterView} from "vue-router";
import MenuItem from "@/components/MenuItem.vue";
import MusicPlayer from "@/components/MusicPlayer.vue";
import ChevronUp from 'vue-material-design-icons/ChevronUp.vue';
import ChevronDown from 'vue-material-design-icons/ChevronDown.vue';
import ChevronRight from 'vue-material-design-icons/ChevronRight.vue';
import ChevronLeft from 'vue-material-design-icons/ChevronLeft.vue';
import { useSongStore } from "@/stores/song.js";
import {storeToRefs} from "pinia";

const useSong = useSongStore()
const { isPlaying, currentTrack } = storeToRefs(useSong)

onMounted(() => {
  isPlaying.value = false
})
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
        <Router-link to="/search">
          <MenuItem class="ml-[1px]" :icon-size="24" name="Search" icon-string="search" page-url="/search"/>
        </Router-link>
        <Router-link to="/library">
          <MenuItem class="ml-[2px]" :icon-size="23" name="Library" icon-string="library" page-url="/library"/>
        </Router-link>
        <div class="py-3.5"></div>
        <MenuItem :icon-size="24" name="Create Playlist" icon-string="playlist" page-url="/playlist"/>
        <MenuItem class="-ml-[1px]" :icon-size="27" name="Like Songs" icon-string="liked" page-url="/liked"/>
      </ul>
      <div class="border-b border-b-gray-700"></div>
      <ul>
        <li class="font-semibold text-[15px] mt-3 text-gray-300 hover:text-white">My Playlist #1</li>
        <li class="font-semibold text-[15px] mt-3 text-gray-300 hover:text-white">My Playlist #2</li>
        <li class="font-semibold text-[15px] mt-3 text-gray-300 hover:text-white">My Playlist #3</li>
        <li class="font-semibold text-[15px] mt-3 text-gray-300 hover:text-white">My Playlist #4</li>
      </ul>
    </div>
  </div>
  <div class="fixed right-0 top-0 overflow-x-hidden w-[calc(100%-240px)] h-full bg-gradient-to-b from-[#1C1C1C] to-black">
    <div class="mt-[70px]"></div>
    <RouterView />
    <div class="mb-[100px]"></div>
  </div>

  <MusicPlayer ></MusicPlayer>
</template>

<style scoped>

</style>
