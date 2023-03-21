<template>
    <div class="mx-3">
        <div class="grid grid-cols-2 mx-auto text-slate-300 text-sm md:text-lg gap-2">
            <div class="col">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-2 bg-slate-700 rounded-xl p-3">
                    <div class="col">
                        <img class="w-1/2" src="../assets/linkedin.svg" alt="">
                    </div>
                    <div class="col rounded-xl w-auto items-center md:flex">
                        <a href="">asdasd</a>
                        <a href="">asdasd</a>
                        <a href="">asdasd</a>
                    </div>
                </div>
            </div>
            <div class="col">
                right
            </div>
        </div>
    </div>
</template>

<script>
import Card from '../components/Card.vue'
export default {
    name: 'ContactoView',
    components: {
        Card
    },
    data() {
        return {
            parrafo: 'contacto coming soon!'
        }
    }
}
</script>