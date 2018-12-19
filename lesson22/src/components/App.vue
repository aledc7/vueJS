<template>
  <div id="app" class="container">
      <h1>INGENEA SRL</h1>


    <ul class="nav nav-tabs" >
      <router-link tag="li" to="/" active-class="active" exact><a>Dashboard</a></router-link>
      <router-link tag="li" to="/Tasks" active-class="active" exact><a>Tareas</a></router-link>
    </ul>
        <keep-alive>
            <router-view></router-view>
        </keep-alive>

      <footer class="footer">
          <p>&copy; 2019 IngeneaSRL</p>
      </footer>
  </div>
</template>

<script>
export default {
};
</script>

<style lang="scss">

    @import "src/sass/app";

  
    body {
        margin: 10px;
    }

    .container {
        max-width: 920px;
      
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