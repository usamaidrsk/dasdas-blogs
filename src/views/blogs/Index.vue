<template>
  <div>
    <BlogCard />
    <AppFooter />
  </div>
</template>

<script>
import BlogCard from "@/components/BlogCard";
import AppFooter from "@/components/Footer";

export default {
  name: "BlogsIndex",
  components: {AppFooter, BlogCard}
}
</script>

<style scoped>

</style>
