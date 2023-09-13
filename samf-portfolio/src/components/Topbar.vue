<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({

})
</script>
<template>
  <div class="topbar-wrapper">
    <div class="topbar">
      <font-awesome-icon icon="bars" class="bars" />
      <span class="name">Samuel C. Frost</span>
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
    padding: 1.25rem;
    height: 100%;
    display: flex;
    justify-content: space-between;

    .bars {
      height: 100%;
    }
    .name {
      font-size: 1.25em;
      font-weight: 700;
    }
  }
}
</style>