<template>
    <div class="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
        <div class="bg-gray-600 rounded-lg shadow-lg overflow-hidden w-fit relative m-8">
            <img class="absolute top-0 right-0 w-10 hover:bg-red-600" src="../assets/close.svg" @click="closeModal()">
            <slot></slot>
        </div>
    </div>
</template>
  
<script>
export default {
    name:'Modal',
    methods: {
        closeModal() {
            this.$emit("close",false);
        }
    },
};
</script>
  