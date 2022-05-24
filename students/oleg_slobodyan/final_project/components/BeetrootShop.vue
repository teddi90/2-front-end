<template>
  <section class="catalog">
            <div class="container">
                <div class="row">
                    <div class="col-md-12 col-lg-3">
                        <div class="catalog-sidebar">
                            <div class="catalog-filter">
                                <h3 class="catalog-title">categories</h3>
                                <ul>
                                    <li><label class="switch">
                                            <input class="switch__input" v-model="isAll" @click="setAll()" name="input-general" type="checkbox" />
                                            <i class="switch__icon"></i>
                                            <span class="switch__span">All</span>
                                        </label>
                                    </li>
                                    <li><label class="switch">
                                            <input class="switch__input" v-model="isMen" @click="setMen()" name="input-general" type="checkbox" />
                                            <i class="switch__icon"></i>
                                            <span class="switch__span">Men</span>
                                        </label>
                                    </li>
                                    <li><label class="switch">
                                            <input class="switch__input" v-model="isWomen" @click="setWomen()" name="input-general" type="checkbox" />
                                            <i class="switch__icon"></i>
                                            <span class="switch__span">Women</span>
                                        </label>
                                    </li>
                                    <li><label class="switch">
                                            <input class="switch__input" v-model="isTshirt" @click="setTshirt()" name="inpu-type-product" type="checkbox" />
                                            <i class="switch__icon"></i>
                                            <span class="switch__span">T-shirts</span>
                                        </label>
                                    </li>
                                    <li><label class="switch">
                                            <input class="switch__input" v-model="isShoes" @click="setShoes()" name="inpu-type-product" type="checkbox" />
                                            <i class="switch__icon"></i>
                                            <span class="switch__span">Shoes</span>
                                        </label>
                                    </li>
                                    <li><a href="#" class="btn filter-btn" @click="filteredProductList()">Apply Filter</a></li>
                                </ul>
                            </div>
                            <div class="catalog-filter">
                                <h3 class="catalog-title">filter price</h3>
                                <div class="new-filter">
                                    <span class="multi-range">
                                        <input type="range" min="0" step="5" max="1000" @change="filteredByPrice()" v-model.number="rangeBoundary0" id="lower">
                                        <input type="range" min="0" step="5" max="1000" @change="filteredByPrice()" v-model.number="rangeBoundary1" id="upper">
                                    </span>
                                    <div class="catalog-filter__price">
                                        <span>min:{{rangeMin}}$</span>
                                        <span>max:{{rangeMax}}$</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-9 col-md-12">
                        <div class="row">
                            <beetroot-shop-product 
                            v-for="product in filteredProducts"
                            :product="product"
                            :key="product.id"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <beetroot-footer/>
</template>

