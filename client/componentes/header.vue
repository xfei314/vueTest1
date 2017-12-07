<template>
    <nav class="navbar navbar-inverse">
        <div class="navbar-header">
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-menu" aria-expanded="false"
            @click="onShow()" >
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand" href="#">Brand</a>
        </div>
        <div id="navbar-menu" :class="{ 'navbar-collapse': show, 'collapse navbar-collapse': !show}"   >
            <ul class="nav navbar-nav">
                  <li class="active"><router-link to="/">Home</router-link></li>
                  <li><router-link to="/t2">About</router-link></li>
            </ul>
        </div>
    </nav>
</template>
<script>
  export default {
    data () {
      return {
          show:false,
          
      }
    },
    methods: {
        onShow () {
            console.log('show :' + this.show)
            let s=this.show
            this.show=!s
        }
    }
  }
</script>