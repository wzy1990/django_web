<template>
  <div class="hello">
    <img class="search-logo" src="@/assets/logo.png">
    <h1>{{ msg }}</h1>
    <Input search enter-button="Search" placeholder="Enter something..." v-model="filmUrl" @change="playThis" />
    <video-player class="video-player vjs-custom-skin" ref="videoPlayer" :playsinline="true"
                  :options="playerOptions"></video-player>
  </div>
</template>

<script>
  export default {
    name: 'dianying',
    data() {
      return {
        msg: '疯狂电影搜索',
        filmUrl: '',
        playerOptions: {
          playbackRates: [0.5, 1.0, 1.5, 2.0], //播放速度
          autoplay: false, //如果true,浏览器准备好时开始回放。
          muted: false, // 默认情况下将会消除任何音频。
          loop: false, // 导致视频一结束就重新开始。
          preload: 'auto', // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
          language: 'zh-CN',
          aspectRatio: '16:9', // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
          fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
          sources: [{
            type: "video/mp4",
            src: "https://cdn.theguardian.tv/webM/2015/07/20/150716YesMen_synd_768k_vp8.webm" // http://vjs.zencdn.net/v/oceans.mp4
          }],
          poster: "@/assets/logo.png", //你的封面地址
          // width: document.documentElement.clientWidth,
          notSupportedMessage: '此视频暂无法播放，请稍后再试', //允许覆盖Video.js无法播放媒体源时显示的默认信息。
          controlBar: {
            timeDivider: true,
            durationDisplay: true,
            remainingTimeDisplay: false,
            fullscreenToggle: true  //全屏按钮
          }
        }
      }
    },
    methods: {
      playThis() {
        this.playerOptions.sources.src = this.filmUrl
        console.log(this.filmUrl)
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
