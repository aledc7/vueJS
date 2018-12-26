<template>
    <button @click="decrement" class="btn btn-danger">Disminuír</button>
</template>



<script>
    export default{
        methods: {
            decrement(){
                this.$emit('decrement')
            }
        }
    }
</script>
