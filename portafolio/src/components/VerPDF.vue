<template>
    <div v-if="ver">
        <iframe class="pdfview" :src="url" width="100%" height="500"></iframe>
    </div>
</template>
<script>
// AIzaSyCoD65xnCh7VjZrWzCkp1EFcTUD36KW8DU google api key
export default {
    name: 'VerPDF'
    , data() {
        return {
            url:'https://drive.google.com/file/d/1xGpauDhY1sJ82N1eLpp9W2oYF0f54Nai/preview?format=pdf'
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
    margin-bottom: 5px;
    /* Tamaño */
    /* width: 850px; */
    /* height: 100vh; */
    /* Mejorar aspecto */
    border-radius: 10px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
</style>