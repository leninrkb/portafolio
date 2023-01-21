<template>
    <v-container>
        <v-row no-gutters>
            <v-col class="d-flex justify-center">
                <div data-aos="fade-right">

                    <v-img id="img-perfil" src="../assets/img/profile.png" width="160"></v-img>

                </div>
            </v-col>
            <v-col>
                <div data-aos="fade-left">
                    <v-card class="grid-margin" variant="tonal" title="Sobre mi" v-bind:text="descripcion">
                    </v-card>
                </div>
            </v-col>
        </v-row>
        <v-row no-gutters>
            <v-col class="d-flex justify-center">
                <div data-aos="fade-right">

                    <v-img id="img-preparacion" src="../assets/img/requirements.png" width="180"></v-img>

                </div>
            </v-col>
            <v-col>
                <div data-aos="fade-left">
                    <v-card class="grid-margin" variant="tonal" title="Preparacion">
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
                <div data-aos="fade-right">
                    <v-img class="izquierda" src="../assets/img/cv.png" width="150"></v-img>

                </div>
            </v-col>
            <v-col>
                <div data-aos="fade-left">
                    <v-card class="grid-margin" variant="tonal" title="Mi Curriculum" subtitle="This is a subtitle"
                        v-bind:text="descripcion">
                    </v-card>
                </div>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    data: () => ({
        descripcion: '"¡Hola! Mi nombre es Lenin. Como estudiante apasionado de la tecnología, he desarrollado habilidades en lenguajes de programación como Python, Java y también tengo experiencia en Inteligencia Artificial. ¡Estoy emocionado de compartir mi experiencia y habilidades con ustedes y espero trabajar en proyectos emocionantes en el futuro!"',
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
}
</script>

<style>
.grid-margin {
    margin: 15px;
}

.no-backround {
    background-color: transparent;
}

.contenedor img.izquierda {
    transform: translateX(-100px);
}

.contenedor img.derecha {
    transform: translateX(100px);
}

.contenedor img.visible {
    opacity: 1;
    transform: scale(1) translateX(0);
}
</style>