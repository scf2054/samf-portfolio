<script lang="ts">
import { defineComponent } from 'vue';
import { useRoute } from 'vue-router';

export default defineComponent({
  name: 'employment-history',
  setup() {
    const route = useRoute();
    const query = route.query;
    const expIndex = query.expIndex;
  }
})
</script>
<template>
  Employee History
</template>
<style posted></style>