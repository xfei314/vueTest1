<template> 
  <div class="container">
    <my-header></my-header>
    <div id="content" class="row-fluid">
         <router-view></router-view>
    </div>
  </div> 
  
</template>

<script>
import header from './componentes/header.vue'
export default {
  data () {
  },
  components : {
    myHeader : header
  }
}
</script>