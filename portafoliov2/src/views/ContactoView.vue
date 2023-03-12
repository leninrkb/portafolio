<template>
    <div class="mx-3">
        <Card :parrafo="parrafo"></Card>
    </div>
</template>

<script>
import Card from '../components/Card.vue'
export default{
    name:'ContactoView',
    components:{
        Card
    },
    data(){
        return{
            parrafo:'contacto coming soon!'
        }
    }
}
</script>