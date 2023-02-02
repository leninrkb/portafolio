<template>
    <div data-aos="fade-up" :data-aos-duration="duracion">
        <v-card class="oscuro" title="Proyectos" variant="tonal" :text="subtitle">
            <v-card variant="tonal" class="oscuro margen">
                <v-carousel show-arrows="hover" :interval="intervalo" cycle>
                    <v-carousel-item v-for="img in images" :src="img.src">
                        <div class="text-h3 text-white bottom-0 left-0 text-xl oscuro">
                            {{ img.title }}
                        </div>
                    </v-carousel-item>
                </v-carousel>
            </v-card>
        </v-card>
    </div>
</template>
<script>
export default {
    name: 'Carousel'
    , data() {
        return {
            subtitle: 'Estos son proyectos que he realizado tanto en solitario como en colaboración, aquí presento una muestra del trabajo y dedicación mios y de mis colegas a cada uno de ellos',
            images: [
                {
                    src: require('../assets/img/img_carousel/p_aes.png')
                    , title: 'Practica cifrado AES'
                }
            ],
            intervalo: 10000,
            colors: [
                'primary',
                'secondary',
                'yellow darken-2',
                'red',
                'orange',
            ],
            model: 0,
        }
    },
    props: {
        duracion: {
            type: Number,
            required: true
        }
    }

}
</script>