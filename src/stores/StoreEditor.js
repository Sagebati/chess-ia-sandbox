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
    },
    setChessMoves (state, moves) {
      state.chessMoves = moves
    },
    setGame (state, chess) {
      state.chess = chess
    }
  },
  getters: {
    getChessMoves (state) {
      return state.chessMoves
    },
    getGame (state) {
      return state.chess
    }
  }
})
