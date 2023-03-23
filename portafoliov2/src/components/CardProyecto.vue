<template>
    <div class="rounded-xl bg-gray-700 border-gray-700 border-2">
        <img class="rounded-t-xl w-auto" :src="datos.img" alt="">
        <h3 class="text-gray-400 text-base sm:text-xl  uppercase p-3">titulo del proyecto</h3>
    </div>
</template>

<script>
export default {
    name: 'CardProyecto',
    props:{
        datos:{
            type: Array,
            required: true
        }
    }
}
</script>