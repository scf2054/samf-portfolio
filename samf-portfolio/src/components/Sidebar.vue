<script lang="ts">
import { defineComponent, ref, type Ref } from 'vue';
import router from '../router/index';
import type { RouteRecordRaw } from 'vue-router';

export default defineComponent({
  name: 'sidebar',
  emits: [],
  setup() {
    const clickRoute = (route: RouteRecordRaw) => {
      router.push(route.path);
    }

    return {
      routes: router.getRoutes(),
      clickRoute
    }
  }
})
</script>
<template>
  <div class="sidebar-wrapper">
    <div class="sidebar">
      <div class="column routes">
        <div class="route" v-for="route of routes" @click="clickRoute(route)">
          <font-awesome-icon :icon="route.meta.icon" />
          <span>{{ route.name }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.sidebar-wrapper {
  position: relative;
  height: 100vh;
  /* width: 43%; */
  max-width: 250px;
  z-index: 10;

  .sidebar {
    box-shadow: 5px 0px 20px 0px #0000001c;
    background-color: var(--color-3);
    width: 100%;
    height: 100%;

    padding: 2rem;

    .routes {
      .route:hover {
        cursor: pointer;
        text-decoration: underline;
    }
    }
  }
}
</style>