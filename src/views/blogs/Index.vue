<template>
  <div>
    <BlogCard />
    <AppFooter />
  </div>
</template>

<script>
import BlogCard from "@/components/BlogCard";
import AppFooter from "@/components/AppFooter";
import { defineComponent } from "vue"

export default defineComponent({
  name: "BlogsIndex",
  components: {AppFooter, BlogCard},
  setup() {

  }
})
</script>

<style scoped>

</style>
