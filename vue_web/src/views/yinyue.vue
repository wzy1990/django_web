<template>
  <div class="hello">
    <img class="search-logo" src="@/assets/logo.png">
    <h1>{{ msg }}</h1>
    <Input placeholder="Enter something..." v-model="musicName" />
    <Button type="primary" shape="circle" icon="ios-search" @click="getMusicList" >Search</Button>
    <Button type="primary" shape="circle" icon="ios-search" @click="getSongList" >Search2</Button>
    <aplayer autoplay :music="currentMusic" :list="musicList" :showLrc="true"></aplayer>
    <ul>
      <li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>
      <li><a href="https://chat.vuejs.org" target="_blank">Community Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>
    </ul>
  </div>
</template>

<script>
import Aplayer from 'vue-aplayer'
import { musicList, songList } from '@/utils/interface'
export default {
  name: 'yinyue',
  components: {
    Aplayer
  },
  data () {
    return {
      msg: '疯狂音乐搜索',
      musicName: '',
      currentMusic: {},
      musicList: [{
        artist: "黎明",
        link:"http://music.163.com/#/song?id=115250",
        lrc:"[00:15.67]也许你只是↵[00:16.79]一个最美丽的阴影↵[00:22.42]也许是我们前世的约定↵[00:28.72]你就是我这一生中↵[00:31.18]在等待的人↵[00:35.43]你不知道我寂寞的心↵[00:39.08]曾经是一片灰烬↵[02:07.37][00:42.72]也许你只是↵[02:08.61][00:43.87]一朵属于流浪的云↵[02:14.07][00:49.36]也许你不必现在↵[02:16.69][00:51.85]做决定↵[02:20.36][00:55.71]当我目送着你↵[02:22.19][00:57.32]从人群中慢慢地离去↵[02:27.09][01:02.38]你如何知道我的心↵[02:30.66][01:05.95]都已经被你占据↵[02:34.66][01:09.90]你是否愿意为我停留↵[02:37.35][01:12.57]今夜你来告诉我↵[02:41.38][01:16.88]你是否愿意陪我↵[02:43.22][01:18.70]走过我的梦↵[02:46.85][01:22.37]我的所有↵[03:21.06][02:50.77][01:26.20]今夜你会不会来↵[03:24.52][02:54.05][01:29.60]你的爱还在不在↵[03:27.79][02:57.43][01:33.00]如果你的心已经离开↵[03:31.42][03:01.02][01:36.61]我宁愿没有未来↵[03:34.48][03:04.16][01:39.70]今夜你会不会来↵[03:37.97][03:07.41][01:43.06]你的爱还在不在↵[03:41.26][03:10.91][01:46.49]别让我所有的等待↵[03:44.86][03:14.53][01:50.09]变成一片空白↵[03:55.21][01:57.28]music↵",
        pic: "http://p2.music.126.net/KHA2XHhWFgyBsfiWQy1YHg==/80264348828355.jpg?param=300x300",
        songid: 115250,
        title: "今夜你会不会来(国)",
        type: "netease",
        src: "http://music.163.com/song/media/outer/url?id=115250.mp3"
      }]
    }
  },
  created() {
    this.currentMusic = {
      title: "今夜你会不会来(国)", // 歌曲名称
      artist: "黎明", // 演唱者
      src: "http://music.163.com/song/media/outer/url?id=115250.mp3", // 	必需	音频文件的 URL
      pic: "http://p2.music.126.net/KHA2XHhWFgyBsfiWQy1YHg==/80264348828355.jpg?param=300x300", // 封面图片 URL
      lrc: "[00:15.67]也许你只是↵[00:16.79]一个最美丽的阴影↵[00:22.42]也许是我们前世的约定↵[00:28.72]你就是我这一生中↵[00:31.18]在等待的人↵[00:35.43]你不知道我寂寞的心↵[00:39.08]曾经是一片灰烬↵[02:07.37][00:42.72]也许你只是↵[02:08.61][00:43.87]一朵属于流浪的云↵[02:14.07][00:49.36]也许你不必现在↵[02:16.69][00:51.85]做决定↵[02:20.36][00:55.71]当我目送着你↵[02:22.19][00:57.32]从人群中慢慢地离去↵[02:27.09][01:02.38]你如何知道我的心↵[02:30.66][01:05.95]都已经被你占据↵[02:34.66][01:09.90]你是否愿意为我停留↵[02:37.35][01:12.57]今夜你来告诉我↵[02:41.38][01:16.88]你是否愿意陪我↵[02:43.22][01:18.70]走过我的梦↵[02:46.85][01:22.37]我的所有↵[03:21.06][02:50.77][01:26.20]今夜你会不会来↵[03:24.52][02:54.05][01:29.60]你的爱还在不在↵[03:27.79][02:57.43][01:33.00]如果你的心已经离开↵[03:31.42][03:01.02][01:36.61]我宁愿没有未来↵[03:34.48][03:04.16][01:39.70]今夜你会不会来↵[03:37.97][03:07.41][01:43.06]你的爱还在不在↵[03:41.26][03:10.91][01:46.49]别让我所有的等待↵[03:44.86][03:14.53][01:50.09]变成一片空白↵[03:55.21][01:57.28]music↵", // LRC 歌词或者歌词文件的 URL
      theme: null //	歌曲的主题色，会覆盖播放器的主题色
    }
    this.getMusicList()
  },
  methods: {
    getMusicList() {
      musicList({
        type: 'search',
        search_type: 1,
        limit: 30,
        s: this.musicName,
        offset: 0
      }).then(response => {
        const list = response.data
        this.musicList = []
        for (let i = 0, len = list.length; i < len; i++) {
          this.musicList.push({
            songid: list[i].id,
            title: list[i].name,
            artist: list[i].ar[0].name,
            link:"http://music.163.com/#/song?id=115250",
            lrc:"[00:15.67]也许你只是↵[00:16.79]一个最美丽的阴影↵[00:22.42]也许是我们前世的约定↵[00:28.72]你就是我这一生中↵[00:31.18]在等待的人↵[00:35.43]你不知道我寂寞的心↵[00:39.08]曾经是一片灰烬↵[02:07.37][00:42.72]也许你只是↵[02:08.61][00:43.87]一朵属于流浪的云↵[02:14.07][00:49.36]也许你不必现在↵[02:16.69][00:51.85]做决定↵[02:20.36][00:55.71]当我目送着你↵[02:22.19][00:57.32]从人群中慢慢地离去↵[02:27.09][01:02.38]你如何知道我的心↵[02:30.66][01:05.95]都已经被你占据↵[02:34.66][01:09.90]你是否愿意为我停留↵[02:37.35][01:12.57]今夜你来告诉我↵[02:41.38][01:16.88]你是否愿意陪我↵[02:43.22][01:18.70]走过我的梦↵[02:46.85][01:22.37]我的所有↵[03:21.06][02:50.77][01:26.20]今夜你会不会来↵[03:24.52][02:54.05][01:29.60]你的爱还在不在↵[03:27.79][02:57.43][01:33.00]如果你的心已经离开↵[03:31.42][03:01.02][01:36.61]我宁愿没有未来↵[03:34.48][03:04.16][01:39.70]今夜你会不会来↵[03:37.97][03:07.41][01:43.06]你的爱还在不在↵[03:41.26][03:10.91][01:46.49]别让我所有的等待↵[03:44.86][03:14.53][01:50.09]变成一片空白↵[03:55.21][01:57.28]music↵",
            pic: "http://p2.music.126.net/KHA2XHhWFgyBsfiWQy1YHg==/80264348828355.jpg?param=300x300",
            type: "netease",
            src: "http://music.163.com/song/media/outer/url?id=115250.mp3"
          })
        }
      })
    },
    getSongList() {
      songList({
        type: 'song',
        id: this.musicList[4].songid,
        br: 30
      }).then(response => {
        const list = response
        this.currentMusic = {
            songid: this.musicList[4].songid,
            title: this.musicList[4].title,
            artist: this.musicList[4].artist,
            link:"http://music.163.com/#/song?id=115250",
            lrc:"[00:15.67]也许你只是↵[00:16.79]一个最美丽的阴影↵[00:22.42]也许是我们前世的约定↵[00:28.72]你就是我这一生中↵[00:31.18]在等待的人↵[00:35.43]你不知道我寂寞的心↵[00:39.08]曾经是一片灰烬↵[02:07.37][00:42.72]也许你只是↵[02:08.61][00:43.87]一朵属于流浪的云↵[02:14.07][00:49.36]也许你不必现在↵[02:16.69][00:51.85]做决定↵[02:20.36][00:55.71]当我目送着你↵[02:22.19][00:57.32]从人群中慢慢地离去↵[02:27.09][01:02.38]你如何知道我的心↵[02:30.66][01:05.95]都已经被你占据↵[02:34.66][01:09.90]你是否愿意为我停留↵[02:37.35][01:12.57]今夜你来告诉我↵[02:41.38][01:16.88]你是否愿意陪我↵[02:43.22][01:18.70]走过我的梦↵[02:46.85][01:22.37]我的所有↵[03:21.06][02:50.77][01:26.20]今夜你会不会来↵[03:24.52][02:54.05][01:29.60]你的爱还在不在↵[03:27.79][02:57.43][01:33.00]如果你的心已经离开↵[03:31.42][03:01.02][01:36.61]我宁愿没有未来↵[03:34.48][03:04.16][01:39.70]今夜你会不会来↵[03:37.97][03:07.41][01:43.06]你的爱还在不在↵[03:41.26][03:10.91][01:46.49]别让我所有的等待↵[03:44.86][03:14.53][01:50.09]变成一片空白↵[03:55.21][01:57.28]music↵",
            pic: "http://p2.music.126.net/KHA2XHhWFgyBsfiWQy1YHg==/80264348828355.jpg?param=300x300",
            type: "netease",
            src: list[0].url
          }
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .hello {
    width: 500px;
    margin: auto;
  }
  h1, h2 {
    font-weight: normal;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
</style>
