<template>
    <div class="home">
        home input value: {{value}} <br />
      <input type="text" v-model="value" />
        <Button type="primary">Primary</Button>
    </div>
</template>
<script>

export default {

    data(){
        return {
            value: '0',
        }
    },
    mounted(){
        console.log('组件 this is home')
    }
}
</script>
<style lang="less" scoped>
    .home{
        background: url('../../assets/003.jpg') no-repeat center;
        background-color: red;
    }
</style>