import { createRouter, createWebHistory} from "vue-router"
import BlogsIndex from "@/views/blogs/Index"
import BlogDetails from "@/views/blogs/BlogDetails"
import NotFound from "@/views/NotFound"

const routes = [
    { path: '/',  redirect: { name: 'BlogsPage' } },
    { path: '/blogs', name: "BlogsPage", component: BlogsIndex },
    { path: '/blogs/:id', name:"BlogDetails", component: BlogDetails },
    { path: '/:pathMatch(.*)*', name: "NotFound", component: NotFound },
]

const router = createRouter({
    history: createWebHistory(),
    scrollBehavior() {
        return {
            x: 0,
            y: 0
        };
    },
    routes
})

export default router;
