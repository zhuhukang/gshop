<template>

  <div class="footer_guide">
    <a href="javascript:;" class="guide_item" :class="{on:'/msite' === $route.path}" @click="goTo('/msite')">
      <span class="item_icon">
        <i class="iconfont icon-icon-test"></i>
      </span>
      <br/>
      <span class="tet">外卖</span>
    </a>
    <a href="javascript:;" class="guide_item" :class="{on:'/search' === $route.path}" @click="goTo('/search')">
      <span class="item_icon">
        <i class="iconfont icon-sousuo"></i>
      </span><br/>
      <span class="tet">搜索</span>
    </a>
    <a href="javascript:;" class="guide_item" :class="{on:'/order' === $route.path}" @click="goTo('/order')">
      <span class="item_icon">
        <i class="iconfont icon-quanbudingdan"></i>
      </span><br/>
      <span class="tet">订单</span>
    </a>
    <a href="javascript:;" class="guide_item" :class="{on:'/profile' === $route.path}" @click="goTo('/profile')">
      <span class="item_icon">
        <i class="iconfont icon-my"></i>
      </span><br/>
      <span class="tet">我的</span>
    </a>
  </div>
</template>

<script>
export default {
  name: "FooterGuide",
  methods:{
    goTo(path){
      this.$router.replace(path)
    }
  }

}
</script>

<style scoped>
/*@import "https://at.alicdn.com/t/font_3350204_5zpf32v0o4n.css?spm=a313x.7781069.1998910419.57&file=font_3350204_5zpf32v0o4n.css"*/
@font-face {
  font-family: "iconfont"; /* Project id 3350204 */
  src: url('https://at.alicdn.com/t/font_3350204_5zpf32v0o4n.woff2?t=1650605864875') format('woff2'),
  url('https://at.alicdn.com/t/font_3350204_5zpf32v0o4n.woff?t=1650605864875') format('woff'),
  url('https://at.alicdn.com/t/font_3350204_5zpf32v0o4n.ttf?t=1650605864875') format('truetype');
}

.iconfont {
  font-family: "iconfont" !important;
  font-size: 30px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.icon-quanbudingdan:before {
  content: "\e600";
}

.icon-my:before {
  content: "\e608";
}

.icon-icon-test:before {
  content: "\e622";
}

.icon-sousuo:before {
  content: "\e678";
}
.on{
  color: #0A84E3;
}
a{
  color: gray;
}

.footer_guide{
  width: 100%;
  height: 62px;
  display: flex;
  bottom: 0;
  position: fixed;
  border-top: 3px solid rgb(245,244,240);
  padding-top: 6px;
}
.guide_item{
  text-decoration: none;
  text-align: center;
  flex: 1;
}


</style>
