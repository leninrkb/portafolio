<template>
    <div class="mx-3">
        <div v-for="(item, index) in _datos_contacto" :key="index"
            class="grid grid-cols-1 mx-auto lg:mx-60 text-slate-300 text-sm md:text-lg">
            <div class="col m-3">
                <CardInfo :class="index % 2 == 0 ? 'float-left' : 'float-right' " :left="index % 2 == 0" :datos="item"></CardInfo>
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