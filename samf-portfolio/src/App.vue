<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Sidebar from './components/Sidebar.vue';
import Topbar from './components/Topbar.vue';

</script>

<template>
  <div class="row">
    <Sidebar />
    <div class="column">
      <Topbar />
      <RouterView />
    </div>
  </div>
</template>

<style scoped>
</style>
