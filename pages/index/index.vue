<script setup lang="ts">
</script>

<template>
  <the-up class="the-up" />
  <the-down class="the-down" />
  <the-card />
</template>

<style scoped>
@layer layout {
  .the-up,
  .the-down {
    position: absolute;
    width: 100%;
    top: 0;
    left: 0;
    height: 50%;
    background-color: var(--red-bright-1);
  }
  .the-down {
    top: 50%;
    background-color: var(--yellow-bright-2);
    /* color: var(--yellow-bright-2); */
  }
}
</style>
