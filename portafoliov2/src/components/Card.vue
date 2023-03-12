<template>
    <figure class="md:flex  rounded-xl p-8 md:p-0 bg-slate-800">
        <img :class="imgClasses" :src="img" alt=""
          >
        <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
          <blockquote>
            <p class="text-lg font-medium text-gray-300 text-justify">
              {{parrafo}}
            </p>
          </blockquote>
          <figcaption class="font-medium">
            <div class=" text-sky-400">
              {{subtitulo1}}
            </div>
            <div class=" text-slate-500">
              {{subtitulo2}}
            </div>
          </figcaption>
        </div>
      </figure>
</template>

<script>
export default{
    name:'Card',
    mounted(){
      this.imgClasses += this.img_classes
    },
    props:{
        parrafo:String,
        subtitulo1:String,
        subtitulo2:String,
        img:String,
        img_classes:String
    },
    data(){
      return{
        imgClasses:'md:rounded-xl rounded-full mx-auto my-auto '
      }
    }
}
</script>