<template>
    <v-container>
        <v-row no-gutters>
            <v-col class="d-flex justify-center">
                <div data-aos="fade-right" v-bind:data-aos-duration="duracion">
                    <v-img id="img-perfil" src="../assets/img/profile.png" width="180"></v-img>
                </div>
            </v-col>
            <v-col>
                <div data-aos="fade-left" v-bind:data-aos-duration="duracion">
                    <v-card class="grid-margin blur" variant="tonal" title="Sobre mi" v-bind:text="descripcion">
                    </v-card>
                </div>
            </v-col>
        </v-row>

        <v-row no-gutters>
            <v-col class="d-flex justify-center">
                <div data-aos="fade-right" v-bind:data-aos-duration="duracion">
                    <v-img id="img-preparacion" src="../assets/img/requirements.png" width="180"></v-img>
                </div>
            </v-col>
            <v-col>
                <div data-aos="fade-left" v-bind:data-aos-duration="duracion">
                    <v-card class="grid-margin blur" variant="tonal" title="Preparacion">
                        <v-timeline density="compact" align="start">
                            <v-timeline-item v-for="message in messages" :key="message.time" :dot-color="message.color"
                                size="x-small">
                                <div class="mb-4">
                                    <div class="font-weight-normal">
                                        <strong>{{ message.from }}</strong>
                                        <br>
                                        {{ message.time }}
                                    </div>
                                    <div>{{ message.message }}</div>
                                </div>
                            </v-timeline-item>
                        </v-timeline>
                    </v-card>
                </div>
            </v-col>
        </v-row>

        <v-row no-gutters>
            <v-col class="d-flex justify-center">
                <div data-aos="fade-right" v-bind:data-aos-duration="duracion">
                    <v-img class="izquierda" src="../assets/img/cv.png" width="180"></v-img>
                </div>
            </v-col>
            <v-col>
                <div data-aos="fade-left" v-bind:data-aos-duration="duracion">
                    <v-card class="grid-margin blur" variant="tonal" title="Mi Curriculum"  v-bind:text="des_cv">  </v-card>
                </div>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    data: () => ({
        descripcion: '"¡Hola! Mi nombre es Lenin. Como estudiante apasionado de la tecnología, he desarrollado habilidades en lenguajes de programación como Python, Java y también tengo experiencia en Inteligencia Artificial. ¡Estoy emocionado de compartir mi experiencia y habilidades con ustedes y espero trabajar en proyectos emocionantes en el futuro!"',
        des_cv:'Mi camino hasta aquí: una jornada de aprendizaje y desafío. Hechale un vistazo!',
        messages: [
            {
                from: 'Universidad',
                message: `Actualmente estudio en la Universidad Tecnica de Ambato`,
                time: '2019 - presente',
                color: 'deep-purple-lighten-1',
            },
            {
                from: 'Desarrollo en java',
                message: 'Capacitacion en desarrollo de aplicaciones para escritorio y servicios  web',
                time: '2022',
                color: 'green',
            },
            {
                from: 'Python',
                message: 'Capacitacion en python para analisis de datos y algoritmos de inteligencia artificial',
                time: '2022',
                color: 'deep-purple-lighten-1',
            },
            {
                from: 'IA',
                message: 'Desarrollo de algoritmos de inteligencia artificial y manejo de tecnologias como opencv, tensorflow y matlab',
                time: '2022',
                color: 'blue',
            },
        ],
    }),
    props:{
        duracion: {
            type: Number,
            required: true
        }
    }
}
</script>

<style>
.grid-margin {
    margin: 15px;
}

.no-backround {
    background-color: transparent;
}
</style>