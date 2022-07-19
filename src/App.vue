<template>
  <nav>
    <img src="./assets/logo.svg" class="logo" alt="app-logo">
    <div class="social-media-icons">
      <img src="./assets/icons/twitter.svg" alt="twitter-icon"> .
      <img src="./assets/icons/dribble.svg" alt="dribble-icon"> .
      <img src="./assets/icons/figma.svg" alt="figma-icon"> .
      <img src="./assets/icons/github.svg" alt="github-icon">
    </div>
  </nav>
  <div class="app-content-section">
    <router-view></router-view>
    <AppLoader/>
  </div>
</template>

<script>

import AppLoader from "@/components/AppLoader";
export default {
  name: 'App',
  components: {
    AppLoader
  }
}
</script>
<style lang="scss">
@import "./assets/styles/_variables.scss";
body {
  width: 90vw;
  margin: 0 auto;

  nav {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    width: 90vw;
    padding: 1em 0;
    background: #FFFFFF;

    .social-media-icons {
      display: flex;
      flex-direction: row;
      justify-content: space-around;
    }

    .social-media-icons img {
      width: 2em;
      height: 2em;
      margin: 0 .5em;
    }
  }

  .app-content-section {
    width: inherit;
    padding-top: 10em;
  }
}
</style>
