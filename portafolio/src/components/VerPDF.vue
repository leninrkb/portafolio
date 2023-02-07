<template>
    <div v-if="ver">
        aqui va el pdf
        <!-- <embed src="~/assets/docs/CV_lenin.pdf" type="application/pdf" width="400px" > -->
        <!-- <iframe src="../assets/docs/CV_lenin.pdf" width="100%" height="500"></iframe> -->
        <!-- <iframe id="fred" style="border:1px solid #666CCC" title="PDF in an i-Frame" src="../assets/docs/CV_lenin.pdf" frameborder="1" scrolling="auto" width="100%" height="600px" ></iframe> -->
        <!-- <VuePdfReader url="../assets/docs/CV_lenin.pdf"></VuePdfReader> -->
        <!-- <object class="pdfview" type="application/pdf" data="../../src/assets/docs/CV_lenin.pdf"></object> -->
        <!-- <iframe src="https://drive.google.com/file/d/<file_id>/preview" width="100%" height="500"></iframe> -->
        <iframe src="https://drive.google.com/file/d/1xGpauDhY1sJ82N1eLpp9W2oYF0f54Nai/preview?format=pdf" width="100%" height="500"></iframe>

    </div>

</template>
<script>
// AIzaSyCoD65xnCh7VjZrWzCkp1EFcTUD36KW8DU google api key
export default {
    name: 'VerPDF'
    , data() {
        return {
            // ruta:require("@/assets/docs/CV_lenin.pdf")
            dir:''
            
        }
    }
    , props: {
        ver: Boolean
    }
}
</script>
<style>
.pdfview {
    /* Centrado */
    margin: auto;
    display: block;
    /* Tamaño */
    width: 850px;
    height: 100vh;
    /* Mejorar aspecto */
    border-radius: 20px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
</style>