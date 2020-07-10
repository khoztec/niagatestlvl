import _ from "lodash"
import axios from "@/plugins/Axios"
import Vue from "vue"
import vuetify from "@/plugins/vuetify"

/**
 * Enable Axios Settings.
 */
axios.enableSettings();

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

Vue.component('App', require('./components/App.vue').default);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 * 
 * Also: Check whether the view have the #app selector.
 */

if (document.querySelector("#app") !== null) {
    const app = new Vue({
        el: '#app',
        vuetify,
    });
}