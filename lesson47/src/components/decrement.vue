<template>
    <button @click="decrement" class="btn btn-danger">Disminuír</button>
</template>



<script>
import {mapMutations} from 'vuex'
    export default{
        methods: mapMutations (['decrement'])
    }
</script>
