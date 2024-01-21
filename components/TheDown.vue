<script setup lang="ts">
const dayjs = useDayjs();
const { is_current_day } = useDay();
const now = dayjs();

function getFebruaryEighteenth() {
  const year = now.year();
  const target_time = `${year}-02-18T00:00:00`;
  const is_before = now.isBefore(target_time);

  if (is_before) return target_time;
  else return `${year + 1}-02-18T00:00:00`;
}

const endTime = dayjs(getFebruaryEighteenth());

const _xor = ref("");
const xor = computed({
  get: () => _xor.value,
  set: str => _xor.value = str
});

setInterval(() => {
  xor.value = (endTime.diff(dayjs()) / (1000 * 3600 * 24)).toFixed(6);
  if (Number(xor.value) < 0) is_current_day.value = true;
}, 800);
</script>

<template>
  <div class="the-down">
    <div v-if="!is_current_day">
      <span>倒计时：</span>
      <span>{{ xor }}</span>
      <span>天</span>
    </div>
    <div v-else>
      百运昌隆 🎉
    </div>
  </div>
</template>

<style scoped>
@layer comp {
  .the-down {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 54px;

    div {
      margin: 0 14px;
    }
    /* text-shadow: #000 1px 0 0, #000 0 1px 0, #000 -1px 0 0, #000 0 -1px 0; */
  }
}
</style>
