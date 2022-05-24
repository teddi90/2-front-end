<template>
  <footer class="footer">
        <div class="container">
            <div class="row">
                <div class="col-lg-4 col-md-5 col-sm-12">
                    <router-link class="footer__logo" to="/">
                        <img src="@/assets/images/logo.png" alt="logo">
                        </router-link>
                    <p>
                        The customer is at the heart of our unique business model, which includes design.
                    </p>
                </div>
                <div class="col-xl-2 col-md-3 offset-md-0 offset-lg-1 offset-xl-0 col-sm-6">
                    <h3 class="footer-title">shopping</h3>
                    <ul class="footer-list">
                        <li class="footer-list__item">
                            <a href="#">Clothing Store</a>
                        </li>
                        <li class="footer-list__item">
                            <a href="#">Trending Shoes</a>
                        </li>
                        <li class="footer-list__item">
                            <a href="#">Accessories</a>
                        </li>
                        <li class="footer-list__item">
                            <a href="#">Sale</a>
                        </li>

                    </ul>
                </div>
                <div class="col-xl-3 col-md-4 col-sm-6">
                    <h3 class="footer-title">shopping</h3>
                    <ul class="footer-list">
                        <li class="footer-list__item">
                            <a href="#">Contact Us</a>
                        </li>
                        <li class="footer-list__item">
                            <a href="#">Payment Methods</a>
                        </li>
                        <li class="footer-list__item">
                            <a href="#">Delivary</a>
                        </li>
                        <li class="footer-list__item">
                            <a href="#">Return & Exchanges</a>
                        </li>
                    </ul>
                </div>
                <div class="col-xl-3 col-md-12">
                    <h3 class="footer-title">newletter</h3>
                    <p>Be the first to know about new arrivals, look books, sales & promos!</p>
                    <div class="fooer-email__wrapper">
                        <input type="text" class="footer-input" placeholder="Your email">
                        <button class="footer-btn"><i class="material-icons">mail</i></button>
                    </div>
                </div>
            </div>
            <div class="footer-copyright">
                <p>Copyright © 2022 All rights reserved</p>
            </div>
        </div>
    </footer>
    <router-view />
</template>

<script>
export default {
    name:'beetroot-footer'
}
</script>

<style>

</style>
