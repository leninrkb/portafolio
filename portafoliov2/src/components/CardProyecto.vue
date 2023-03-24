<template>
    <div class="rounded-xl bg-gray-700 border-gray-700 border-2 hover:scale-110 transition duration-500">
        <div class="relative">
            <img class="rounded-t-xl w-auto " :src="datos.img">
            <div class="absolute top-0 left-0 w-full h-full bg-gray-900 rounded-t-xl opacity-0 hover:opacity-50"
                @click="habrirModal()">
                <img class="absolute w-1/3 top-1/4 left-1/3" src="../assets/eye.svg" alt="">
            </div>
        </div>
        <h3 class="text-gray-400 text-base sm:text-xl  uppercase p-3">titulo del proyecto</h3>
    </div>
</template>

<script>
export default {
    name: 'CardProyecto',
    props: {
        datos: {
            type: Array,
            required: true
        }
    },
    methods: {
        habrirModal() {
            this.$emit('open',true)
        }
    },
}
</script>