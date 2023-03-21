<template>
    <div class="mx-3">
        <div class="grid grid-cols-2 mx-auto text-slate-300 text-sm md:text-lg gap-2">
            <div class="col ">
                <CardInfo :left="res" :datos="_datos_contacto[0]"></CardInfo>
            </div>
            <div class="col bg-pink-400">
                asd432
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
            _datos_contacto:datos_contacto,
            res:false
        }
    }
}
</script>