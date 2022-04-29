<template>
<div>
  <header-top title="搜索"></header-top>
  <div class="search">
    <input type="text" placeholder="请输入商家或美食名称" class="input">
    <button class="btn">提交</button>
  </div>


</div>
</template>

<script>
import HeaderTop from '../../components/HeaderTop/HeaderTop'

export default {
  name: "Search",
  components:{
    HeaderTop
  }
}
</script>

<style scoped>
.search{
  width: 100%;
  height: 30px;
  position: relative;
  top: 45px;
  display: flex;
}
.input{
  margin-left: 5px;
  width: 80%;
  flex: 1;
}
.btn{
  width: 15%;
  background-color: #0A84E3;
  color: whitesmoke;
  margin-left: 5px;
  margin-right: 5px;
  border: none;

}
</style>
