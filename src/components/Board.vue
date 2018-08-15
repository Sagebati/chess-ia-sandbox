<template>
  <div id="chessboard">
    <link rel="stylesheet" href="vue-chessboard/dist/vue-chessboard.css">
    <chessboard></chessboard>
  </div>
</template>

<script>

import {chessboard} from 'vue-chessboard'

export default {
  name: 'Board',
  components: {
    chessboard: chessboard
  }
}
</script>

<style scoped>

</style>
