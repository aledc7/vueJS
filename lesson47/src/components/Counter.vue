<template>

<div>
    <h2>{{count}}</h2>
    <increment/>
    <decrement @decrement="decrement"/>
</div>

</template>


<script>
import store from '../store'
import Increment from './increment.vue'
import Decrement from './decrement.vue'

export default {
    components: {
        Increment,
        Decrement
    },
    computed: {
        count(){
            return store.state.count
        }
    },
    methods: {
        decrement(){
            this.count--
        }
    }


}
</script>