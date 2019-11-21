<template>
    <div class="home">
        home2ss  test asins 22
        <Button type="primary">Primary</Button>
    </div>
</template>
<script>

export default {
    data(){
        return{

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