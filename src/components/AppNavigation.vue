<template>
  <nav>
    <img src="../assets/logo.svg" class="logo" alt="app-logo">
    <div class="social-media-icons">
      <img src="../assets/icons/twitter.svg" alt="twitter-icon"> .
      <img src="../assets/icons/dribble.svg" alt="dribble-icon"> .
      <img src="../assets/icons/figma.svg" alt="figma-icon"> .
      <img src="../assets/icons/github.svg" alt="github-icon">
    </div>
  </nav>
</template>

<script>
export default {
  name: "AppNavigation"
}
</script>

<style scoped>
nav {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  width: available;
}
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
</style>
