import { createRouter, createWebHistory } from 'vue-router';
import Home from "./components/Home.vue";
import RezeptListe from "./components/RezeptListe.vue";
import EditorIndex from "./components/editor/EditorIndex.vue";
import Album from "./components/Album.vue";

const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/liste',
        component: RezeptListe
    },
    {
        path: '/rezept/:id?',
        component: EditorIndex
    },
    {

        path: "/album",
        component: Album

    },
]


const router = createRouter({
    history: createWebHistory(),
    routes,
    base: '/'
})

export default router;
