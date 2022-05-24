<template>
    <div class="cart-item-qty">
        <button class="material-icons" @click="$emit('setQty', false)">remove_circle_outline</button>
        <input type="text" :value="qty" />
        <button class="material-icons" @click="$emit('setQty', true)">add_circle_outline</button>
    </div>
</template>

<script>
export default {
    name: "beetroot-cart-product-qty",
    props: {
        qty: {
            type: Number,
        },
    },
    emits: ["setQty"],
};
</script>
