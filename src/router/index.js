import { createRouter, createWebHistory} from "vue-router"
import BlogsIndex from "@/views/blogs/Index"
import BlogDetails from "@/views/blogs/BlogDetails"
import NotFound from "@/views/NotFound"

const routes = [
    { path: '/',  redirect: { name: 'BlogsPage' } },
    { path: '/blogs', name: "BlogsPage", component: BlogsIndex },
    { path: '/blogs/:slug', name:"BlogDetails", component: BlogDetails },
    { path: '/:pathMatch(.*)*', name: "NotFound", component: NotFound },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;
