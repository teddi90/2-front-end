<template>
  <header class="header">
        <div class="container">
            <nav class="nav">
                <div class="nav__logo logo">
                    <router-link to="/">
                        <img src="@/assets/images/logo.png" alt="meliora" class="logo__img">
                    </router-link>
                </div>
                <div class="humbeurger">
                    <span class="humbeurger__item"></span>
                </div>
                <div class="menu-wrapper">
                    <ul class="nav__menu menu">
                        <li class="menu__item"><router-link class="menu__link" to="/">Home</router-link></li>
                        <li class="menu__item"><router-link class="menu__link" to="/shop">Shop</router-link></li>
                        <li class="menu__item"><router-link class="menu__link" to="/contacts">Conatcts</router-link></li>
                        <li class="header-search">
                            <input type="text" v-model="searchValue" class="header-search__input" placeholder="Search">
                            <a href="#" @click="searchHeader(searchValue)" class="header-search-btn material-icons">
                                search
                            </a>
                        </li>
                        <li class="menu__item"><router-link class="menu__link cart-link material-icons" to="/cart">shopping_cart</router-link>
                            <span class="menu__cart-counter">{{cart.length}}</span>
                            <span class="menu__cart-total">${{getCartTotalPrice}}</span>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    </header>
    <router-view />
</template>

<script>
import { mapGetters,mapActions} from 'vuex'
export default {
    name:'beetroot-header',
    data(){
        return {
            searchValue:'',
        }
    },
    computed:{
        ...mapGetters(['cart']),
        getCartTotalPrice(){
           if(this.cart.length){ 
            const totalArr=this.getTotalPrice();
            return totalArr.reduce((a,b)=>a+b).toFixed(2);}
            else return '0.00';
        }
    },
    methods: {
        ...mapActions(['setSearchValue']),
        getTotalPrice(){
            let total=this.cart.map(product=>{
                return product.price*product.qty;
            });
            return total;
        },
        searchHeader(value){
            this.setSearchValue(value);
            this.$router.push('/shop');
        }
    }
}
</script>

<style>

</style>
