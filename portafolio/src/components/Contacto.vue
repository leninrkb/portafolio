<template>
    <div data-aos="fade-right" :data-aos-duration="duracion">
        <v-row no-gutters>
            <v-card class="todo-ancho oscuro" title="Contacto" variant="tonal" :text="texto">
                <v-card class="transp margen">
                    <v-row fill-width>
                        <v-col class="margen">
                            <v-img :src="contacto_img" width="100vh"></v-img>
                        </v-col>
                        <v-col class="margen">
                            <form>
                                <v-text-field v-model="state.name"
                                    :error-messages="v$.name.$errors.map(e => e.$message)" :counter="10" label="Nombre"
                                    required @input="v$.name.$touch" @blur="v$.name.$touch"></v-text-field>

                                <v-text-field v-model="state.email"
                                    :error-messages="v$.email.$errors.map(e => e.$message)" label="E-mail" required
                                    @input="v$.email.$touch" @blur="v$.email.$touch"></v-text-field>

                                <v-select transition="scroll-x-transition" v-model="state.select" :items="items"
                                    :error-messages="v$.select.$errors.map(e => e.$message)" label="Motivo" required
                                    @change="v$.select.$touch" @blur="v$.select.$touch"></v-select>

                                <v-btn class="me-4 ma" @click="v$.$validate">
                                    enviar
                                </v-btn>
                                <v-btn @click="clear" class="ma">
                                    borrar
                                </v-btn>
                            </form>
                        </v-col>
                    </v-row>
                </v-card>
            </v-card>
        </v-row>
    </div>
</template>
<script>
import { reactive, ref } from 'vue'
import { useVuelidate } from '@vuelidate/core'
import { email, required } from '@vuelidate/validators'

export default {
    name: 'Contacto',
    data() {
        return {
            contacto_img: require('../assets/img/contacto/contactus.jpg'),
            texto: 'Conecta conmigo para cualquier consulta o proyecto en mente, estoy aquí para ayudarte a hacer realidad tus ideas 🤝'
        }
    },
    props: {
        duracion: {
            type: Number,
            required: true
        }
    },
    setup() {
        const initialState = {
            name: '',
            email: '',
            select: null,
        }

        const state = reactive({
            ...initialState,
        })

        const items = ref([
            'Entrevista',
            'Trabajo a medida',
            'Consulta',
            'Otro',
        ])

        const rules = {
            name: { required },
            email: { required, email },
            select: { required },
            items: { required },
        }

        const v$ = useVuelidate(rules, state)

        function clear() {
            v$.value.$reset()

            for (const [key, value] of Object.entries(initialState)) {
                state[key] = value
            }
        }

        return { state, items, clear, v$ }
    },
}
</script>
<style>
.todo-ancho{
    width: 100%;
}

.ma{
    margin-bottom: 5px;
}


</style>