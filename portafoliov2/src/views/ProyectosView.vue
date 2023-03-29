<template>
    <div class="mx-3">
        <div class="grid grid-cols-1 p-5 mb-10">
            <CardImg data-aos="fade-up" :datos="_card_proyectos"></CardImg>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-3 text-center">
            <div v-for="(item, index) in _datos_proyectos" :key="index">
                <div class="col">
                    <CardProyecto :datos="item" @open="recibirDatos"></CardProyecto>
                </div>
            </div>
        </div>
        <Modal v-if="mostrar" @close="recibirDatos">
            <CardDetalleProyecto :datos="_detalle_datos"></CardDetalleProyecto>
            
        </Modal>    
    </div>
</template>

<script>
import CardDetalleProyecto from '@/components/CardDetalleProyecto.vue';
import Modal from '@/components/Modal.vue';
import CardImg from '../components/CardImg.vue';
import CardProyecto from '@/components/CardProyecto.vue';
import { card_proyectos, datos_proyectos } from '@/DatosComponentes';
export default {
    name: 'ProyectosView',
    components: {
        CardProyecto,
        CardImg,
        Modal,
        CardDetalleProyecto,
    },
    data() {
        return {
            _card_proyectos: card_proyectos,
            _datos_proyectos: datos_proyectos,
            mostrar: false,
            _detalle_datos:''

        }
    },
    methods: {
        recibirDatos(datos) {
            this.mostrar = datos[0];
            this._detalle_datos = datos[1];
        }
    },
}
</script>