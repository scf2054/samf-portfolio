<script lang="ts">
import { defineComponent, onMounted } from 'vue';
import { useRoute } from 'vue-router';

export default defineComponent({
  name: 'education',
  setup() {
    const route = useRoute();
    const query = route.query;
    const courseIndex = query.courseIndex;
    
    onMounted(() => {
    })
  }
})
</script>
<template>
  Education
</template>
<style>
</style>