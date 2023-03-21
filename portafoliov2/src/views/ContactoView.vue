<template>
    <div class="mx-3">
        <div v-for="(item, index) in _datos_contacto" :key="index"
            class="grid grid-cols-1 mx-auto text-slate-300 text-sm md:text-lg">
            <div class="col m-3 ">
                <CardInfo :left="index % 2 == 0" :datos="item"></CardInfo>
            </div>
        </div>
        <div class="bg-cover bg-center rounded-lg shadow-lg h-64 relative "
            style="background-image: url('https://picsum.photos/640/480/?category=nature')">
            <div class="absolute rounded-lg top-0 left-0 w-full h-full bg-gray-800 opacity-70"></div>
            <div class="relative py-10 px-8 text-center text-white">
                <h3 class="text-gray-200 text-3xl font-bold mb-2">Card con Fondo Blur</h3>
                <p class=" text-gray-300 text-lg">Este es un ejemplo de una card con fondo blur hecha con Tailwind CSS.</p>
            </div>
        </div>


    </div>
</template>

<script>
import CardInfo from '@/components/CardInfo.vue';
import Card from '../components/Card.vue';
import { datos_contacto } from '../DatosComponentes.js';
export default {
    name: 'ContactoView',
    components: {
        Card,
        CardInfo
    },
    data() {
        return {
            _datos_contacto: datos_contacto,
            res: false
        }
    }
}
</script>