<template>

<div>
    <h2> {{ msg}} {{tripleCounter}}</h2>
    <increment/>
    <decrement/>
</div>

</template>


<script>
import {mapGetters} from 'vuex'
import Increment from './increment.vue'
import Decrement from './decrement.vue'


export default {
    components: {
        Increment,
        Decrement
    },
    computed: {
        ...mapGetters(['tripleCounter']),
        msg() {
            return 'Counter Value: '
        }
    }
        
    
    
    }



</script>