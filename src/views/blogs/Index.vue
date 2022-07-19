<template>
  <div class="blogs-index">
    <div class="blogs-list">
      <BlogCard v-for="(blog, index) in blogs" :full-width="index === 0" :blog="blog" :key="blog.slug"/>
      <infinite-loading @infinite="infiniteHandler"></infinite-loading>
    </div>
    <footer>
      <h1>Join our Team of Writers</h1>
      <div>
        <p>On dasdas, writers earn a living doing what they love.</p>
        <p>Getting started is easy. Just pay a one time $25 fee and everything is ready to go.</p>
      </div>
      <button type="button">JOIN US</button>
    </footer>
  </div>
</template>

<script>
import BlogCard from "@/components/BlogCard";
import {defineComponent, onMounted, ref} from "vue"
import { useStore } from "vuex"
import axios from "axios"
import InfiniteLoading from 'vue-infinite-loading';

export default defineComponent({
  name: "BlogsIndex",
  components: {BlogCard, InfiniteLoading},
  setup() {
    const store = useStore()
    onMounted(async () => {
      try{
        store.commit('setLoading', true)
        const { data} = await axios.get("https://techcrunch.com/wp-json/wp/v2/posts")
        console.log(data)
        store.commit("setBlogs", data)
        store.commit('setLoading', false)
      } catch (e) {
        store.commit('setLoading', false)
      }
    })
    return {
      blogs: ref(store.getters.getBlogs),
      infiniteHandler($state) {
        axios.get("https://techcrunch.com/wp-json/wp/v2/posts", ).then(({ data }) => {
          if (data.length) {
            store.commit("setBlogs", [...this.blogs, ...data])
            $state.loaded()
          } else {
            $state.complete()
          }
        })
      },
    }
  }
})
</script>

<style scoped lang="scss">
.blogs-index {
  display: flex;
  flex-direction: column;
  min-height: 60vh;

  .grid-blog-listing {

  }

  footer {
    margin-top: auto;
    font-family: 'SF Pro Display',serif;
    display: flex;
    flex-direction: column;

    h1 {
      font-style: normal;
      font-weight: 500;
      font-size: 2em;
      text-align: center;
      color: #2C2C2C;
    }

    p {
      font-style: normal;
      font-weight: 400;
      font-size: 1.4em;
      text-align: center;
      color: #6E6E6E;
    }

    button {
      font-style: normal;
      font-weight: 500;
      font-size: 1em;
      text-align: center;
      color: #FFFFFF;
      padding: .8em 2em;
      width: 10em;
      background: #000000;
      align-self: center;
    }
  }
}
</style>
