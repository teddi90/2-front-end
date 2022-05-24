import { createRouter, createWebHistory } from "vue-router";
import BeetrootHome from "../components/BeetrootHome.vue";
import BeetrootContact from "../components/BeetrootContact.vue";
import BeetrootShop from "../components/BeetrootShop.vue";
import BeetrootCart from "../components/cart/BeetrootCart.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: BeetrootHome,
  },
  {
    path: "/shop",
    name: "shop",
    component: BeetrootShop,

  },
  {
    path: "/contacts",
    name: "contacts",
    component: BeetrootContact,

  },
  {
    path: "/cart",
    name: "cart",
    component: BeetrootCart,

  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
