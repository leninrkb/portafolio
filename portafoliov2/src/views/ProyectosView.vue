<template>
    <div class="mx-3">
        <div class="grid grid-cols-1">
            <CardImg></CardImg>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-3">
            <div class="col">
                <Card></Card>
            </div>
            <div class="col">
                <Card></Card>
            </div>
        </div>
    </div>
</template>

<script>
import CardImg from '../components/CardImg.vue';
import Card from '../components/Card.vue';
export default {
    name: 'ProyectosView',
    components: {
        Card,
        CardImg
    },
    data() {
        return {
            parrafo: 'proyectos coming soon!!!',
            img: require('../assets/logo.png'),

        }
    }
}
</script>