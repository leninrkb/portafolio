<template>
    <div data-aos="fade-up" data-aos-duration="1000">
        <v-card title="Mis proyectos" variant="tonal"></v-card>
        <v-card variant="tonal">
            <v-carousel show-arrows="hover">
                <v-carousel-item src="https://cdn.vuetifyjs.com/images/cards/docks.jpg" cover></v-carousel-item>

                <v-carousel-item src="https://cdn.vuetifyjs.com/images/cards/hotel.jpg" cover></v-carousel-item>

                <v-carousel-item src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg" cover></v-carousel-item>
            </v-carousel>
        </v-card>
    </div>
</template>
<script>
export default {
    name: 'Carousel'
}
</script>