<template>
  <div class="default-background flex-center">
    <BackgroundNoise />
    <slot />
  </div>
</template>

<style scoped>
@layer layout {
  .default-background {
    width: 100vw;
    height: 100vh;
  }
}
</style>
