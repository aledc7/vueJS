<template>

<div>
    <h2>{{count}}</h2>
    <increment @increment="increment"/>
    <decrement @decrement="decrement"/>
</div>

</template>


<script>
import Increment from './increment.vue'
import Decrement from './decrement.vue'

export default {
    components: {
        Increment,
        Decrement
    },
    data(){
        return{
            count: 0
        }
    },
    methods: {
        increment(){
            this.count++

           // this.$emit('update-counter')
        },
        decrement(){
            this.count--
        }
    }


}
</script>