import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Admin from "../views/Admin.vue";
import Contact from "../views/Contact.vue";
import Overview from "../views/Overview.vue";
import Products from "../views/Products.vue";
import { fb } from "../firebase";

Vue.use(VueRouter);

const routes = [{
        path: "/",
        name: "Home",
        component: Home
    },
    {
        path: "/home",
        name: "Home",
        component: Home
    },
    {
        path: "/contact",
        name: "Contact",
        component: Contact
    },
    {
        path: "/admin",
        name: "admin",
        component: Admin,
        meta: { requiresAuth: true },
        children: [{
                path: "overview",
                name: "overview",
                component: Overview,
            },
            {
                path: "products",
                name: "products",
                component: Products,
            }
        ]
    },
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes
});

router.beforeEach((to, from, next) => {
    const requiresAuth = to.matched.some(x => x.meta.requiresAuth)
    const currentUser = fb.auth().currentUser

    if (requiresAuth && !currentUser) {
        next('/')
    } else if (requiresAuth && currentUser) {
        next()
    } else {
        next()
    }
})

export default router;