<template>
    <button @click="decrement" class="btn btn-danger">Disminuír</button>
</template>



<script>
import store from '../store'
    export default{
        methods: {
            decrement(){
                store.commit('decrement')
            }
        }
    }
</script>
