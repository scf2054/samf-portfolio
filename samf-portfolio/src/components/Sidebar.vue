<script lang="ts">
import { defineComponent, ref, type Ref } from 'vue';

interface Route {
  readonly title: string;
  readonly route: string;
  readonly icon: string;
}

export default defineComponent({
  name: 'sidebar',
  // props: {

  // },
  emits: [],
  setup() {
    const routes: Route[] = [
      // {
      //   title: 'Profile',
      //   route: '/profile',
      //   icon: 
      // }
    ]
  }
})
</script>
<template>
  <div class="sidebar-wrapper">
    <div class="sidebar">

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