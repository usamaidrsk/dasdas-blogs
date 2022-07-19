<template>
  <router-link :to="`/blogs/${blog.id}`" style="text-decoration: none; color: unset">
    <div class="blog-card" :style="{ flexDirection: fullWidth ? 'row' : 'column'}">
      <div class="blog-image-container">
        <img :src="blog.jetpack_featured_media_url" :alt="blog.title.rendered">
      </div>
      <div class="blog-content-section">
        <p style="">
          <strong>{{ blogAuthor.name }}</strong> · {{createdAt}} hours ago
        </p>
        <h1 :class="[fullWidth ? 'large-text' : '', 'blog-tittle']">{{blog.title.rendered}}</h1>
        <div class="content-body" v-html="blog.excerpt.rendered" />
        <div style="display: flex; flex-direction: row; justify-content: space-between">
          <p>3min read</p>
          <router-link :to="`/blogs/${blog.id}`" style="text-decoration: none">
            <button >
              Read Full
              <img src="../assets/icons/arrow.svg" alt="arrow-right">
            </button>
          </router-link>
        </div>
      </div>
    </div>
  </router-link>
</template>

<script>
import {computed, defineComponent, onMounted, ref} from "vue";
import axios from "axios";

export default defineComponent({
  name: "BlogCard",
  props: {
    blog: {
      required: true,
      default: () => ({
        id: "",
        jetpack_featured_media_url: "",
        title: { rendered: ""},
        excerpt: { rendered: ""},
        date: "",
        _links: {
          author: []
        }
      }),
      type: Object
    },
    fullWidth: {
      required: false,
      default: false,
      type: Boolean
    },
  },
  setup(props) {
    const blogAuthor = ref({ name: "" })
    const createdAt = computed(() => new Date(props.blog.date).getHours())

    onMounted(async () => {
      const { data } = await axios.get(props.blog._links.author[0].href)
      blogAuthor.value = data
    })

    return {
      blogAuthor,
      createdAt
    }
  }
})
</script>

<style scoped lang="scss">
.blog-card {
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  height: available;
  background: #FFFFFF;
  border: 1px solid #F5F5F5;
  border-radius: 5px;

  .blog-image-container {
    box-sizing: border-box;
    padding: .6em;
    width: 100%;
    background: #FFFFFF;
    height: 31vh;

    img {
      width: inherit;
      height: 29vh;
    }
  }

  .blog-content-section {
    box-sizing: border-box;
    width: 100%;
    padding: 0 .6em;
    background: #FFFFFF;
    font-family: 'SF Pro Display',serif;
    text-align: left;

    .blog-tittle {
      font-style: normal;
      font-weight: 700;
      font-size: 1.4em;
      color: #2C2C2C;
    }

    .content-body {
      font-style: normal;
      font-weight: 400;
      font-size: 1.2em;
      color: #6E6E6E;
      overflow: hidden;
    }

    button {
      font-style: normal;
      font-size: .9em;
      display: flex;
      flex-direction: row;
      align-items: center;
      color:  #1473E6;;
      background: #FFFFFF;
      border: 0;
    }

    .large-text {
      font-weight: 900;
      font-size: 1.6em;
    }
  }
}
@media only screen and (max-width: 768px) {
  .blog-card {
    flex-direction: column !important;
  }
}
</style>
