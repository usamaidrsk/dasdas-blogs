<template>
    <nav>
      <div class="navigation-section">
        <router-link to="/">
          <img src="./assets/logo.svg" class="logo" alt="app-logo">
        </router-link>
        <div class="social-media-icons">
          <img src="./assets/icons/twitter.svg" alt="twitter-icon"> .
          <img src="./assets/icons/dribble.svg" alt="dribble-icon"> .
          <img src="./assets/icons/figma.svg" alt="figma-icon"> .
          <img src="./assets/icons/github.svg" alt="github-icon">
        </div>
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

#app {
  margin: 0;
  overflow-x: hidden;
  nav {
    width: 99vw;
    background: #FFFFFF;
    position: fixed;

    .navigation-section {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      width: 90%;
      margin: 0 auto;
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
  }

  .app-content-section {
    width: 90vw;
    margin: 0 auto;
    padding-top: 10em;
  }
}

@media only screen and (max-width: 768px) {
  #app-content-section {
    width: 98vw;
    margin: 0 auto;
  }
}
@media only screen and (min-width: 600px) {
  #app-content-section {
    width: 95vw;
    margin: 0 auto;
  }
}
@media only screen and (min-width: 768px) {
  #app-content-section {
    width: 80vw;
    margin: 0 auto;
  }
}
</style>
