<template>
  <div>
    <div id="board" class="floatbox">
      <chessboard :fen="currentfen" @onMove="onMove"></chessboard>
    </div>
    <div id="editor" class="floatbox">
      <editor :action="(data)=>updateInput (data)"></editor>
      <input type="button" value="Run" @click="run">
    </div>
    <div>
      <tree-view :data="formatedChessMoves"></tree-view>
    </div>
  </div>
</template>

<script>
import {chessboard} from 'vue-chessboard'
import Editor from './Editor'
import Chess from 'chess.js'

export default {
  name: 'BoardEditor',
  components: {
    chessboard: chessboard,
    editor: Editor
  },
  data () {
    return {
      editorInput: 'moves[Math.floor(Math.random()*moves.length)]',
      currentfen: ''
    }
  },
  mounted: function () {
    console.log(this.$store)
  },
  methods: {
    run () {
      // eslint-disable-next-line no-new-func
      let f = Function('moves', 'Chess', this.editorInput)
      let game = this.$store.getters.getGame
      console.log(f(this.$store.getters.getChessMoves))
      game.move(f(this.$store.getters.getChessMoves))
      this.currentfen = game.fen()
    },
    onMove (data) {
      let chess = Chess(data.fen)
      console.log(chess.moves())
      this.$store.commit('setGame', chess)
      this.$store.commit('setChessMoves', chess.moves())
    },
    updateInput (input) {
      this.editorInput = input
    }
  },
  computed: {
    formatedChessMoves () {
      return this.$store.getters.getChessMoves
    }
  }
}
</script>

<style scoped>
  @import url("vue-chessboard/dist/vue-chessboard.css");

  .floatbox{
  display: inline-block;
  width: 50%;
}
</style>
