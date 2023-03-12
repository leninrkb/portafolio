<template>
    <div class="mx-3">
        <div class="grid grid-cols-1">
            <div class="col">
                <Card :parrafo="parrafo"
                :img="img"></Card>
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
            img:require('../assets/logo.png')
        }
    }
}
</script>