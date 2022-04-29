<template>
<div>
<!--  首页头部 -->
  <header-top title="显示地区" class="head">
    <span class="header_search" slot="left">
      <i class="iconfont icon-sousuo"></i>
    </span>
    <span class="header_login" slot="right">
      <span class="header_login_text">登录|注册</span>
    </span>
  </header-top>
<!--  首页导航-->
  <div class="msite_nav">
    <div class="grid-container">
      <div class="item1"  v-for="(item,index) in imgsrc" :key="index">
        <img :src="item" style="">
      </div>
    </div>
  </div>
<!--  首页商品列表-->
  <div class="msite_shop_list"></div>
</div>
</template>

<script>
import HeaderTop from '../../components/HeaderTop/HeaderTop'
import Swiper from "swiper";
import '../../../node_modules/swiper/swiper-bundle.min.css'


export default {
  name: "Msite",
  data(){
    return{
      imgsrc:["https://tse3-mm.cn.bing.net/th/id/OIP-C.o5DJQENvT4WZGS_t8fZmcgHaGE?w=182&h=149&c=7&r=0&o=5&dpr=1.25&pid=1.7",
        "https://tse2-mm.cn.bing.net/th/id/OIP-C.45UDrZRkfuzGRdvyhGJ_PwHaE8?w=182&h=121&c=7&r=0&o=5&dpr=1.25&pid=1.7",
        "https://tse2-mm.cn.bing.net/th/id/OIP-C.-o2e8gNMWLS9xFMKFxQbKAHaE8?w=182&h=121&c=7&r=0&o=5&dpr=1.25&pid=1.7",
        "https://tse4-mm.cn.bing.net/th/id/OIP-C.TD6zV2mrxBmJNj2R-3pB2QHaE0?w=182&h=118&c=7&r=0&o=5&dpr=1.25&pid=1.7",
        "https://tse2-mm.cn.bing.net/th/id/OIP-C.zv3D73TAQK9q-g7L7TPkGwHaE6?w=182&h=121&c=7&r=0&o=5&dpr=1.25&pid=1.7",
        "https://tse4-mm.cn.bing.net/th/id/OIP-C.rMuNGa2xoO9y7KJoYwHSjAHaEr?w=182&h=115&c=7&r=0&o=5&dpr=1.25&pid=1.7",
        "https://tse2-mm.cn.bing.net/th/id/OIP-C.z8roiJXobrg1NkwhCu72RwHaEr?w=182&h=115&c=7&r=0&o=5&dpr=1.25&pid=1.7",
        "https://tse4-mm.cn.bing.net/th/id/OIP-C.kz8xZO5HnLywrl_1EdP-uQHaEr?w=182&h=115&c=7&r=0&o=5&dpr=1.25&pid=1.7",
        "https://tse3-mm.cn.bing.net/th/id/OIP-C.J48eC50dvoQP_F_LElaZEAHaFj?w=182&h=136&c=7&r=0&o=5&dpr=1.25&pid=1.7",
        "https://tse2-mm.cn.bing.net/th/id/OIP-C.z8roiJXobrg1NkwhCu72RwHaEr?w=182&h=115&c=7&r=0&o=5&dpr=1.25&pid=1.7",
        "https://tse4-mm.cn.bing.net/th/id/OIP-C.G_OQZbzco_jTvHH-NqzkCwHaFz?w=182&h=143&c=7&r=0&o=5&dpr=1.25&pid=1.7",
        "https://tse2-mm.cn.bing.net/th/id/OIP-C.e5_JPOW2HMjljc9lgicgiQHaEK?w=182&h=102&c=7&r=0&o=5&dpr=1.25&pid=1.7"]
    }
  },
  components:{
    HeaderTop
  }

}
</script>

<style scoped>
.grid-container {
  display: grid;
  grid-template-columns: auto auto auto auto;
  grid-gap: 10px;
  padding: 10px;
  border-bottom: 3px solid rgb(245,244,240);
  position: relative;
  top: 40px;
}

.grid-container .item1 {
  /*background-color: rgba(255, 255, 255, 0.8);*/
  text-align: center;
  padding: 5px 0;
  font-size: 30px;

}
.item1 img{
  width:60px;
  height: 35px;
  border-radius:10px;
}
.head{
  display: inline-block;
}
.header_search{
  width: 10%;
  float: left;
  margin-right: 10px;
}
.header_login{
  width: 20%;
  float: right;
}
</style>
