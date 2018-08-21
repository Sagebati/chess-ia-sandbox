<template>
  <div>
    <select v-model="engineSelected" name="engines" id="engines-ist" title="engines">
      <option value="stockfish.js">Stockfish</option>
    </select>
    <select v-model="level" name="difficulty" id="level">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
    </select>
    <p>Moteur selectioné: {{engineSelected}}</p>
    <p>Difficulté selectioné: {{level}}</p>
  </div>
</template>

<script>
export default {
  name: 'EngineSelector',
  data () {
    return {
      engineSelected: 'stockfish.js', // new Worker('@/engines/stockfish.js')
      level: '',
      engine: {}
    }
  },
  computed: {
    importEngine: {
      get () {
        return new Worker('@/engines/' + this.engineSelected)
      },
      set () {
      }
    }
  }
}
</script>

<style scoped>

</style>
