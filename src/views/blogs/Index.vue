<template>
  <div class="blogs-index">
    <div class="blogs-list" v-if="blogs.length" ref="blogsScrollComponent">
      <BlogCard
          v-for="(blog, index) in blogs"
          :class="index === 0 ? 'top-blog' : ''"
          :full-width="index === 0"
          :blog="blog"
          :key="blog.id"
      />
<!--      <infinite-loading @infinite="infiniteHandler"></infinite-loading>-->
    </div>
    <footer>
      <h1>Join our Team of Writers</h1>
      <div>
        <p>On dasdas, writers earn a living doing what they love.</p>
        <p>Getting started is easy. Just pay a one time $25 fee and everything is ready to go.</p>
      </div>
      <button type="submit" @click="makePayment()">JOIN US</button>
    </footer>
  </div>
</template>

<script>
import BlogCard from "@/components/BlogCard";
import {defineComponent, onMounted, onUnmounted, computed, ref} from "vue"
import { useStore } from "vuex"
import axios from "axios"
import {useFlutterwave} from "flutterwave-vue3"

export default defineComponent({
  name: "BlogsIndex",
  components: {BlogCard},
  setup() {
    const store = useStore()
    const blogsScrollComponent = ref(null)

    const loadMoreBlogs = async () => {
      const {data} = await axios.get("https://techcrunch.com/wp-json/wp/v2/posts")
        if (data.length) {
          // this is to remove duplicate blogs
          const blogs = [...new Map([...store.getters.getBlogs, ...data].map(blog => [blog.id, blog])).values()]
          store.commit("setBlogs", blogs)
        }
    }

    const handleScroll = () => {
      let element = blogsScrollComponent.value
      if (element.getBoundingClientRect().bottom < window.innerHeight) {
        setTimeout(() => loadMoreBlogs(), 3000)
      }
    }

    onMounted(async () => {
      try{
        store.commit('setLoading', true)
        const { data} = await axios.get("https://techcrunch.com/wp-json/wp/v2/posts")
        store.commit("setBlogs", data)
        store.commit('setLoading', false)
      } catch (e) {
        store.commit('setLoading', false)
      }
      window.addEventListener("scroll", handleScroll)
    })

    onUnmounted(() => {
      window.removeEventListener("scroll", handleScroll)
    })

    return {
      blogs: computed(() => store.getters.getBlogs),
      blogsScrollComponent,
      makePayment() {
        useFlutterwave({
          public_key: process.env.FLUTTER_WAVE_PUBLIC_KEY || "FLWPUBK_TEST-784bbb7dd2fb0d330aa489020a48a337-X",
          tx_ref: Date.now(),
          amount: 25,
          currency: 'USD',
          redirect_url: "https://dasdas-blogs.netlify.app",
          payment_options: 'card, banktransfer, ussd',
          customer: {
            email: 'user@gmail.com',
            phonenumber: '08102909304',
            name: 'yemi desola'
          },
          callback: (data) => {
            console.log(data)
          },
          onclose: () => {

          },
          customizations: {
            title: 'dsasdas',
            description: 'Payment to join us',
            logo: 'https://dasdas-blogs.netlify.app/img/logo.a6b8f962.svg'
          }
        })
      }
    }
  }
})
</script>

<style scoped lang="scss">
.blogs-index {
  display: flex;
  flex-direction: column;
  min-height: 60vh;

  .blogs-list {
    display: grid;
    grid-template-columns: auto;
    gap: 5em;
  }

  footer {
    margin-top: auto;
    font-family: 'SF Pro Display',serif;
    display: flex;
    flex-direction: column;
    margin-bottom: 5em;

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
      cursor: grab;
    }
  }
}
@media only screen and (max-width: 768px) {
  .blogs-list {
    display: grid;
    grid-template-columns: auto;
    gap: 2em;
  }
}
@media only screen and (min-width: 600px) {
  .blogs-list {
    display: grid;
    grid-template-columns: auto auto;
    gap: 3em;

    .top-blog {
      grid-column: 1 / span 2;
    }
  }
}
@media only screen and (min-width: 850px) {
  .blogs-list {
    display: grid;
    grid-template-columns: auto auto auto;
    gap: 5em;

    .top-blog {
      grid-column: 1 / span 3;
    }
  }
}
</style>
