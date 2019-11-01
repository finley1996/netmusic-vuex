<template>
  <div class="playlist">
    <div class="introduce">
      <img :src="playlist.coverImgUrl" alt class="playlistimg" />
      <span>{{playlist.name}}</span>
      <Divider />
    </div>
    <table>
      <thead>
        <tr>
          <th>歌曲标题</th>
          <th>歌手</th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in songlist" :key="item.id" @click="changemisicurl(item.id)">
          <td>{{item.name}}</td>
          <td>{{item.ar[0].name}}</td>
          <td>
            <Icon type="ios-headset" />
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
import { getsonglist } from "@/api";
import {mapMutations} from 'vuex'
export default {
  data() {
    return {
      songlist: [],
      playlist: {}
    };
  },
  created() {
    getsonglist({ id: this.$route.query.id }).then(res => {
     

      this.songlist = res.data.playlist.tracks;
      this.playlist = res.data.playlist;
    });
  },
    methods:{
      ...mapMutations(['changemisicurl'])
  }
};
</script>
<style>
.playlistimg {
  height: 200px;
  width: 200px;
  position: relative;
  left: 300px;
}
.introduce {
  width: 800px;
  margin: 0 auto;
  text-align: center;
}
table {
  margin: 0 auto;
}
tr:hover {
  background: #eee;
}
</style>