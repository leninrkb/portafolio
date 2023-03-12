<template>
    <Card :parrafo="parrafo"></Card>
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