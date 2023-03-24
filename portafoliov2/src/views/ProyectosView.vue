<template>
    <div class="mx-3">
        <div class="grid grid-cols-1 p-5 mb-10">
            <CardImg :datos="_card_proyectos"></CardImg>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-3 text-center">
            <div v-for="(item, index) in _datos_proyectos" :key="index">
                <div class="col">
                    <CardProyecto :datos="item" @open="recibirDatos"></CardProyecto>
                </div>
            </div>
        </div>
        <Modal v-if="mostrar" @close="recibirDatos">
            <div class="grid grid-cols-1 sm:grid-cols-2 mt-12 mb-3 mx-3">
                <div class="col  ">
                    <img class=" rounded-md" src="../assets/proyectos/p1.png" alt="">
                </div>
                <div class="col">
                    <h3 class="text-gray-400 text-base sm:text-xl  uppercase p-3">titulo del proyecto</h3>
                    <p class="text-bas sm:text-xl p-3 text-justify"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum voluptatibus similique, sapiente, quis vel architecto amet libero eos ducimus dolores adipisci eligendi. Maxime qui tempora reprehenderit dicta sint eveniet voluptatibus.</p>
                    <div class="p-3">
                        <Button>GitHub</Button>
                        <Button class="ml-2">Ver Web</Button>
                    </div>
                </div>
            </div>
        </Modal>
    </div>
</template>

<script>
import Button from '@/components/Button.vue';
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
        Button
    },
    data() {
        return {
            parrafo: 'proyectos coming soon!!!',
            img: require('../assets/logo.png'),
            _card_proyectos: card_proyectos,
            _datos_proyectos: datos_proyectos,
            mostrar: false,

        }
    },
    methods: {
        recibirDatos(datos) {
            this.mostrar = datos;
        }
    },
}
</script>