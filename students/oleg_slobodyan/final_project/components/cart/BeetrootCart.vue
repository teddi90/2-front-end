<template>
    <div class="container">
        <div class="cart">
            <div class="row">
                <beetroot-cart-product
                    v-for="(product, index) in cart"
                    :product="product"
                    :key="product.id"
                    :productIndex="index"
                 />
               
            </div>
        </div>
    </div>
</template>

<script>
import BeetrootCartProduct from "./BeetrootCartProduct.vue";
import { mapGetters } from "vuex";

export default {
    components: { BeetrootCartProduct },
    name: "beetroot-cart",
    computed:{
        ...mapGetters(['cart']),
    },
    mounted(){

    }
};
</script>
