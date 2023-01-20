<template>
    <v-container>
        <v-row no-gutters>
            <v-col>
                <v-card class="grid-margin">
                    <v-img height="200" src="https://cdn.pixabay.com/photo/2020/07/12/07/47/bee-5396362_1280.jpg" cover
                        class="text-white">
                    </v-img>
                </v-card>
            </v-col>
            <v-col>
                    <v-card class="grid-margin" variant="tonal"  title="Sobre mi" subtitle="This is a subtitle"
                        v-bind:text="descripcion">
                    </v-card>
            </v-col>
        </v-row>
        <v-row no-gutters>
            <v-col>
                Preparacion
                <v-card class="grid-margin">
                    <v-img height="200" src="https://cdn.pixabay.com/photo/2020/07/12/07/47/bee-5396362_1280.jpg" cover
                        class="text-white">
                    </v-img>
                </v-card>
            </v-col>
            <v-col>
                asdasd
                    <v-card class="grid-margin" variant="tonal" title="Preparacion" subtitle="This is a subtitle" text="This is content">
                        <v-timeline density="compact" align="start">
                            <v-timeline-item v-for="message in messages" :key="message.time" :dot-color="message.color"
                                size="x-small">
                                <div class="mb-4">
                                    <div class="font-weight-normal">
                                        <strong>{{ message.from }}</strong> @{{ message.time }}
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
                hoja de vida
                <v-card class="grid-margin">
                    <v-img height="200" src="https://cdn.pixabay.com/photo/2020/07/12/07/47/bee-5396362_1280.jpg" cover
                        class="text-white">
                        <v-toolbar color="rgba(0, 0, 0, 0)" theme="dark">
                            <template v-slot:prepend>
                                <v-btn icon="$menu"></v-btn>
                            </template>
                            <template v-slot:append>
                                <v-btn icon="mdi-dots-vertical"></v-btn>
                            </template>
                        </v-toolbar>
                    </v-img>
                </v-card>
            </v-col>
            <v-col>
                wwerwre
                    <v-card class="grid-margin" variant="tonal"  title="Sobre mi" subtitle="This is a subtitle"
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
                from: 'You',
                message: `Sure, I'll see you later.`,
                time: '10:42am',
                color: 'deep-purple-lighten-1',
            },
            {
                from: 'John Doe',
                message: 'Yeah, sure. Does 1:00pm work?',
                time: '10:37am',
                color: 'green',
            },
            {
                from: 'You',
                message: 'Did you still want to grab lunch today?',
                time: '9:47am',
                color: 'deep-purple-lighten-1',
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