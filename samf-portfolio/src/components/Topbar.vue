<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({

})
</script>
<template>
  <div class="topbar-wrapper">
    <div class="topbar">

    </div>
  </div>
</template>
<style>
.topbar-wrapper {
  position: relative;
  top: 0;
  width: 100%;
  height: 70px;
  z-index: 9;

  .topbar {
    box-shadow: 0px 5px 20px 0px #0000001c;
    background-color: var(--color-3);
    padding: 15px;
    height: 100%;
  }
}
</style>