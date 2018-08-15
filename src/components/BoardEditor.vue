<template>
  <div>
    <div id="board">
      <chessboard></chessboard>
    </div>
    <div id="editor">
      <editor></editor>
      <input type="button" value="Run">
    </div>
  </div>
</template>

<script>
import ChessBoard from './Board'
import Editor from './Editor'

export default {
  name: 'BoardEditor',
  components: {
    chessboard: ChessBoard,
    editor: Editor
  },
  mounted: () => {
  }
}
</script>

<style scoped>

</style>
