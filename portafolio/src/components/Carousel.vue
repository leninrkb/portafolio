<template>
    <div data-aos="fade-up" :data-aos-duration="duracion">
        <v-card class="blur" title="Mis proyectos" variant="tonal"></v-card>
        <v-card variant="tonal">
            <v-carousel show-arrows="hover" :interval="intervalo" cycle>
                <v-carousel-item v-for="img in images" :src="img.src" cover>
                    <div class="d-flex fill-height justify-center align-center">
                        <div class="text-h2">
                            {{ img.title }}
                        </div>
                    </div>
                </v-carousel-item>
            </v-carousel>
        </v-card>
    </div>
</template>
<script>
export default {
    name: 'Carousel'
    , data() {
        return {
            images: [
                {
                    src: require('../assets/img/img_carousel/albedo.jpg')
                    , title: 'RIKO'
                }
                , {
                    src: require('../assets/img/img_carousel/lala.png')
                    , title: 'cosita'
                }
                , {
                    src: require('../assets/img/img_carousel/naberalGamma.png')
                    , title: 'cosa bien hecha'
                }
                , {
                    src: require('../assets/img/img_carousel/natsumi.png')
                    , title: 'cosa hermosa'
                }
                , {
                    src: require('../assets/img/img_carousel/thoka.png')
                    , title: 'awww <3'
                }
                , {
                    src: require('../assets/img/img_carousel/to4.jpg')
                    , title: 'mi amor'
                }
            ],
            intervalo:10000
        }
    },
    props:{
        duracion:{
            type:Number,
            required:true
        }
    }

}
</script>