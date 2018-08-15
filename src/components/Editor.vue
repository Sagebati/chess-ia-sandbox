<template>
  <codemirror v-model="code" :options="options"></codemirror>
</template>

<script>
import {codemirror} from 'vue-codemirror'
import 'codemirror/lib/codemirror.css'
import 'codemirror/mode/javascript/javascript.js'

export default {
  data () {
    return {
      code:
          `import someResource from 'codemirror/some-resource'
export default {
  data () {
    // 这是一个包含、代码提示、折叠、选中、sublime模式...的编辑器
    // 按下Ctrl键可以体验代码提示
    // 可以尝试sublime下的快捷键操作
    return {
      exampleCode: 'const a = 10',
      cmOption: {
        tabSize: 4,
        styleActiveLine: true,
        lineNumbers: true,
        line: true,
        mode: 'text/javascript',
        lineWrapping: true,
        theme: 'default'
      }
    }
  },
  components: examples
}`,
      options: {
        tabSize: 4,
        styleActiveLine: false,
        lineNumbers: true,
        styleSelectedText: false,
        line: true,
        foldGutter: true,
        matchBrackets: true,
        mode: 'text/javascript'

      }
    }
  },
  components: {
    codemirror
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
