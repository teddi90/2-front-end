<template>
  <section class="contact">
            <div id="map"></div>
            <div class="container">
                <div class="contact-wrapper">
                    <div class="row">
                        <div class="col-lg-6 col-sm-12">
                            <span class="contact-subtitle">information</span>
                            <h2 class="contact-title">
                                Contact Us
                            </h2>
                            <p>As you might expect of a company that began as a high-end interiors contractor, we pay
                                strict attention.</p>
                            <div class="contact-address">
                                <h3>Ukraine</h3>
                                <p>Ivano-Frankivsk, Nezalegnosti 24</p>
                                <a href="#" class="contact-phone">+38(077)777777</a>
                            </div>
                        </div>
                        <div class="col-lg-6 col-sm-12">
                            <form action="#" method="post" class="contact-form">
                                <div class="row">
                                    <div class="col-lg-6 col-sm-12">
                                        <div class="input-wrapper">
                                            <input type="text" class="contact-form__input" id="form-input-name"
                                                required>
                                            <label for="form-input-name" class="contact-form__label">Your name</label>
                                        </div>
                                    </div>

                                    <div class="col-lg-6 col-sm-12">
                                        <div class="input-wrapper">
                                            <input type="email" size="30" required class="contact-form__input"
                                                id="form-input-mail">
                                            <label for="form-input-mail" class="contact-form__label">Email</label>
                                        </div>
                                    </div>
                                    <div class="col-lg-12">
                                        <div class="input-wrapper">
                                            <input type="text" class="contact-form__input" id="form-input-more">
                                            <label for="form-input-more" class="contact-form__label">Message</label>
                                        </div>
                                    </div>
                                </div>
                                <button type="submit" class="btn">send message</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <beetroot-footer/>
</template>

<script>
import BeetrootFooter from './BeetrootFooter.vue'
export default {
    components: { BeetrootFooter },
    name:'beetroot-contact'
}
</script>

<style>

</style>
