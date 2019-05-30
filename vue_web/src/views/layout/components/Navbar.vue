<template>
  <Header class="header-bar">
    <Menu mode="horizontal" :theme="theme1" :active-name="$route.path">
      <div class="layout-logo"></div>
      <div class="layout-nav">
        <MenuItem name="/dianying" to="/dianying">
          <Icon type="ios-paper" />
          电影频道
        </MenuItem>
        <MenuItem name="/dianshi" to="/dianshi">
          <Icon type="ios-people" />
          电视剧频道
        </MenuItem>
        <MenuItem name="/zongyi" to="/zongyi">
          <Icon type="ios-construct" />
          综艺频道
        </MenuItem>
        <MenuItem name="/yinyue" to="/yinyue">
          <Icon type="ios-construct" />
          疯狂音乐
        </MenuItem>
        <Submenu name="5">
          <template slot="title">
            <Icon type="ios-stats" />
            统计分析
          </template>
          <MenuGroup title="使用">
            <MenuItem name="5-1">新增和启动</MenuItem>
            <MenuItem name="5-2">活跃分析</MenuItem>
            <MenuItem name="5-3">时段分析</MenuItem>
          </MenuGroup>
          <MenuGroup title="留存">
            <MenuItem name="5-4">用户留存</MenuItem>
            <MenuItem name="5-5">流失用户</MenuItem>
          </MenuGroup>
        </Submenu>
      </div>
    </Menu>
  </Header>
</template>

<script>

export default {
  data() {
    return {
      theme1: 'dark'
    }
  },
  created() {
    console.log(window.location.href)
  },
  methods: {
  }
}
</script>

<style scoped>
  .ivu-layout-header {
    /*background: #fff;*/
    /*padding: 0px;*/
  }
  .layout-logo{
    width: 100px;
    height: 30px;
    background: #5b6270;
    border-radius: 3px;
    float: left;
    position: relative;
    top: 15px;
    left: 20px;
  }
  .layout-nav{
    width: calc(100% - 150px);
    margin-left: 145px;
  }
</style>
