<template>
  <div>
    <h1>{{msg}}</h1>
    <router-view></router-view>
  </div>
</template>

<script>
  export default{
    data:function(){
      return {
        msg:'Hello Index'
      }
    }
  }
</script>

<style></style>
