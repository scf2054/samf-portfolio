<script lang="ts">
import { RouterView } from 'vue-router';
import { defineComponent, ref, type Ref } from 'vue';
import Sidebar from '../components/Sidebar.vue';
import Topbar from '../components/Topbar.vue';

export default defineComponent({
  name: 'page',
  components: {
    Sidebar,
    Topbar
  },
  setup() {
    const sidebarShowing: Ref<boolean> = ref(false);

    const sidebarChange = (newValue: boolean) => {
      sidebarShowing.value = newValue;
    }

    return {
      sidebarShowing,
      sidebarChange
    }
  }
})
</script>
<template>
  <div class="row" style="height: 100%">
    <Sidebar v-if="sidebarShowing" />
    <div class="column">
      <Topbar @show-sidebar="sidebarChange" />
      <RouterView />
    </div>
  </div>
</template>