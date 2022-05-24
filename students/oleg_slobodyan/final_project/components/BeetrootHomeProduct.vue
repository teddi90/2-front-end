<template>
    <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">
        <div class="info-products__card card">
            <a href="#" class="card-img__wraper">
                <img class="card__image"  :src="require('@/assets/images/' + product.img)" :alt="product.name">
                <span class="card-label" :class="product.label? product.label: ''">{{product.label}}</span>
            </a>
            <div class="card-btn__wrapper">
                <div class="card-btn" @click="addToCartProduct()">+ Add To Cart</div>
                <div class="card-name">{{product.name}}</div>
            </div>
            <div class="card-price">${{product.price}}</div>
        </div>
    </div>
</template>

<script>
import { mapGetters,mapActions} from 'vuex';
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
}
</script>

<style>

</style>
