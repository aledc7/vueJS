<template>
   <!-- uso el siguiente template -->
   <div>
    <span v-bind:class="cssClasses" aria-hidden="true"></span>
    </div>
</template>



<script>
export default {
            // usaré la propiedad img.
            props: ['img'],
            
            computed: {
                cssClasses(){
                    // esta funcion concatena la clase con el valor de img.
                    return 'glyphicon glyphicon-' + this.img;
                }
            }
        }
</script>