<template>
  <div>
    <div id="board" class="floatbox">
      <chessboard @on-move='onMove'></chessboard>
    </div>
    <div id="editor" class="floatbox">
      <editor></editor>
      <input type="button" value="Run" @click="run">
    </div>
  </div>
</template>

<script>
import ChessBoard from './Board'
import Editor from './Editor'
import Chess from 'chess.js'

export default {
  name: 'BoardEditor',
  components: {
    chessboard: ChessBoard,
    editor: Editor
  },
  mounted: () => {
  },
  methods: {
    run: () => {
      console.log('run')
    },
    onMove: (data) => {
      console.log(data)
      let chess = Chess(data.fen)
      console.log(chess.moves())
    }
  }

}
</script>

<style scoped>
.floatbox{
  display: inline-block;
  width: 50%;
}
</style>
