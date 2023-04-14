<template>
  <div class="flex flex-col">
    <!-- What's happening -->
    <SidebarRightPreviewCard title="What's happening">
      <SidebarRightPreviewCardItem v-for="whatsHappening in whatsHappeningItem">
        <div>
          <h2 class="font-bold text-gray-800 text-md dark:text-white">
            {{ whatsHappening.title }}
          </h2>
          <p class="text-xs text-gray-400">{{ whatsHappening.count }}</p>
        </div>
      </SidebarRightPreviewCardItem>
    </SidebarRightPreviewCard>

    <!-- Who to follow -->

    <SidebarRightPreviewCard title="Who to follow">
      <SidebarRightPreviewCardItem v-for="whoToFollow in whoToFollowItem">
        <div class="flex flex-row justify-between items-center p-2">
          <div class="flex flex-row">
            <img
              class="w-10 h-10 rounded-full"
              :src="whoToFollow.image"
              :alt="whoToFollow.name"
            />

            <div class="flex flex-col ml-2">
              <h1 class="text-small font-bold text-gray-900 dark:text-white">
                {{ whoToFollow.name }}
              </h1>
              <p class="text-xs text-gray-400">{{ whoToFollow.handle }}</p>
            </div>
          </div>
          <div class="flex items-center h-full">
            <button
              class="px-4 py-2 font-bold text-xs text-white dark:text-black bg-black dark:bg-white rounded-full"
            >
              Follow
            </button>
          </div>
        </div>
      </SidebarRightPreviewCardItem>
    </SidebarRightPreviewCard>
  </div>
</template>

<script setup>
const whatsHappeningItem = ref([
  {
    title: "SpaceX",
    count: "18.8k Tweets",
  },
  {
    title: "#CodingIsFun",
    count: "15.8k Tweets",
  },
  {
    title: "#ArtForAll",
    count: "1.8k Tweets",
  },
]);

const whoToFollowItem = ref([
  {
    name: "Joe Biden",
    handle: "@joeBiden",
    image: "https://picsum.photos/200/200 ",
  },
  {
    name: "Joe Biden",
    handle: "@joeBiden",
    image: "https://picsum.photos/200/200 ",
  },
  {
    name: "Joe Biden",
    handle: "@joeBiden",
    image: "https://picsum.photos/200/200 ",
  },
]);
</script>
