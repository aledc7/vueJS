<template>
   <!-- uso el siguiente template -->
    <span v-bind:class="cssClasses" aria-hidden="true"></span>
</template>



<script>
export default {
            // usaré la propiedad img.
            props: ['img'],
            
            computed: {
                cssClasses: function(){
                    // esta funcion concatena la clase con el valor de img.
                    return 'glyphicon glyphicon-' + this.img;
                }
            }
        }
</script>