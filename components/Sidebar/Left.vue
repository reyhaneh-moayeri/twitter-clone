<template>
  <div class="h-screen flex flex-col">
    <div
      class="p-2 my-2 hover:bg-blue-50 rounded-full w-min dark:hover:bg-white/20"
      :class="defaultTransition"
    >
      <NuxtLink to="/">
        <div class="w-8 h-8">
          <LogoTwitter />
        </div>
      </NuxtLink>
    </div>

    <SidebarLeftTab>
      <HomeIcon />
    </SidebarLeftTab>
  </div>
</template>

<script setup>
import { HomeIcon } from "@heroicons/vue/solid";
const { defaultTransition } = useTailwindConfig();
</script>