<script>
import {mapGetters,mapActions} from 'vuex';
import BeetrootFooter from './BeetrootFooter.vue';
import BeetrootShopProduct from './BeetrootShopProduct.vue';
export default {
    components: { BeetrootShopProduct, BeetrootFooter },
    name: 'beetroot-shop',
    data(){
        return{
            rangeBoundary0:0,
            rangeBoundary1:1000,
            isAll:true,
            isMen:false,
            isWomen:false,
            isTshirt:false,
            isShoes:false,
            filteredProducts:[],
        }
    },
    computed:{
        ...mapGetters(['productList','searchValue']),
        rangeMax() {
            return this.rangeBoundary0 >this.rangeBoundary1?this.rangeBoundary0:this.rangeBoundary1
        },
        rangeMin() {
            return this.rangeBoundary0 >this.rangeBoundary1?this.rangeBoundary1:this.rangeBoundary0
        }
    },
    watch:{
        searchValue(){
            this.sortProductBySearchValue(this.searchValue);
        }
    },
    methods: {
        ...mapActions(['getProduct']),
        setAll(){
            this.isMen=false;
            this.isWomen=false;
        },
         setMen(){
            this.isAll=false;
            this.isWomen=false;
        },
         setWomen(){
            this.isMen=false;
            this.isAll=false;
        },
         setTshirt(){
            this.isShoes=false;
        },
         setShoes(){
            this.isTshirt=false;
        },
        getAllProducts(){
            this.filteredProducts=[];
            this.productList.map(product=>{
                    this.filteredProducts.push(product);
                });
        },
        getMenProducts(){
            this.filteredProducts=[];
            this.productList.map(product=>{
                if(product.for==='men'){
                    this.filteredProducts.push(product);
                }
            });
        },
        getWomenProducts(){
            this.filteredProducts=[];
            this.productList.map(product=>{
                if(product.for==='women'){
                    this.filteredProducts.push(product);
                }
            });
        },
        getTshirtList(){
                const tshirtList=[];
                this.filteredProducts.map(product=>{
                if(product.type==='t-shirt'){
                    tshirtList.push(product);
                }
            });
            this.filteredProducts=tshirtList;
        },
        getShoesList(){
                const shoesList=[];
                this.filteredProducts.map(product=>{
                    if(product.type==='shoes'){
                        shoesList.push(product);
                    }
                });
                this.filteredProducts=shoesList;
            
        },
        filteredProductList(){
            let filteredList=[];
            if(this.isAll && !this.isTshirt && !this.isShoes){
               this.getAllProducts();
            }
            if(this.isAll && this.isTshirt){
               
                this.getAllProducts();
                this.filteredProducts.filter(product=>{
                    if(product.type==='t-shirt'){
                        filteredList.push(product);
                    }
                });
                this.filteredProducts=filteredList;
            }
            if(this.isAll && this.isShoes){
                
                this.getAllProducts();
                this.filteredProducts.filter(product=>{
                    if(product.type==='shoes'){
                        filteredList.push(product);
                    }
                });
                this.filteredProducts=filteredList;
            }
            
            if(this.isMen && !this.isTshirt && !this.isShoes){
               this.getMenProducts();
            }
            if(this.isMen && this.isTshirt){
                this.getMenProducts();
                this.filteredProducts.filter(product=>{
                    if(product.type==='t-shirt'){
                       filteredList.push(product);
                    }
                });
                this.filteredProducts=filteredList;
            }
            if(this.isMen && this.isShoes){
                this.getMenProducts();
                this.filteredProducts.filter(product=>{
                    if(product.type==='shoes'){
                        filteredList.push(product);
                    }
                });
                this.filteredProducts=filteredList;
            }

            if(this.isWomen && !this.isTshirt && !this.isShoes){
               this.getWomenProducts();
            }
            if(this.isWomen && this.isTshirt){
                this.getWomenProducts();
                this.filteredProducts.filter(product=>{
                    if(product.type==='t-shirt'){
                       filteredList.push(product);
                    }
                });
                this.filteredProducts=filteredList;
            }
            if(this.isWomen && this.isShoes){
                this.getWomenProducts();
                this.filteredProducts.filter(product=>{
                    if(product.type==='shoes'){
                       filteredList.push(product);
                    }
                });
                this.filteredProducts=filteredList;
            }
            
        },
        filteredByPrice(){
            this.filteredProducts=[...this.productList];
            
            if(this.isMen){
                this.getMenProducts();
            }
            if(this.isWomen){
                this.getWomenProducts();
            }
            if(this.isShoes){
                this.getShoesList();
            }
             if(this.isTshirt){
                this.getTshirtList();
            }
            this.filteredProducts=this.filteredProducts.filter(item=>{
                return item.price >=this.rangeBoundary0 && item.price <=this.rangeBoundary1;
            })
        },
        sortProductBySearchValue(value){
            this.filteredProducts=[...this.productList];
            if(value){
                this.filteredProducts=this.filteredProducts.filter(product=>{
                return product.name.toLowerCase().includes(value.toLowerCase());
            });
            } else{
                this.filteredProducts=this.productList;
            }
        }
    },
    mounted(){
        this.getProduct();
        this.getAllProducts();
        this.sortProductBySearchValue(this.searchValue);
    }
}
</script>

<style>

</style>
