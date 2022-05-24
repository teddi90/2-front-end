<template>
    <div class="cart-item-remove__wrapper"><button class="remove-btn material-icons" @click="$emit('removeProduct')">delete_outline</button></div>
</template>

<script>
export default {
    name: "beetroot-cart-product-remove",
    emits: ["removeProduct"],
};
</script>
<style scoped>

</style>
