<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h3 v-html="msg"></h3>
    <h2>Essential Links</h2>
    <!--<input type="checkbox" v-model='add'>
    <div :class="{'class1':add}">hello , everyone!</div>-->
    <div v-bind:id="'list-'+id">123</div>
    <button @click="handleClick">clickMe</button>
    <ul>
      <li v-for = " (key,n) in arr" v-bind:key="n">
        {{key}}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: '欢迎来到我的vue应用',
      id:1,
      arr:['小米','苹果','橘子','香蕉']
    }
  },
  methods:{
    handleClick:function(){
      alert(1111);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
