<template>
  <div class="codemirror">
    <codemirror v-model="code" :options="options" @input="input" @ready="onCmReady"></codemirror>
  </div>
</template>

<script>
import {codemirror} from 'vue-codemirror'
import 'codemirror/lib/codemirror.css'
import 'codemirror/mode/javascript/javascript.js'
import 'codemirror/theme/monokai.css'

import 'codemirror/addon/selection/active-line.js'

// styleSelectedText
import 'codemirror/addon/selection/mark-selection.js'

// hints
import 'codemirror/addon/hint/show-hint'
import 'codemirror/addon/hint/show-hint.css'
import 'codemirror/addon/hint/javascript-hint'
import 'codemirror/addon/hint/anyword-hint'

// keymap
import 'codemirror/mode/clike/clike.js'
import 'codemirror/addon/edit/matchbrackets.js'
import 'codemirror/addon/comment/comment.js'
import 'codemirror/addon/dialog/dialog.js'
import 'codemirror/addon/dialog/dialog.css'
import 'codemirror/addon/search/search.js'
import 'codemirror/keymap/sublime.js'

// folds
import 'codemirror/addon/fold/foldgutter.css'
import 'codemirror/addon/fold/brace-fold.js'
import 'codemirror/addon/fold/comment-fold.js'
import 'codemirror/addon/fold/foldcode.js'
import 'codemirror/addon/fold/foldgutter.js'
import 'codemirror/addon/fold/indent-fold.js'
import 'codemirror/addon/fold/markdown-fold.js'
import 'codemirror/addon/fold/xml-fold.js'

// highlightSelectionMatches
import 'codemirror/addon/scroll/annotatescrollbar.js'
import 'codemirror/addon/search/matchesonscrollbar.js'
import 'codemirror/addon/search/searchcursor.js'
import 'codemirror/addon/search/match-highlighter.js'

export default {
  props: {
    action: {
      type: Function
    }
  },
  data () {
    return {
      code: 'return moves[Math.floor(Math.random() * moves.length)]',
      options: {
        tabSize: 4,
        styleActiveLine: false,
        lineNumbers: true,
        styleSelectedText: false,
        line: true,
        foldGutter: true,
        gutters: ['CodeMirror-linenumbers', 'CodeMirror-foldgutter'],
        highlightSelectionMatches: {showToken: /\w/, annotateScrollbar: true},
        mode: 'text/javascript',
        // hint.js options
        hintOptions: {
          completeSingle: false
        },
        matchBrackets: true,
        showCursorWhenSelecting: true,
        theme: 'monokai',
        extraKeys: {'Ctrl-Space': 'autocomplete'},
        viewPortMargin: Infinity
      }
    }
  },
  components: {
    codemirror
  },
  mounted () {
    setTimeout(() => {
      this.styleSelectedText = true
      this.options.styleActiveLine = true
    }, 1800)
  },
  methods: {
    input (data) {
      this.action(data)
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

  .codemirror{
    border : 1px solid #eee;
    height: auto;
  }

  .cm-matchhighlight {
    background-color: lightgreen
  }

  .CodeMirror-selection-highlight-scrollbar {
    background-color: green
  }
</style>
