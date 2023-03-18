<template>
    <div class="mx-3">
        <div class="grid grid-cols-1">
            <div class="col">
                <Card :parrafo="parrafo"
                :img="img"></Card>
            </div>
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
import Card from '../components/Card.vue'
export default{
    name:'ProyectosView',
    components:{
        Card
    },
    data(){
        return{
            parrafo:'proyectos coming soon!!!',
            img:require('../assets/logo.png'),

        }
    }
}
</script>