<script lang="ts">
import { defineComponent, onMounted, ref, type Ref } from 'vue';
import router from '../router/index';
import type { RouteRecordRaw } from 'vue-router';

export default defineComponent({
  name: 'sidebar',
  emits: [],
  setup() {
    const routes = router.getRoutes();
    const activeRouteHeight: Ref<number> = ref(0);
    const activeRouteY: Ref<number> = ref(0);

    onMounted(() => {
      clickRoute(routes[0]);
    })

    // events that occur when a route is clicked
    const clickRoute = (route: RouteRecordRaw): void => {
      router.push(route.path);
      setActiveRouteStyle(route.path);
    }

    // sets the height and offset of the active route indicator based on the route id passed in
    const setActiveRouteStyle = (routeID: string): void => {
      const element = document.getElementById(routeID);
      if (element) {
        activeRouteHeight.value = element.clientHeight;
        activeRouteY.value = element.offsetTop;
      } else {
        console.error("Route element does not exist.");

      }
    }

    return {
      routes,
      activeRouteHeight,
      activeRouteY,
      clickRoute
    }
  }
})
</script>
<template>
  <div class="sidebar-wrapper">
    <div class="sidebar">
      <div class="column routes">
        <div class="route" v-for="route of routes" @click="clickRoute(route)" :id="route.path">
          <font-awesome-icon :icon="route.meta.icon" class="icon fa-lg" />
          <span class="name">{{ route.name }}</span>
        </div>
      </div>
      <div class="active-route-indicator" :style="{ height: activeRouteHeight + 'px', top: activeRouteY + 'px' }"></div>
    </div>
  </div>
</template>
<style scoped>
.sidebar-wrapper {
  position: relative;
  height: 100vh;
  width: 43%;
  max-width: 275px;
  z-index: 10;

  .sidebar {
    box-shadow: 5px 0px 20px 0px #0000001c;
    background-color: var(--color-3);
    width: 100%;
    height: 100%;
    padding-top: 2rem;

    .routes {
      .route {
        width: 100%;
        padding: 1.5rem;
        display: flex;
        align-items: center;

        .icon {
          width: 20px;
          margin-right: 15px;
          transition: ease-in-out 0.2s;
        }

        .name {
          font-size: 1.1em;
          font-weight: 600;
          transition: ease-in-out 0.2s;
        }
      }

      .route:hover {
        cursor: pointer;

        .icon {
          transition: ease-in-out 0.2s;
          color: var(--color-1-light);
        }

        .name {
          transition: ease-in-out 0.2s;
          color: var(--color-1-light);
        }
      }
    }

    .active-route-indicator {
      position: absolute;
      top: 0;
      border-right-style: solid;
      border-right-color: var(--color-1-dark);
      border-right-width: 7.5px;
      border-radius: 5px;
      width: 100%;
      background: transparent;
      z-index: 2;
      transition: ease-in-out 0.3s;
      box-shadow: 0px 0px 5px 2px #0000001c;
    }
  }
}
</style>