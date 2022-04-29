<template>
<div>
  <header-top title="订单列表"></header-top>
  <div class="none">
    <img src="https://tse2-mm.cn.bing.net/th/id/OIP-C.IOsw97Pfnh7IYFUx4WbZKAAAAA?w=150&h=150&c=7&r=0&o=5&dpr=1.25&pid=1.7" alt="">
    <br/>
    <div class="tet">登录后查看外卖订单</div><br/>
    <button class="btn">立即登录</button>
  </div>
</div>
</template>

<script>
import HeaderTop from '../../components/HeaderTop/HeaderTop'
export default {
  name: "Order",
  components:{
    HeaderTop
  }

}
</script>

<style scoped>
.none{
  width: 186px;
  height: 300px;
  position: relative;
  top: 150px;
  margin: 0 auto;
}
.tet{
  color: grey;
  font-size: 17px;
  height: 22px;
  line-height: 44px;
  text-align: center;
  font-weight: 540;
}
.btn{
  width: 100px;
  height: 30px;
  border-radius: 5px;
  background-color: #0A84E3;
  color: whitesmoke;
  margin-left: 40px;
  border: none;
}

</style>
