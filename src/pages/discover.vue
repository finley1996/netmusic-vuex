<template>
  <div class="container">
    <!-- 轮播图 -->
    <Carousel autoplay v-model="first">
      <CarouselItem>
        <div class="demo-carousel">
          <img src="@/assets/img/1.jpg" alt />
        </div>
      </CarouselItem>
      <CarouselItem>
        <div class="demo-carousel">
          <img src="@/assets/img/2.jpg" alt />
        </div>
      </CarouselItem>
      <CarouselItem>
        <div class="demo-carousel">
          <img src="@/assets/img/3.png" alt />
        </div>
      </CarouselItem>
      <CarouselItem>
        <div class="demo-carousel">
          <img src="@/assets/img/4.jpg" alt />
        </div>
      </CarouselItem>
    </Carousel>
    <!-- 内容区 -->
    <Row>
      <Col span="16">
        <!-- 热门推荐 -->
        <div>
          <div class="nav">
            <span>
              <Icon type="logo-foursquare" />热门标签
            </span>
            <Breadcrumb style="float:left;margin-left:10px">
              <BreadcrumbItem to="#">华语</BreadcrumbItem>
              <BreadcrumbItem to="#">流行</BreadcrumbItem>
              <BreadcrumbItem to="#">摇滚</BreadcrumbItem>
              <BreadcrumbItem to="#">民谣</BreadcrumbItem>
              <BreadcrumbItem to="#">电子</BreadcrumbItem>
            </Breadcrumb>
            <a href="#">更多</a>
          </div>
          <Divider />
          <ul class="hotlist">
            <li style="height:200px;width:150px;margin:10px 20px" v-for="item in hotlist" :key="item.id">
              <img :src="item.picUrl"  style="height:150px;width:150px" @click="songlist(item.id)"/>
              <p>{{item.name}}</p>
            </li>
          </ul>
        </div>
        <Divider />
        <div >
          <div class="nav">
            <span>
              <Icon type="logo-foursquare" />新碟上架
            </span>
            <a href="#">更多</a>
          </div>
          <Divider />
          <ul class="hotlist">
            <li style="height:200px;width:150px;margin:10px 20px" v-for="item in toplist" :key="item.id">
              <img :src="item.picUrl"  style="height:150px;width:150px"  />
              <p>{{item.name}}</p>
              <p>{{item.artist.name}}</p>
            </li>
          </ul>
        </div>
      </Col>
      <Col span="8">
      <div class="userlogin">
          <p>登录网易云音乐，可以享受无限收藏的乐趣，并且无限同步到手机</p><br>
          <Button type="primary" shape="circle">登录</Button>
      </div>
      <div class="singer">
          <div class="singer_top">
              <span>入驻歌手</span>
               <a href="#">查看全部</a>
          </div>
          <Divider />
          <ul>
              <li v-for="item in singerlist" :key="item.id" style="background:#eee;margin:10px 0;">
                  <img :src="item.picUrl" alt="" style="height:80px;width:80px">
                  <span class="singername">{{item.name}}{{item.alias[0]}}<Icon type="md-happy" /></span>
              </li>
          </ul><br>
          <Button type="primary" long>申请成为网易音乐人</Button>
      </div>
      </Col>
    </Row>
  </div>
</template>
<script>
import { gethotlist,gettoplist,getsingerlist } from "@/api";
import { log } from 'util';
export default {
  data() {
    return {
      first: 0,
      hotlist: [],
      toplist:[],
      singerlist:[],
      showerlist:[],
    };
  },
  mounted() {
    this.getmiusiclist();
    this. getmiusictoplist();
    this. getoksingerlist()
  },
  methods: {
    //获取推荐歌单
    getmiusiclist() {
      let param = {
        limit: 8
      };
      gethotlist(param).then(res => {
          console.log(res);
        this.hotlist = res.data.result;
      });
    },
    //获取新碟上架
    getmiusictoplist() {
      let param = {
        limit: 4
        
      };
      gettoplist(param).then(res => {
        this.toplist = res.data.albums;
      });
    },
    //获取入驻歌手列表
    getoksingerlist() {
      let param = {
        limit: 5,
        cat:5001
      };
      getsingerlist(param).then(res => {
          //console.log(res)
        this.singerlist = res.data.artists;
      });
    },
    songlist(id){
        this.$router.push({path:'playlist',query:{id}})
    }
  }
};
</script>
<style>
.demo-carousel {
  text-align: center;
}
.container {
  width: 1250px;
  margin: 0 auto;
}
.nav {
  overflow: hidden;
  line-height: 30px;
}
.nav > span {
  float: left;
  font-size: 20px;
  line-height: 30px;
}
.nav > a {
  float: right;
}
.hotlist {
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  list-style: none;
}
.userlogin{
    padding: 50px;
    text-align: center
}
.singer_top{
    display: flex;
    justify-content: space-between
}
.singer{
    padding: 0 50px 20px 0;
}
.singername{
   position: relative;
   top: -30px;
   left: 100px;
   font-size: 14px;
}
</style>