<template>
  <div class="ftrem">
    <div>
      <h1>rem</h1>
    </div>
    <div class="ftwidth">宽: 750px</div>
    <p>100px = 1rem</p>
</div>
</template>
<script>
export default {
  data() {
    return {};
  },
  mounted() {
    console.log("this is login");
  }
};
</script>

<style lang="less">
body {
  padding: 0;
  margin: 0;
}
.ftwidth {
  width: 750px;
  background: red;
}

h1 {
  font-size: 100px;
}
</style>