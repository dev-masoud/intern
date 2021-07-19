<template>
    <div class="container">
      <MenuBar/>
      <router-view/>
    </div>
    
</template>

<script>

import MenuBar from './components/menubar/index.vue'
export default {
  name: 'App',
  components: {
    MenuBar
  }
}
</script>

<style scoped>
.container{
  margin: 0;
  height: 100%;
  width: 100%;
}
.bgc-box{
  background-color: rgb(146, 120, 120);
  height: 100%;
  width: 100%;
}
body{
  margin: 0 ;
  background-color: rgb(172, 168, 168);
}


</style>
