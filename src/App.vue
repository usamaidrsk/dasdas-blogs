<template>
  <AppNavigation />
  <main>
    <router-view></router-view>
  </main>
</template>

<script>

import AppNavigation from "@/components/Navigation";
export default {
  name: 'App',
  components: {
    AppNavigation
  }
}
</script>
