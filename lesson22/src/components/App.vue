<template>
  <div id="app" class="container">
    
    
    
    <app-tasks></app-tasks>


   
    <!-- <app-footer> </app-footer> -->
  </div>
</template>

<script>
import Tasks from "components/Task/Tasks.vue"
//import Footer from './Footer.vue'

export default {
  components: {
    'app-tasks': Tasks
  }
};
</script>

<style lang="scss">

    @import "src/sass/app";

  
    body {
        margin: 10px;
    }

    .container {
        max-width: 650px;
      
    h2 {
        margin-bottom: 20px;
    }

    footer {
        margin: 40px 0;
        padding-top: 20px;
        border-top: 1px solid #ccc;
        color: #999;
    }
    
    }

    
</style>