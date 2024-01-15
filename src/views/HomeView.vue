<script setup>
import HomeCard from "@/components/HomeCard.vue";
</script>

<template>
  <div class="p-8">
    <button type="button" class="text-white text-2xl font-semibold hover:underline cursor-pointer">
      Podcasts to make you smarter
    </button>
    <div class="py-1.5"></div>
    <div class="flex items-center">
      <HomeCard image="https://picsum.photos/id/30/300/300" title="Title is here" subTitle="Subtitle is here"/>
      <HomeCard image="https://picsum.photos/id/45/300/300" title="Title is here" subTitle="Subtitle is here"/>
      <HomeCard image="https://picsum.photos/id/65/300/300" title="Title is here" subTitle="Subtitle is here"/>
      <HomeCard image="https://picsum.photos/id/67/300/300" title="Title is here" subTitle="Subtitle is here"/>
      <HomeCard class="xl:block hidden" image="https://picsum.photos/id/100/300/300" title="Title is here" subTitle="Subtitle is here"/>
    </div>
  </div>

  <div class="p-8">
    <button type="button" class="text-white text-2xl font-semibold hover:underline cursor-pointer">
      Recomended radio
    </button>
    <div class="py-1.5"></div>
    <div class="flex items-center">
      <HomeCard image="https://picsum.photos/id/39/300/300" title="Title is here" subTitle="Subtitle is here"/>
      <HomeCard image="https://picsum.photos/id/46/300/300" title="Title is here" subTitle="Subtitle is here"/>
      <HomeCard image="https://picsum.photos/id/61/300/300" title="Title is here" subTitle="Subtitle is here"/>
      <HomeCard image="https://picsum.photos/id/69/300/300" title="Title is here" subTitle="Subtitle is here"/>
      <HomeCard class="xl:block hidden" image="https://picsum.photos/id/101/300/300" title="Title is here" subTitle="Subtitle is here"/>
    </div>
  </div>
  <div class="p-8">
    <button type="button" class="text-white text-2xl font-semibold hover:underline cursor-pointer">
      Recomended songs
    </button>
    <div class="py-1.5"></div>
    <div class="flex items-center">
      <HomeCard image="https://picsum.photos/id/31/300/300" title="Title is here" subTitle="Subtitle is here"/>
      <HomeCard image="https://picsum.photos/id/34/300/300" title="Title is here" subTitle="Subtitle is here"/>
      <HomeCard image="https://picsum.photos/id/66/300/300" title="Title is here" subTitle="Subtitle is here"/>
      <HomeCard image="https://picsum.photos/id/100/300/300" title="Title is here" subTitle="Subtitle is here"/>
      <HomeCard class="xl:block hidden" image="https://picsum.photos/id/100/300/300" title="Title is here" subTitle="Subtitle is here"/>
    </div>
  </div>
</template>
