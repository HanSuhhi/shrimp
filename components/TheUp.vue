<script setup lang="ts">
const { is_current_day } = useDay();
</script>

<template>
  <div class="the-up">
    <span v-if="!is_current_day">似乎还有一段准备时间</span>
    <span v-else>生日快乐 🍰</span>
  </div>
</template>

<style scoped>
@layer comp {
  .the-up {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 54px;
    span {
      margin: 0 14px;
    }
  }
}
</style>
