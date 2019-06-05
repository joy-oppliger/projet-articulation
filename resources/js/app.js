// Ici, on inclut tous les import nécessaires et les pages que nous allons utiliser comme components
require('./bootstrap');
import BootstrapVue from 'bootstrap-vue'
window.Vue = require('vue');
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.component('my-account', require('./components/Account/Account.vue').default);
Vue.component('big-catalog', require('./components/BigCatalog/BigCatalog.vue').default);
Vue.component('mini-products-catalog', require('./components/MiniCatalog/MiniCatalog.vue').default);
Vue.component('cart-component', require('./components/Cart/Cart.vue').default);
Vue.component('products-single', require('./components/SingleProduct/singleProduct.vue').default);
Vue.component('checkout-component', require('./components/Cart/Cart.vue').default);
Vue.component('slider-homepage', require('./components/Slider/Slider.vue').default);
Vue.component('address-component', require('./components/Address/Address.vue').default);


//Ici, on monte juste le tout ensemble. On lui dit: tu prends le App.vue (c'est notre base avec header footer) et tu lui montes à la div app le router avec les components.
const app = new Vue({
 el: '#app',

});
