<template>
    <div class="mx-3">
        <div class="grid grid-cols-1 p-5 mb-10">
            <CardImg></CardImg>
        </div>
        <div class="grid grid-cols-1 mx-auto lg:mx-60 text-slate-300 text-sm md:text-lg">
            <div v-for="(item, index) in _datos_contacto" :key="index">
                <div class="col m-3">
                    <CardInfo :class="index % 2 == 0 ? 'float-left' : 'float-right'" :left="index % 2 == 0" :datos="item">
                    </CardInfo>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import CardImg from '@/components/CardImg.vue';
import CardInfo from '@/components/CardInfo.vue';
import Card from '../components/Card.vue';
import { datos_contacto } from '../DatosComponentes.js';
export default {
    name: 'ContactoView',
    components: {
        Card,
        CardInfo,
        CardImg
    },
    data() {
        return {
            _datos_contacto: datos_contacto,
            res: false
        }
    }
}
</script>