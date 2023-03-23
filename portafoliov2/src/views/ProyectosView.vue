<template>
    <div class="mx-3">
        <div class="grid grid-cols-1 p-5 mb-10">
            <CardImg :datos="_card_proyectos"></CardImg>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-3 text-center">
            <div v-for="(item, index) in _datos_proyectos" :key="index">
                <div class="col">
                    <CardProyecto :datos="item"></CardProyecto>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import CardImg from '../components/CardImg.vue';
import CardProyecto from '@/components/CardProyecto.vue';
import { card_proyectos, datos_proyectos } from '@/DatosComponentes';
export default {
    name: 'ProyectosView',
    components: {
        CardProyecto,
        CardImg
    },
    data() {
        return {
            parrafo: 'proyectos coming soon!!!',
            img: require('../assets/logo.png'),
            _card_proyectos: card_proyectos,
            _datos_proyectos:datos_proyectos

        }
    }
}
</script>