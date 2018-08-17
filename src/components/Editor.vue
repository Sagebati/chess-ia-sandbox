<template>
  <codemirror v-model="code" :options="options" @input="input" @ready="onCmReady"></codemirror>
</template>

<script>
import {codemirror} from 'vue-codemirror'
import 'codemirror/lib/codemirror.css'
import 'codemirror/mode/javascript/javascript.js'
import 'codemirror/addon/hint/show-hint'
import 'codemirror/addon/hint/show-hint.css'
import 'codemirror/addon/hint/javascript-hint'
import 'codemirror/addon/hint/anyword-hint'
import store from '@/stores/StoreEditor'

export default {
  data () {
    return {
      code: store.input,
      options: {
        tabSize: 4,
        styleActiveLine: false,
        lineNumbers: true,
        styleSelectedText: false,
        line: true,
        foldGutter: true,
        matchBrackets: true,
        mode: 'text/javascript',
        extraKeys: {
          Ctrl: 'autocomplete'
        }
      }
    }
  },
  components: {
    codemirror
  },
  methods: {
    input: (data) => {
      store.input = data
    },
    onCmReady (cm) {
      cm.on('keypress', () => {
        cm.showHint()
      })
    }
  }
}
</script>

<style>
  .CodeMirror-focused .cm-matchhighlight {
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAACCAYAAABytg0kAAAAFklEQVQI12NgYGBgkKzc8x9CMDAwAAAmhwSbidEoSQAAAABJRU5ErkJggg==) repeat-x bottom;
  }

  .cm-matchhighlight {
    background-color: lightgreen
  }

  .CodeMirror-selection-highlight-scrollbar {
    background-color: green
  }
</style>
