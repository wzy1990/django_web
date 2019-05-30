<template>
  <div class="layout">
    <!--<Layout>-->
      <navbar></navbar>
      <app-main></app-main>
      <copy-right></copy-right>
    <!--</Layout>-->
  </div>
</template>

<script>
import { Navbar, AppMain, CopyRight } from '@/views/layout/components'
export default {
  name: 'Layout',
  components: {
    Navbar,
    AppMain,
    CopyRight
  }
}
</script>

<style scoped>
  .layout{
    background: #fff;
    border-radius: 4px;
    overflow: hidden;
  }
</style>
