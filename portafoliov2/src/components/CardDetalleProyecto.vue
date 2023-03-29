<template>
    <!-- <div class="grid grid-cols-1 sm:grid-cols-2 mt-12 mb-3 mx-3 bg-gray-700 rounded-md">
        <div class="col p-3 bg-orange-400 w-1/2">
            <img class="rounded-md" :src="datos.img">
        </div>
        <div class="col bg-purple-500 w-1/2">
            <h3 class="text-gray-400 text-base sm:text-xl  uppercase p-3">{{datos.titulo}}</h3>
            <p class="text-bas sm:text-xl p-3 text-justify">{{datos.detalle}}</p>
            <div class="p-3">
                <Button><a :href="datos.github" target="_blank">GitHub</a></Button>
                <Button v-if="datos.web != 'no'" class="ml-2"><a :href="datos.web" target="_blank">Ver Web</a></Button>
            </div>
        </div>
    </div> -->

    <div class="bg-gray-600 rounded-md p-1 sm:w-96">
        <!-- <img class="rounded-md w-4/5" :src="datos.img"> -->
        <div class=" bg-gray-800 rounded-md border-2 border-cyan-600">
            <div class="p-3">
                <h3 class="text-gray-400 text-base sm:text-xl  uppercase p-3">{{ datos.titulo }}</h3>
                <p class="text-base text-gray-500 p-3 sm:text-xl text-justify">{{ datos.detalle }}</p>
                <div class="p-3">
                    <Button><a :href="datos.github" target="_blank">GitHub</a></Button>
                    <Button v-if="datos.web != 'no'" class="ml-2"><a :href="datos.web" target="_blank">Ver Web</a></Button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Button from './Button.vue';
export default {
    name: 'CardDetalleProyecto',
    components: {
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