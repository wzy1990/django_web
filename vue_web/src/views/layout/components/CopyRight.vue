<template>
  <Footer class="layout-footer-center">
    <div class="link">友情链接：墨点科技，阿里巴巴，腾讯科技</div>
    <div class="statement">本站不提供任何资源存储服务，只提供查询服务</div>
    <div class="copyright">Copyright 2019 ©江湖王小龙 版权所有</div>
  </Footer>
</template>

<script>
  export default {
    name: 'CopyRight',
    data() {
      return {
      }
    },
    computed: {},
    mounted() {
    },
    methods: {}
  }
</script>

<style scoped>
  .layout-footer-center{
    position: absolute;
    bottom: 0px;
    width: 100%;
    color: #666;
    text-align: center;
    background: #ededed;
    line-height: 20px;
    padding: 5px;
    font-size: 12px;
  }
</style>
