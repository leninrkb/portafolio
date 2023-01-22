<template>
    <div data-aos="fade-up" data-aos-duration="1000">
        <v-card class="blur" title="Mis proyectos" variant="tonal"></v-card>
        <v-card variant="tonal">
            <v-carousel show-arrows="hover" interval="2500" cycle>
                <v-carousel-item v-for="img in images" :src="img.src" cover></v-carousel-item>
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
                    src:require('../assets/img/img_carousel/albedo.jpg')
                }
                ,{
                    src:require('../assets/img/img_carousel/lala.png')
                }
                ,{
                    src:require('../assets/img/img_carousel/naberalGamma.png')
                }
                ,{
                    src:require('../assets/img/img_carousel/natsumi.png')
                }
                ,{
                    src:require('../assets/img/img_carousel/thoka.png')
                }
                ,{
                    src:require('../assets/img/img_carousel/to4.jpg')
                }
            ]
        }
    }

}
</script>