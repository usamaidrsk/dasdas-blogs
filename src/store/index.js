import { createStore } from 'vuex'
import createPersistedState from "vuex-persistedstate";

export default createStore({
  plugins: [createPersistedState],
  state: {
    blogs: [],
    loading: false
  },
  getters: {
    getBlogs(state) {
      return state.blogs
    },
    getLoading(state) {
      return state.loading
    }
  },
  mutations: {
    setBlogs(state, blogs) {
      state.blogs = blogs
      localStorage.setItem("blogs", JSON.stringify(state.blogs))
    },
    setLoading(state, status) {
      state.loading = status
    }
  }
})

