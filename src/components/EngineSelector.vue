<template>
  <div>
    <select name="engines" id="engines-ist" title="engines">
      <option value="stockfish.js">Stockfish</option>
    </select>
  </div>
</template>

<script>
export default {
  name: 'EngineSelector',
  data () {
    return {
      engineSelected: '' // new Worker('@/engines/stockfish.js')
    }
  }
}
</script>

<style scoped>

</style>
