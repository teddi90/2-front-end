<template>
    <div class="col-12">
        <div class="cart-item row align-items-center">
            <a href="#" class="cart-item-img__wraper col-md-2 col-sm-4 col-xs-12">
                <img class="cart-item-image" :src="require('@/assets/images/' + product.img)" :alt="product.name">
            </a>
            <div class="cart-item-info col-md-6 col-sm-8 col-xs-12">
                <h3 class="cart-item-title">{{ product.name }}</h3>
                <beetroot-cart-product-qty
                :qty="product.qty"
                @setQty="setQty"
                />
            </div>
            <div class="cart-item-price col-md-2 col-sm-6">
                Price: ${{(product.price*product.qty).toFixed(2)}}
            </div> 
            <beetroot-cart-product-remove @removeProduct="removeProduct" class="col-md-2"/>
        </div>
    </div>
</template>

<script>
import BeetrootCartProductQty from "./BeetrootCartProductQty.vue";
import BeetrootCartProductRemove from "./BeetrootCartProductRemove.vue";
import { mapActions } from "vuex";

export default {
    components: {
        BeetrootCartProductQty,
        BeetrootCartProductRemove,
    },
    name: "beetroot-cart-product",
    props: {
        product: {
            type: Object,
            default() {
                return {};
            },
            
        },
        productIndex:Number,
    },
    methods:{
        ...mapActions(['changeQty','removeProductCart']),
        removeProduct(){
            this.removeProductCart(this.productIndex);
        },
        setQty(isIncrement){
            let newQty;
            if(!isIncrement && this.product.qty===1){
                return;
             }
            else{
                newQty=this.product.qty-1;
            }
            if(isIncrement){
                newQty=this.product.qty+1;
            }

            this.changeQty({
                productIndex:this.productIndex,
                qty:newQty,
            });
        }
    }
   
};
</script>
