<script lang="ts">
import { defineComponent, ref, type Ref } from 'vue';
import router from '../router/index';

interface Route {
  readonly title: string;
  readonly route: string;
  readonly icon: string;
}

export default defineComponent({
  name: 'sidebar',
  emits: [],
  setup() {
    return {
      routes: router.getRoutes()
    }
  }
})
</script>
<template>
  <div class="sidebar-wrapper">
    <div class="sidebar">
      <div class="column routes">
        <div class="route" v-for="route of routes">
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
  width: 43%;
  max-width: 250px;
  z-index: 10;

  .sidebar {
    box-shadow: 5px 0px 20px 0px #0000001c;
    background-color: var(--color-3);
    width: 100%;
    height: 100%;
    padding: 2rem
  }
}
</style>