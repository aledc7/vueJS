<template>
  <div id="app" class="container">
    <h1>INGENEA COUNTER</h1>
    <counter/>

    <p>number of counts: {{ count }} and count result is: {{ tripleCounter}}</p>
  </div>
</template>

<script>
import store from './store'
import { mapState, mapGetters } from 'vuex'
import Counter from './components/Counter.vue'

export default {
  components: {
    Counter
  },
  name: 'app',
  computed: {
    ...mapState(['count']),
    ...mapGetters(['tripleCounter']),
      
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
  
}
</script>

