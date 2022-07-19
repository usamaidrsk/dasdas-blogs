<template>
  <AppNavigation />
  <AppLoader/>
  <main>
    <router-view></router-view>
  </main>
</template>

<script>

import AppNavigation from "@/components/AppNavigation";
import AppLoader from "@/components/AppLoader";
export default {
  name: 'App',
  components: {
    AppLoader,
    AppNavigation
  }
}
</script>
<style>
#app {
  width: 85vw;
  margin: 0 auto;
}
</style>
