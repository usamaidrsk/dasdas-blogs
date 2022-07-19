<template>
  <div class="blog-card">
    <div class="blog-image-container">
      <img :src="blog.jetpack_featured_media_url" :alt="blog.title.rendered">
    </div>
    <div class="blog-content-section">
      <p>Author 2hours ago</p>
      <h1 :class="[fullWidth ? 'large-text' : '', 'blog-tittle']">{{blog.title.rendered}}</h1>
      <div class="content-body" v-html="blog.excerpt.rendered" />
      <div style="display: flex; flex-direction: row; justify-content: space-between">
        <p>3min read</p>
        <button style="display: flex; flex-direction: row; justify-content: center; background: #F5F5F5">
          Read Full
          <img src="../assets/icons/arrow.svg" alt="arrow-right">
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import {defineComponent} from "vue";

export default defineComponent({
  name: "BlogCard",
  props: {
    blog: {
      required: true,
      default: () => ({
        jetpack_featured_media_url: "",
        title: { rendered: ""},
        excerpt: { rendered: ""}
      }),
      type: Object
    },
    fullWidth: {
      required: false,
      default: false,
      type: Boolean
    },
  },
  setup() {
    return {

    }
  }
})
</script>

<style scoped lang="scss">
.blog-card {
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  padding: .4em;
  /*width: 1144px;*/
  min-height: 15vh;
  background: #FFFFFF;
  border: 1px solid #F5F5F5;
  border-radius: 5px;

  .blog-image-container {
    box-sizing: border-box;
    //display: flex;
    //flex-direction: row;
    padding: 8px;
    width: 100%;
    //height: 296px;
    background: #FFFFFF;
    border: 1px solid #F5F5F5;
    border-radius: 5px;

    img {
      width: inherit;
      height: inherit;
    }
  }

  .blog-content-section {
    box-sizing: border-box;
    //display: flex;
    //flex-direction: row;
    padding: 8px;
    width: 100%;
    //height: 296px;
    background: #FFFFFF;
    border: 1px solid #F5F5F5;
    border-radius: 5px;
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
      display: flex;
      align-items: center;
      color: #6E6E6E;
    }

    .large-text {
      font-weight: 900;
      font-size: 1.6em;
    }
  }
}
</style>
