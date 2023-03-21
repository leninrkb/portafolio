<template>
    <footer class="bg-gray-800 mt-6 rounded-md">
        <div class="container m-auto text-slate-400 text-sm md:text-lg p-2">
            <div class="grid grid-cols-3">
                <div class="col">
                    <p class="text-sky-700 h-8 text-4xl md:block">
                        L.
                    </p>
                </div>
                <div class="col text-center">

                </div>
                <div class="col text-right mr-2 items-center mx-auto">
                    <router-link class="inline-block mr-2 hover:border-sky-400 border-2 border-transparent rounded-md p-1" to="/contacto">Contacto</router-link>
                    <router-link class="inline-block hover:border-green-400 border-2 border-transparent rounded-md p-1" to="/proyectos">Proyectos</router-link>
                </div>
            </div>
        </div>
    </footer>
</template>


<script>
export default {
    name: 'Footer'
}
</script>