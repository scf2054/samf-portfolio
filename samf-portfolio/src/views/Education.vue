<script lang="ts">
import { defineComponent } from 'vue';
import { useRoute } from 'vue-router';

export default defineComponent({
  name: 'education',
  setup() {
    const route = useRoute();
    const query = route.query;
    const courseIndex = query.courseIndex;
  }
})
</script>
<template>
  Education
</template>
<style>
</style>