<template>
    <figure class="bg-slate-800 rounded-xl shadow-lg p-8">
        <h2 class="text-xl sm:text-3xl font-bold mb-4 text-sky-600">{{titulo}}</h2>
        <p class="text-slate-400 text-sm sm:text-lg mb-3 text-justify">{{parrafo}}</p>
        <div class="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-8">
            <div class="col" v-for="item in lista" :key="item">
                <img :class="estilo1+item.estilo1" :src="item.svg" />
                <div class="w-auto h-2 bg-gray-500 rounded-full mt-2">
                    <div :class="estilo2+item.estilo2" :style="{'width':item.nivel}"></div>
                </div>
            </div>
        </div>
    </figure>
</template>

<script>
export default {
    name: 'CardHabilidades',
    props:{
        titulo:String,
        parrafo:String,
        lista:[]
    },
    data(){
        return{
            estilo1:'rounded-xl w-14 sm:w-20 p-2 ',
            estilo2:'h-full rounded-full ',
        }
    }
}
</script>