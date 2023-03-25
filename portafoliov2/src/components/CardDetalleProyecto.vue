<template>
    <div class="grid grid-cols-1 sm:grid-cols-2 mt-12 mb-3 mx-3">
        <div class="col p-3 items-center">
            <img class=" rounded-md" :src="datos.img">
        </div>
        <div class="col">
            <h3 class="text-gray-400 text-base sm:text-xl  uppercase p-3">{{datos.titulo}}</h3>
            <p class="text-bas sm:text-xl p-3 text-justify">{{datos.detalle}}</p>
            <div class="p-3">
                <Button><a :href="datos.github" target="_blank">GitHub</a></Button>
                <Button v-if="datos.web != 'no'" class="ml-2"><a :href="datos.web" target="_blank">Ver Web</a></Button>
            </div>
        </div>
    </div>
</template>
<script>
import Button from './Button.vue';
export default {
    name: 'CardDetalleProyecto',
    components:{
        Button
    },
    props: {
        datos: {
            type: Object,
            required: true
        }
    }
}
</script>