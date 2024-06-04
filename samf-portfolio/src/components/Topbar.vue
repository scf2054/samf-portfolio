<script lang="ts">
import { defineComponent, onMounted, ref, type Ref } from 'vue';

export default defineComponent({
  name: "top-bar",
  emits: ["showSidebar"],
  setup(props, {emit}) {
    const showSidebar: Ref<boolean> = ref(true);

    const toggleSidebar = (): void => {
      showSidebar.value = !showSidebar.value;
      emit("showSidebar", showSidebar.value);
    }

    onMounted(() => {
      emit("showSidebar", showSidebar.value);
    });

    return {
      toggleSidebar
    }
  }
})
</script>
<template>
  <div class="topbar-wrapper">
    <div class="topbar">
      <font-awesome-icon icon="bars" class="bars" @click="toggleSidebar()" />
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
      cursor: pointer;
    }
    .name {
      font-size: 1.25em;
      font-weight: 700;
    }
  }
}
</style>