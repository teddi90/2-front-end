<template>
    <div class="col-md-4 col-xs-12 col-sm-6">
        <div class="product">
            <a href="#" class="product-img__wraper">
                <img class="product-image" :src="require('@/assets/images/' + product.img)" :alt="product.name">
                <span class="product-label" :class="product.label? product.label: ''">{{product.label}}</span>
            </a>
            <div class="product-btn__wrapper">
                <div class="product-btn " @click="addToCartProduct()">+ Add To Cart</div>
                <div class="product-name">{{product.name}}</div>
            </div>
            <div class="product-price">${{product.price}}</div>
        </div>
    </div>
</template>

<script>
import { mapGetters,mapActions} from "vuex"
export default {
    name:'beetroot-shop-product',
    props:{
        product:{
            type:Object,
            default(){
                return {};
            }
        }
    },
    computed:{
        ...mapGetters(['cart']),
    },
    methods:{
        ...mapActions(['addToCart']),
        addToCartProduct(){
            this.addToCart({
                id:this.product.id,
                name: this.product.name,
                img:this.product.img,
                price: this.product.price,
                specialPrice: this.product.specialPrice,
                sku: this.product.sku,
                qty: 1,
            });
        }
    },
    mounted(){
        
    }
}
</script>

<style>

</style>
