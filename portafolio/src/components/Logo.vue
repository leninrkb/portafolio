<template>
    <div class="logo">
        <v-container>
            <v-row class="d-flex justify-center">
                <div data-aos="zoom-in" :data-aos-duration="duracion">
                    <v-img id="img-perfil" src="../assets/img/logo.png" width="500"></v-img>
                </div>
            </v-row>
        </v-container>
    </div>
</template>

<script>
export default {
    name: 'Logo',
    props:{
        duracion: {
            type: Number,
            required: true
        }
    }
}
</script>

<style>
.logo{
    margin-top: 250px;
    margin-bottom: 250px;
}
</style>