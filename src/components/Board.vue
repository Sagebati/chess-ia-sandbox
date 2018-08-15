<template>
  <div id="chessboard">
    <link rel="stylesheet" href="vue-chessboard/dist/vue-chessboard.css">
    <chessboard @onMove="onMove"></chessboard>
  </div>
</template>

<script>

import {chessboard} from 'vue-chessboard'

export default {
  name: 'Board',
  components: {
    chessboard: chessboard
  },
  methods: {
    onMove: function (data) {
      this.$emit('on-move', data)
    }
  }
}
</script>

<style scoped>

</style>
