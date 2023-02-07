<template>
        <v-footer class="d-flex flex-column">
            <div class="bg-teal d-flex w-100 align-center px-4">
                <strong>Mis redes sociales!</strong>
                <v-spacer></v-spacer>
                <v-btn v-for="icon, index in icons" :key="icon" :href="enlaces[index]" class="mx-4" :icon="icon" variant="plain" size="small">
                    
                </v-btn>
            </div>
            <div class="px-4 py-2 bg-black text-center w-100">
                {{ new Date().getFullYear() }} — <strong>LeninRKB</strong>
            </div>
        </v-footer>
</template>

<script>
export default {
    name: 'Footer',
    data: () => ({
        icons: [
            'mdi-github',
            'mdi-linkedin',
            'mdi-facebook',
        ],
        enlaces:[
            'https://github.com/leninrkb',
            'www.linkedin.com/in/lenin-acosta',
            'https://www.facebook.com/lenin.acosta.56829',
        ]
    }),
}
</script>