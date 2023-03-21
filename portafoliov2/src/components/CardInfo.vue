<template>
    <div :class="_estilos_card + datos.estilos_card">
        <img v-if="left" class="m-2 w-16 sm:w-32 md:w-40" :src="datos.img">
        <div class=" w-fit sm:flex sm:items-center m-3">
            <p :class="_estilos_texto + datos.estilos_texto">
                <a :href="datos.enlace" target="_blank">{{ datos.texto }}</a>
            </p>
        </div>
        <img v-if="!left" class="m-2 w-16 sm:w-32 md:w-40" :src="datos.img">
    </div>
</template>

<script>
export default {
    name: 'CardInfo',
    props: {
        datos: {
            type: Array,
            required: true
        },
        left: {
            type: Boolean,
            required: true
        }
    },
    data() {
        return {
            _estilos_card: ' w-fit inline-flex rounded-xl ',
            _estilos_texto: ' text-sm sm:text-lg md:text-2xl '
        }
    }
}
</script>