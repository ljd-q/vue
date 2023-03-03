<template>
  <h1>这是<i>App.vue</i>根组件</h1>
  <h3>{{username}}</h3>
  <hr>
  <h3>count的值为{{ count }}</h3>
  <button @click="addCount">+1</button>
  <my-swiper></my-swiper>
  <my-test></my-test>
  <hr>
  <my-search></my-search>
</template>
<script>
import SearchVue from './components/private/Search.vue'
export default {
  name: 'MyApp',
    Testdata() {
    return {
      username:'zs',
      count:0,
    }
  },
  methods:{
    addCount(){
      this.count++
    },
  },
  components:{
    'my-search':SearchVue
  }
}
</script>


<style lang="less">
h1{
  color:red;
  i{
    color: blue;
  }
}
</style>