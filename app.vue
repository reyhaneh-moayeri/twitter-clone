<template>
  <div :class="{ dark: darkMode }">
    <div class="bg-white dark:bg-dim-900">
      <div v-if="user" class="min-h-full">
        <div
          class="grid grid-cols-12 mx-auto sm:px-6 lg:max-w-7xl lg:px-8 lg:gap-5"
        >
          <!-- Left Sidebar  -->
          <div
            class="border-1 hidden border-red md:block xs:col-span-1 xl:col-span-2"
          >
            <div class="sticky top-0">
              <SidebarLeft />
            </div>
          </div>
          <!-- Main content  -->
          <main class="col-span-12 md:col-span-8 xl:col-span-6">
            <router-view></router-view>
          </main>

          <!-- Right Sidebar  -->

          <div
            class="border-1 hidden border-red md:block col-span-12 xl:col-span-4 md:col-span-3"
          >
            <div class="sticky top-0">
              <SidebarRight />
            </div>
          </div>
        </div>
      </div>

      <AuthPage v-else />
    </div>
  </div>
</template>

<script lang="ts" setup>
const darkMode = ref(false);

const { useAuthUser } = useAuth();

const user = useAuthUser();
</script>
