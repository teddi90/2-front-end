<template>
  <beetroot-header/>
    <main class="main">
        <section class="hero" id="home">
            <div class="hero-slider swiper">
                <div class="swiper-wrapper">
                    <div class="swiper-slide">
                        <div class="container">
                            <div class="row">
                                <div class="col-lg-6 col-sm-10 col-xs-12">
                                    <p class="hero-sutitle">summer colection</p>
                                    <h2 class="hero-title"> Fall-Winter Collections 2022</h2>
                                    <p class="hero-text">
                                        A specialist label creating luxury essentials. Ethically crafted with an
                                        unwavering
                                        commitment to exceptional quality.
                                    </p>
                                    <a href="#" class="hero-btn btn">shop now</a>
                                </div>
                                <div class="col-lg-6 d-none d-md-block">
                                    <img class="hero-img" src="@/assets/images/slider.png" alt="fashion">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="swiper-slide">
                        <div class="container">
                            <div class="row">
                                <div class="col-lg-6 col-sm-10 col-xs-12">
                                    <p class="hero-sutitle">summer colection</p>
                                    <h2 class="hero-title"> Fall-Winter Collections 2022</h2>
                                    <p class="hero-text">
                                        A specialist label creating luxury essentials. Ethically crafted with an
                                        unwavering
                                        commitment to exceptional quality.
                                    </p>
                                    <a href="#" class="hero-btn btn">shop now</a>
                                </div>
                                <div class="col-lg-6 d-none d-md-block">
                                    <img class="hero-img" src="@/assets/images/slider.png" alt="fashion">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="swiper-slide">
                        <div class="container">
                            <div class="row">
                                <div class="col-lg-6 col-sm-10 col-xs-12">
                                    <p class="hero-sutitle">summer colection</p>
                                    <h2 class="hero-title"> Fall-Winter Collections 2022</h2>
                                    <p class="hero-text">
                                        A specialist label creating luxury essentials. Ethically crafted with an
                                        unwavering
                                        commitment to exceptional quality.
                                    </p>
                                    <a href="#" class="hero-btn btn">shop now</a>
                                </div>
                                <div class="col-lg-6 d-none d-md-block">
                                    <img class="hero-img" src="@/assets/images/slider.png" alt="fashion">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="swiper-button-next"></div>
                <div class="swiper-button-prev"></div>
            </div>

        </section>
        <section class="info-products">
            <div class="container">
                <div class="info-products__filter">
                    <ul>
                        <li><a href="#" @click.prevent="getTopProductList()" :class="{active:isTopSales}">Top Sales</a></li>
                        <li><a href="#" @click.prevent="getNewArrivalsProducts()" :class="{active:isNewArrivals}">New Arrivals</a></li>
                        <li><a href="#"  @click.prevent="gethotSalesProducts()" :class="{active:isHotSales}">Hot Sales</a></li>
                    </ul>
                </div>
                <div class="row">
                    <beetroot-home-product
                    v-for="product in filteredProducts" 
                    :key="product.id"
                    :product="product"
                    />
                </div>
            </div>
        </section>
        <section class="shop-news">
            <div class="container">
                <p class="shop-news__subtitle">latest news</p>
                <h2 class="shop-news__title">Fashion New Trends</h2>
                <div class="row">
                    <div class="col-lg-4 col-md-6 col-xs-12">
                        <div class="shop-news__card news-card">
                            <a href="#" class="news-card__img">
                                <img src="@/assets/images/news1.jpg" alt="coffe">
                            </a>
                            <div class="news-card__info">
                                <a href="#" class="news-card__pubdate">
                                    <i class="material-icons">date_range</i> 16 February 2020
                                </a>
                                <div class="news-card__title">What Curling Irons Are The Best Ones</div>
                                <a href="#" class="news-card__btn">read more</a>
                            </div>

                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-xs-12">
                        <div class="shop-news__card news-card">
                            <a href="#" class="news-card__img">
                                <img src="@/assets/images/news2.jpg" alt="coffe">
                            </a>
                            <div class="news-card__info">
                                <a href="#" class="news-card__pubdate">
                                    <i class="material-icons">date_range</i> 28 February 2020
                                </a>
                                <div class="news-card__title">The Health Benefits Of Sunglasses
                                </div>
                                <a href="#" class="news-card__btn">read more</a>
                            </div>

                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-xs-12">
                        <div class="shop-news__card news-card">
                            <a href="#" class="news-card__img">
                                <img src="@/assets/images/news3.jpg" alt="coffe">
                            </a>
                            <div class="news-card__info">
                                <a href="#" class="news-card__pubdate">
                                    <i class="material-icons">date_range</i> 21 February 2020
                                </a>
                                <div class="news-card__title">Eternity Bands Do Last Forever</div>
                                <a href="#" class="news-card__btn">read more</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
    <beetroot-footer/>
</template>

<script>

import { mapGetters,mapActions} from 'vuex';
import BeetrootFooter from './BeetrootFooter.vue';
import BeetrootHeader from './BeetrootHeader.vue';
import BeetrootHomeProduct from './BeetrootHomeProduct.vue';
export default {
    components: { BeetrootFooter, BeetrootHeader, BeetrootHomeProduct },
    name:'beetroot-home',
    data(){
        return{
            filteredProducts:[],
            isTopSales:true,
            isNewArrivals:false,
            isHotSales:false,
        }
        
    },
    computed:{
        ...mapGetters(['productList']),
       
    },
    methods:{
        ...mapActions(["getProduct"]),
        getTopProductList(){
            this.filteredProducts=[];
            this.isTopSales=true;
            this.isNewArrivals=false;
            this.isHotSales=false;
            this.productList.map(product=>{
                if(product.label==='top'){
                    this.filteredProducts.push(product);
                }
            });
        },
        getNewArrivalsProducts(){
            this.filteredProducts=[];
            this.isTopSales=false;
            this.isNewArrivals=true;
            this.isHotSales=false;
            this.productList.map(product=>{
                if(product.label==='new'){
                    this.filteredProducts.push(product);
                }
            });
        },
        gethotSalesProducts(){
            this.filteredProducts=[];
            this.isTopSales=false;
            this.isNewArrivals=false;
            this.isHotSales=true;
            this.productList.map(product=>{
                if(product.label==='sale'){
                    this.filteredProducts.push(product);
                }
            });
        }
    },
    created(){
        this.getProduct();
    },
    mounted(){
        
        this.getTopProductList();
        
         const swiper = document.createElement("script");
        swiper.setAttribute(
        "src",
        "https://unpkg.com/swiper@8/swiper-bundle.min.js"
        );
        swiper.async = true;
        document.head.appendChild(swiper);
        
        const mainJs = document.createElement("script");
        mainJs.setAttribute(
        "src",
        "@assets/js/main.js"
        );
        mainJs.async = true;
        document.body.appendChild(mainJs);
            
    }
}
</script>

<style>

</style>
