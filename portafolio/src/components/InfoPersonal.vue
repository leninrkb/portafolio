<template>
    <v-container>
        <v-row no-gutters>
            <v-col>
                <v-card variant="tonal" class="grid-margin">
                    <v-img src="../assets/img/profile.png" width="150"></v-img>
                </v-card>
            </v-col>
            <v-col>
                    <v-card class="grid-margin" variant="tonal"  title="Sobre mi" 
                        v-bind:text="descripcion">
                        </v-card>
            </v-col>
        </v-row>
        <v-row no-gutters>
            <v-col>
                <v-card variant="tonal" class="grid-margin">
                    <v-img src="../assets/img/requirements.png" width="150"></v-img>
                </v-card>
            </v-col>
            <v-col>
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
            </v-col>
        </v-row>
        <v-row no-gutters>
            <v-col>
                <v-card variant="tonal" class="grid-margin">
                    <v-img src="../assets/img/cv.png" width="150"></v-img>
                </v-card>
            </v-col>
            <v-col>
                    <v-card class="grid-margin" variant="tonal"  title="Mi Curriculum" subtitle="This is a subtitle"
                        v-bind:text="descripcion">
                    </v-card>
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
.grid-margin{
    margin: 15px;
}
</style>