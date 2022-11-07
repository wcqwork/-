import { onBeforeUnmount, ref, shallowRef, onMounted } from 'vue'

export default function useEditor() {
    // 编辑器实例，必须用 shallowRef
    const editorRef = shallowRef()

    // 内容 HTML
    const valueHtml = ref('<p></p>')

    const toolbarConfig = {
        toolbarKeys: [
            'headerSelect',
            'blockquote',
            '|',
            'bold',
            'underline',
            'italic',
            {
                'key': 'group-more-style',
                'title': '更多',
                'iconSvg': '<svg viewBox=\'0 0 1024 1024\'><path d=\'M204.8 505.6m-76.8 0a76.8 76.8 0 1 0 153.6 0 76.8 76.8 0 1 0-153.6 0Z\'></path><path d=\'M505.6 505.6m-76.8 0a76.8 76.8 0 1 0 153.6 0 76.8 76.8 0 1 0-153.6 0Z\'></path><path d=\'M806.4 505.6m-76.8 0a76.8 76.8 0 1 0 153.6 0 76.8 76.8 0 1 0-153.6 0Z\'></path></svg>',
                'menuKeys': [
                    'through',
                    'code',
                    'sup',
                    'sub',
                    'clearStyle'
                ]
            },
            'color',
            'bgColor',
            '|',
            'fontSize',
            'fontFamily',
            'lineHeight',
            '|',
            'bulletedList',
            'numberedList',
            'todo',
            {
                'key': 'group-justify',
                'title': '对齐',
                'iconSvg': '<svg viewBox=\'0 0 1024 1024\'><path d=\'M768 793.6v102.4H51.2v-102.4h716.8z m204.8-230.4v102.4H51.2v-102.4h921.6z m-204.8-230.4v102.4H51.2v-102.4h716.8zM972.8 102.4v102.4H51.2V102.4h921.6z\'></path></svg>',
                'menuKeys': [
                    'justifyLeft',
                    'justifyRight',
                    'justifyCenter',
                    'justifyJustify'
                ]
            },
            {
                'key': 'group-indent',
                'title': '缩进',
                'iconSvg': '<svg viewBox=\'0 0 1024 1024\'><path d=\'M0 64h1024v128H0z m384 192h640v128H384z m0 192h640v128H384z m0 192h640v128H384zM0 832h1024v128H0z m0-128V320l256 192z\'></path></svg>',
                'menuKeys': [
                    'indent',
                    'delIndent'
                ]
            },
            '|',
            'insertTable',
            'codeBlock',
            'divider',
            '|',
            'undo',
            'redo',
        ]
    }
    const editorConfig = { placeholder: '请输入内容...' }

    // 组件销毁时，也及时销毁编辑器
    onBeforeUnmount(() => {
        const editor = editorRef.value
        if (editor == null) return
        editor.destroy()
    })

    const handleCreated = (editor) => {
        editorRef.value = editor; // 记录 editor 实例，重要！
    }

    return {
        editorRef,
        valueHtml,
        mode: 'simple', // 或 'simple'
        toolbarConfig,
        editorConfig,
        handleCreated
    };
}