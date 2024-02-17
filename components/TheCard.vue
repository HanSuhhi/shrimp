<script setup lang="ts">
const is_flipped = ref(false);

const input = ref("");
const active = ref(false);
const pwd_right = ref(false);
watch(input, (v) => {
  active.value = true;
  if (v === "罐装虾") {
    is_flipped.value = !is_flipped.value;
    pwd_right.value = true;
  }
  else if (v === "") {
    active.value = false;
  }
  else {
    pwd_right.value = false;
  }
});

const container_class = computed(() => {
  const classes = ["container"];
  if (is_flipped.value) classes.push("flipped");
  return classes;
});
</script>

<template>
  <div :class="container_class">
    <div class="card front">
      <div class="content">
        <h2>TT</h2>
        <h3>砍价免费拿 包邮送到家</h3>
        <p>
          当前已砍 0217.99 元，免费拿预计再砍 <span style="color: var(--red);">1</span> 刀
        </p>
        <p>
          鉴于您在虾多多良好的信用分数，系统免费为您赠送一刀 🔪
        </p>
        <p>
          系统未避免非本人操作，请输入微信昵称进行校验
        </p>
        <input v-model="input" maxlength="5" :class="{ err: !pwd_right && active }">
        <span v-if=" !pwd_right && active" class="error">验证错误</span>
      </div>
    </div>
    <div class="card back">
      <div class="content">
        <h2>TT</h2>
        <h3>砍价成功</h3>
        <p>
          获得瑞幸咖啡 218 抵价券一张 💵
        </p>
        <p>
          节日快乐 🎉
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 1200px;
  flex-wrap: wrap;
  z-index: 1;
  transform-style: preserve-3d;
  transition: transform 1s var(--transition-timing-function);
  .back {
    transform: rotateY(180deg);
  }
  .card {
    position: absolute;
    width: 280px;
    height: 400px;
    margin: 30px;
    box-shadow: 20px 20px 50px rgba(0, 0, 0, 0.5);
    border-radius: 15px;
    background: rgba(255, 255, 255, 0.1);
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    border-top: 1px solid rgba(255, 255, 255, 0.5);
    border-left: 1px solid rgba(255, 255, 255, 0.5);
    backdrop-filter: blur(5px);
    backface-visibility: hidden;
    .content {
      padding: 20px;
      text-align: center;
      transform: translateZ(100px);
    }
  }
}

.flipped {
  transform: rotateY(180deg);
}
.container .card .content h2 {
  position: absolute;
  top: -20px;
  right: 20px;
  font-size: 8em;
  color: rgba(255, 255, 255, 0.1);
  pointer-events: none;
}

.container .card .content h3 {
  font-size: 1.8em;
  color: #fff;
}

.container .card .content p {
  font-size: 1em;
  font-weight: 200;
  color: #fff;
  text-align: left;
}

.container .card .content a {
  position: relative;
  display: inline-block;
  padding: 8px 20px;
  margin-top: 15px;
  background: #fff;
  color: #000;
  border-radius: 20px;
  text-decoration: none;
  font-weight: 500;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
}

input {
  outline-style: none ;
  display: block;
  border: 1px solid #ccc;
  border-radius: 3px;
  width: 90%;
  padding: 4px 8px;
  font-size: 14px;
  font-weight: 700;
  font-family: "Microsoft soft";
}

.err {
  color: var(--red-bright-1)
}
.error {
  background-color: var(--red-bright-2);
  color: var(--white);
  padding: 2px 8px;
  position: absolute;
  display: inline-block;
  bottom: 23px;
  right: 30px;
}
</style>
