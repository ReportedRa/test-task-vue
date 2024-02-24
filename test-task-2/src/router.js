import { createWebHistory, createRouter } from "vue-router";
import PopupForm from './components/PopupForm.vue'
import PopupUse from './components/PopupUse.vue'

const routes = [
    { path: '/first', component: PopupForm},
    { path: '/second', component: PopupUse},
]

const history = createWebHistory();

const router = createRouter({
    history,
    routes,
})

export default router;