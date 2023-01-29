<template>
    <div data-aos="fade-right" :data-aos-duration="duracion">
        <v-row no-gutters>
            <v-card class="oscuro" title="Tecnologias" variant="tonal" :text="texto">
                <div class="margen">
                    <v-card class="transp">
                        <section class="carousel">
                            <div class="carousel__slider">
                                <ul class="carousel__list">
                                    <li class="carousel__item" v-for="img in images">
                                        <v-img :src="img"></v-img>
                                    </li>
                                </ul>
                            </div>
                        </section>

                    </v-card>
                </div>
            </v-card>
        </v-row>
    </div>
</template>
<script>
export default {
    name: 'HabilidadesDomina',
    data() {
        return {
            texto: 'Estas son las tecnologias con las que actualmente estoy capacitado para trabajar',
            intervalo: 2500,
            images: [
                {
                    src: require('../assets/img/img_tecnologias/ai.png')
                }
                , {
                    src: require('../assets/img/img_tecnologias/tensorflow.png')
                }
                , {
                    src: require('../assets/img/img_tecnologias/opencv.png')
                }
                , {
                    src: require('../assets/img/img_tecnologias/python.png')
                }
                , {
                    src: require('../assets/img/img_tecnologias/c-sharp.png')
                }
                , {
                    src: require('../assets/img/img_tecnologias/java.png')
                }
                , {
                    src: require('../assets/img/img_tecnologias/spring-boot.png')
                }
                , {
                    src: require('../assets/img/img_tecnologias/vue.png')
                }, {
                    src: require('../assets/img/img_tecnologias/angular.png')
                }
                , {
                    src: require('../assets/img/img_tecnologias/js.png')
                }
                , {
                    src: require('../assets/img/img_tecnologias/linux.png')
                }

                , {
                    src: require('../assets/img/img_tecnologias/sql-server.png')
                }
                


            ],
        }
    },
    props: {
        duracion: {
            type: Number,
            required: true
        }
    },
    mounted() {
        "use strict";
        function carousel() {
            let carouselSlider = document.querySelector(".carousel__slider");
            let list = document.querySelector(".carousel__list");
            let item = document.querySelectorAll(".carousel__item");
            let list2;

            const speed = 0.5;

            const width = list.offsetWidth;
            let x = 0;
            let x2 = width;

            function clone() {
                list2 = list.cloneNode(true);
                carouselSlider.appendChild(list2);
                list2.style.left = `${width}px`;
            }

            function moveFirst() {
                x -= speed;

                if (width >= Math.abs(x)) {
                    list.style.left = `${x}px`;
                } else {
                    x = width;
                }
            }

            function moveSecond() {
                x2 -= speed;

                if (list2.offsetWidth >= Math.abs(x2)) {
                    list2.style.left = `${x2}px`;
                } else {
                    x2 = width;
                }
            }

            function hover() {
                clearInterval(a);
                clearInterval(b);
            }

            function unhover() {
                a = setInterval(moveFirst, 10);
                b = setInterval(moveSecond, 10);
            }

            // clone();

            let a = setInterval(moveFirst, 10);
            let b = setInterval(moveSecond, 10);

            // carouselSlider.addEventListener("mouseenter", hover);
            // carouselSlider.addEventListener("mouseleave", unhover);
        }

        carousel();
    },
}

</script>
<style>

ul {
    list-style: none;
}

.carousel {
    position: relative;
    overflow: hidden;
}

.carousel__slider {
    position: relative;
    display: flex;
    align-items: center;
    width: 100vw;
    height: 20vw;
}

.carousel__list {
    position: absolute;
    width: 100%;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    display: flex;
    align-items: center;
    justify-content: space-around;
}

.carousel__item {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100px;
    height: 100px;
    border-radius: 50px;
    box-sizing: border-box;
    cursor: pointer;
    padding-right: 20px;
}

.carousel__item:hover {
    transform: scale(1.1);
    font-size: 30px;
}
</style>