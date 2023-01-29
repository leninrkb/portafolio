<template>
    <div data-aos="fade-left" :data-aos-duration="duracion">
        proyectos personales
        proyectos en los que se ha aportado
        proyectos para clientes
    </div>
</template>
<script>
export default{
    name:'Experiencia',
    props:{
        duracion:{
            type:Number,
            required:true
        }
    }
}
</script>