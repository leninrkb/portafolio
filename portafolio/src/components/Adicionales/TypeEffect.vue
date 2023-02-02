<template>
    <v-container>
        <v-row no-gutters style="height: 400px;">
            <v-col align-self="center transp">
                <v-sheet class="transp">
                    <div>
                        <div id="titulo"></div>
                        <div id="nombre"></div>
                        <div id="presentacion"></div>
                    </div>
                </v-sheet>
            </v-col>
        </v-row>
    </v-container>
</template>


<script>
export default {
    data() {
        return {
            titulo: 'Hola! soy',
            nombre: 'Lenin Acosta ',
            presentacion: 'Desarrollador de software ',
            i: 0,
            j:0,
            k:0,
        }
    },
    mounted() {
        this.typing_titulo();
        this.typing_nombre();
        this.typing_presentacion();
    },
    methods: {
        typing_titulo() {
            if (this.i < this.titulo.length) {
                document.getElementById("titulo").innerHTML += this.titulo.charAt(this.i);
                this.i++;
                setTimeout(() => { this.typing_titulo() }, 100);

            }
        },
        typing_nombre() {
            if (this.j < this.nombre.length) {
                document.getElementById("nombre").innerHTML += this.nombre.charAt(this.j);
                this.j++;
                setTimeout(() => { this.typing_nombre() }, 100);

            }
        },
        typing_presentacion() {
            if (this.k < this.presentacion.length) {
                document.getElementById("presentacion").innerHTML += this.presentacion.charAt(this.k);
                this.k++;
                setTimeout(() => { this.typing_presentacion() }, 100);

            }
        },
    }
}
</script>
<style>

#titulo {
    font-size: 20px;
    text-align: left;
    /* margin-top: 300px; */
    font-family: 'Inter', sans-serif;
    text-decoration: dashed;
    color: rgb(31, 187, 159);
}
#nombre {
    font-size: 70px;
    text-align: left;
    /* margin-top: 300px; */
    text-transform: uppercase;
    font-family: 'Inter', sans-serif;
    color: rgb(32, 186, 182);
    font-weight: bold;
}
#presentacion {
    font-size: 60px;
    text-align: left;
    /* margin-top: 300px; */
    font-family: 'Inter', sans-serif;
    color: rgb(91, 91, 91);
    font-weight: bold;
}
</style>