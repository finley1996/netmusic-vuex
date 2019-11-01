<template>
  <div class="layout">
    <Layout>
      <Header>
        <Row type="flex" justify="center" align="top" class="code-row-bg">
          <Col span="16">
            <Menu mode="horizontal" :theme="theme1" active-name="1-1">
              <Submenu name="1">
                <template slot="title">
                  <Icon type="ios-stats" />发现音乐
                </template>
                <MenuGroup title="类别">
                  <MenuItem name="1-1" to='/'>推荐</MenuItem>
                  <MenuItem name="1-2">排行榜</MenuItem>
                  <MenuItem name="1-3">歌单</MenuItem>
                  <MenuItem name="1-4">主播电台</MenuItem>
                  <MenuItem name="1-5">歌手</MenuItem>
                  <MenuItem name="1-6">新碟上架</MenuItem>
                </MenuGroup>
              </Submenu>
              <MenuItem name="2">
                <Icon type="ios-paper" />我的音乐
              </MenuItem>
              <MenuItem name="3">
                <Icon type="ios-people" />用户
              </MenuItem>
              <MenuItem name="4">
                <Icon type="logo-freebsd-devil" />音乐人
              </MenuItem>
            </Menu>
          </Col>
          <Col span="8">
            <Input
              v-model="value4"
              icon="ios-clock-outline"
              placeholder="音乐/视频/电台/用户"
              style="width: 200px"
            />&nbsp;
            <Button type="default" ghost>创作者中心</Button>&nbsp;
            <a href="#">登录</a>
          </Col>
        </Row>
      </Header>
      <Content>
        <router-view></router-view>
      </Content>
      <Footer>
        <div class="bg-gray"></div>
      </Footer>
      <iframe
        class="player"
        frameborder="no"
        border="0"
        marginwidth="0"
        marginheight="0"
        width="100%"
        height="86"
        :src='misicurl'
      ></iframe>
    </Layout>
  </div>
</template>
<script>
import {mapState} from 'vuex'
export default {
  data() {
    return {
      theme1: "dark",
      value4: ""
    };
  },
  computed:{
    ...mapState(['misicurl'])
  }
};
</script>
<style>
.ivu-layout-footer {
  padding: 0 !important;
}
.bg-gray {
  background: rgb(81, 90, 110);
  height: 150px;
}
.player {
  position: fixed;
  bottom: 0;
}
</style>