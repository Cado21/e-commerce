<template>
    <div class="home">
        <!-- <ProductList :products='products' :role='role'></ProductList> -->
        <router-view :products='products' :role='role'></router-view>
    </div>
</template>

<script>
// @ is an alias to /src
import Product from '../components/Product'
import ProductList from '../components/ProductList'

import router from "../router"
import axiosInstance from '../api/axios'

export default {
    name: "home",
    data : function () {
        return {
            products : [],
            role : 'customer'
        }
    },
    components: {
        ProductList
    },
    methods : {
        
    },
    created: function() {
        const token = localStorage.getItem('token');
        const role = localStorage.getItem('role');
        this.$store.commit('setRole' , role )
        this.role = role;
        if( token ) {
            this.isLogin = true;
        } else {
            this.isLogin = false;
        }
    }
};
</script>
