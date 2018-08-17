<template>
  <div>
    <div id="board" class="floatbox">
      <chessboard @onMove="onMove"></chessboard>
    </div>
    <div id="editor" class="floatbox">
      <editor></editor>
      <input type="button" value="Run" @click="run">
    </div>
    <div>
      <tree-view :data="chess"></tree-view>
      <tree-view :data="chessMoves"></tree-view>
    </div>
  </div>
</template>

<script>
import {chessboard} from 'vue-chessboard'
import Editor from './Editor'
import Chess from 'chess.js'
import store from '@/stores/StoreEditor'

export default {
  name: 'BoardEditor',
  components: {
    chessboard: chessboard,
    editor: Editor
  },
  data: function () {
    return {
      chess: store.chess,
      chessMoves: store.chessMoves
    }
  },
  mounted: function () {
    console.log(this.$store)
  },
  methods: {
    run: () => {
      // eslint-disable-next-line no-new-func
      let f = Function('moves', 'Chess', store.input)
      f(store.chessData, Chess)
    },
    onMove: (data) => {
      let chess = Chess(data.fen)
      store.chess = chess
      store.chessData = chess.moves()
    }
  },
  computed: {
    formatedChess () {
      return JSON.parse(JSON.stringify(this.chess))
    },
    formatedChessMoves () {
      return JSON.parse(JSON.stringify(this.chessMoves))
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
