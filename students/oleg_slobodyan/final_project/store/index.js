import { createStore } from "vuex";
import request from "./request";

const host = 'http://localhost:3000/api/'

export default createStore({
  state: {
    productList: [],
    cart: [],
    searchValue: '',
  },
  getters: {
    productList(state) {
      return state.productList
    },
    currencySymbol(state) {
      return state.currencySymbol;
    },
    outOfStockMessage(state) {
      return state.outOfStockMessage;
    },
    cart(state) {
      return state.cart;
    },
    searchValue(state) {
      return state.searchValue;
    }

  },

  mutations: {
    setProduct(state, productList) {
      state.productList = productList;
    },
    addToCart(state, product) {
      state.cart.push(product);
    },
    changeQty(state, options) {
      state.cart[options.productIndex].qty = options.qty;
    },
    getCart(state, products) {
      state.cart = products;
    },
    removeProductCart(state, productIndex) {
      state.cart.splice(productIndex, 1);
    },
    setSearchValue(state, value) {
      state.searchValue = value;
    }
  },
  actions: {
    async getProduct({ commit }) {
      const url = host + 'products';
      const products = await request(url);
      commit("setProduct", products);
    },
    async addToCart({ commit, dispatch, state }, data) {
      let oldQty = null;

      const productIndex = state.cart.findIndex((product) => {
        if (product.id === data.id) {
          oldQty = product.qty;
          return true;
        }
      });

      if (productIndex === -1) {
        const url = host + "cart";
        const product = await request(url, "POST", data);
        commit("addToCart", product);
      } else {
        dispatch('changeQty', {
          productIndex,
          qty: oldQty + 1,
        });
      }
    },
    async changeQty({ commit, state }, options) {
      commit("changeQty", options);

      const product = state.cart[options.productIndex];
      const url = host + 'cart/' + product.id;
      await request(url, "PUT", product);
    },
    async getCart({ commit }) {
      const url = host + 'cart';
      const products = await request(url);
      commit("getCart", products);
    },
    async removeProductCart({ commit, state }, productIndex) {
      const product = state.cart[productIndex];
      const url = host + 'cart/' + product.id;
      const response = await request(url, "DELETE", product);
      if (response.message) {
        console.log(response.message);
      }
      commit("removeProductCart", productIndex);
    },
    setSearchValue({ commit }, value) {
      commit("setSearchValue", value);
    }
  },
  modules: {},
});
