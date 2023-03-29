<template>
    <!-- <div class="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
        <div class="bg-gray-600 rounded-lg shadow-lg w-fit relative mx-10 my-14">
            <img class="absolute top-0 right-0 w-10 hover:bg-red-600" src="../assets/close.svg" @click="closeModal()">
            <slot></slot>
        </div>
    </div> -->
    <div class="fixed inset-0 flex items-center justify-center bg-gray-800 opacity-80"></div>
    <div class="fixed inset-0 flex items-center justify-center">
        <div class="grid grid-cols-1 z-50 mx-3">
            <div class="col">
                <div class="relative">
                    <img class="bg-gray-600 absolute top-0 right-0 w-10 hover:bg-red-600 rounded-md" src="../assets/close.svg"
                        @click="closeModal()">
                    <slot></slot>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
export default {
    name: 'Modal',
    methods: {
        closeModal() {
            this.$emit("close", false);
        }
    },
};
</script>
  