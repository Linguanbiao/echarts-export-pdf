import Vue from "vue";
import VueRouter from "vue-router";
import paperHome from "../views/paperHome/index.vue"


Vue.use(VueRouter);

const routes = [{
    path: "/",
    name: "home",
    component: () => import('@/views/paperHome/index.vue')

}, ];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
});

export default router;