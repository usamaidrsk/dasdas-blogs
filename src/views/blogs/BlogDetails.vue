<template>
  <div class="blog-details-container">
    <div class="blog-content-container" v-if="blogFetched">
      <p style=""><strong>{{ blogAuthor.name }}</strong> · {{createdAt}} hours ago</p>
      <h1 class="blog-tittle">{{blog.title.rendered}}</h1>
      <div class="content-body" v-html="blog.content.rendered" />
    </div>
    <div v-else style="text-align: center; font-weight: bolder; font-style: italic; font-size: 1.4em">
      Oops! could not load blog details
    </div>
    <h1 v-if="blogs.length">More Articles</h1>
    <div class="blogs-list" v-if="blogs.length">
      <BlogCard v-for="blog in blogs.filter(blg => blg.id !== blog.id).slice(0, 3)" :blog="blog" :key="blog.id"/>
    </div>
  </div>
</template>

<script>
import {defineComponent, onMounted, ref, computed, watch, } from "vue"
import { useStore } from "vuex"
import axios from "axios"
import {useRoute} from "vue-router/dist/vue-router";
import BlogCard from "@/components/BlogCard"

export default defineComponent({
  name: "BlogsDetails",
  components: {BlogCard},
  setup() {
    const store = useStore()
    const route = useRoute()
    const blogFetched = ref(false)
    const blog = ref({ date: "", content: { rendered: ""}, title: { rendered: ""}, _links: {author: [] }})
    const blogAuthor = ref({ name: "" })
    const createdAt = computed(() => new Date(blog.value.date).getHours())

    const fetchBlogDetails = async () => {
      try{
        store.commit('setLoading', true)
        const { data} = await axios.get(`https://techcrunch.com/wp-json/wp/v2/posts/${route.params.id}`)
        blog.value = data
        blogFetched.value = true

        const  authorResponse = await axios.get(blog.value._links.author[0].href)
        blogAuthor.value = authorResponse.data

        store.commit('setLoading', false)
        window.scrollTo(0,0);
      } catch (e) {
        blogFetched.value = false
        store.commit('setLoading', false)
      }
    }

    watch(route, async () => {
      await fetchBlogDetails()
    })

    onMounted(async () => {
      await fetchBlogDetails()
      const cachedBlogs = JSON.parse(localStorage.getItem("blogs")) || []
      if(cachedBlogs.length) store.commit("setBlogs", cachedBlogs)
      else {
        const blogsResponse = await axios.get("https://techcrunch.com/wp-json/wp/v2/posts")
        store.commit("setBlogs", blogsResponse.data)
      }
    })

    return {
      blogs: computed(() => store.getters.getBlogs),
      blog,
      blogAuthor,
      createdAt,
      blogFetched
    }
  }
})
</script>

<style scoped lang="scss">
.blog-details-container {
  width: 70vw;
  margin: 0 auto;
  font-family: 'SF Pro Display',serif;
  text-align: left;
  padding-bottom: 1em;

  .blog-content-container {
    width: 80%;
    margin: 0 auto;

    .blog-tittle {
      font-style: normal;
      font-weight: 900;
      font-size: 2em;
      color: #2C2C2C;
    }

    .content-body {
      font-style: normal;
      font-weight: 400;
      font-size: 1.2em;
      color: #6E6E6E;
      width: 100%;
      overflow-x: auto;
      padding-bottom: 5em;
    }
  }

  .blogs-list {
    display: grid;
    grid-template-columns: auto;
    grid-auto-rows: 1fr;
    gap: 5em;
  }
}

@media only screen and (max-width: 768px) {
  .blog-details-container {
    width: 90vw;
    margin: 0 auto;

    .blogs-list {
      display: grid;
      grid-template-columns: auto;
      gap: 2em;
    }
  }
}
@media only screen and (min-width: 600px) {
  .blog-details-container {
    width: 80vw;
    margin: 0 auto;

    .blog-content-container {

    }

    .blogs-list {
      display: grid;
      grid-template-columns: auto auto;
      gap: 3em;
    }
  }
}
@media only screen and (min-width: 850px) {
  .blog-details-container {
    width: 70vw;
    margin: 0 auto;

    .blogs-list {
      display: grid;
      grid-template-columns: auto auto auto;
      gap: 5em;
    }
  }
}
</style>

