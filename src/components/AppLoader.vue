<template>
  <div v-if="loading" class="progress-loader">
    <div class="loading-spinner">
      <img src="../assets/animations/spinner.gif" alt="app-spinner" width="70" height="70">
    </div>
  </div>
</template>

<script>
import {defineComponent, ref} from 'vue'
import { useStore } from 'vuex'

export default defineComponent({
  name: "AppLoader",
  setup() {
    const store = useStore();
    return {
      loading: ref(store.getters.getLoading)
    }
  }
})
</script>

<style scoped >
.progress-loader {
  position: absolute;
  elevation: higher;
  display: flex;
  height: 97vh;
}

.loading-spinner {
  align-self: center;
  margin: auto;
}
</style>
