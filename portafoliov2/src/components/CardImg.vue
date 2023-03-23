<template>
    <div class="bg-cover bg-center rounded-lg shadow-lg h-64 relative "
        :style="{'background-image':datos.img}">
        <div class="absolute rounded-lg top-0 left-0 w-full h-full bg-gray-800 opacity-70"></div>
        <div class="relative py-10 px-8 text-center text-white">
            <h3 class="text-gray-200 text-3xl font-bold mb-2">{{datos.titulo}}</h3>
            <p class=" text-gray-300 text-lg">{{datos.texto}}
            </p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CardImg',
    props: {
        datos: {
            type: Array,
            required: true
        }
    }
}
</script>