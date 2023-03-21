<template>
    <div class="mx-3">
        <div class="grid grid-cols-2 mx-auto text-slate-300 text-sm md:text-lg gap-2">
            <div class="col ">
                <div class="bg-gray-500 w-fit sm:inline-flex rounded-xl">
                    <img class="m-2 w-16 sm:w-32 md:w-40" src="../assets/angular.svg" alt="">
                    <div class=" w-fit sm:flex sm:items-center m-3">
                        <p class="text-gray-900 text-sm sm:text-lg md:text-2xl decoration-slice underline decoration-gray-800 decoration-2">
                            <a href="https://www.linkedin.com/in/lenin-acosta" target="_blank">Estoy en Linkedin!</a> 
                        </p>
                    </div>
                </div>
            </div>
            <div class="col bg-pink-400">
                asd432
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