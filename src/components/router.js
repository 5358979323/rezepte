import {createRouter, createWebHistory} from 'vue-router';
import Home from "./pages/Home.vue";
import Rezepte from "./pages/Rezepte.vue";
import EditorIndex from "./pages/EditorIndex.vue";
import Materialien from "@/pages/Materialien.vue";
import Produkte from "@/pages/Produkte.vue";
import Material from "@/pages/Material.vue";
import Produkt from "@/pages/Produkt.vue";

const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/rezepte',
        component: Rezepte
    },
    {
        path: '/rezept/:id?',
        component: EditorIndex
    },
    {
        path: '/materialien',
        component: Materialien
    },
    {
        path: '/material/:id?',
        component: Material
    },
    {
        path: '/produkte',
        component: Produkte
    },
    {
        path: '/produkt/:id?',
        component: Produkt
    },
]


const router = createRouter({
    history: createWebHistory(),
    routes,
    base: '/'
})

export default router;
