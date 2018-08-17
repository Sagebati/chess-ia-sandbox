import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    input: `console.log('run')`,
    chessMoves: {},
    chess: {}
  },
  mutations: {
    increment (state) {
      state.count++
    }
  }
})
