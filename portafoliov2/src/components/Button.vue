<template >
    <button
        class="bg-gray-700 rounded-md p-3 border-2 border-gray-800 hover:bg-gray-900 hover:text-gray-400 hover:border-cyan-600">
        <slot></slot>
    </button>
</template>
<script>
export default {
    name: 'Button'
}
</script>