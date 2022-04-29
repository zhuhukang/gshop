<template>
  <header class="header">
    <slot name="left"></slot>
    <span class="header_title">
      <span class="header_title_text ellipsis">{{ title }}</span>
    </span>
    <slot name="right"></slot>
  </header>
</template>

<script>
export default {
  name: "HeaderTop",
  props: {
    title:String
  }
}
</script>

<style scoped>
.header{
  width: 100%;
  height: 40px;
  line-height: 40px;
  position: fixed;
  background-color: #0A84E3;
  color: whitesmoke;
  font-size: 15px;
  text-align: center;
}

</style>
