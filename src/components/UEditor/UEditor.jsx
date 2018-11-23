import React, {Component} from 'react'

export default class UEditor extends Component {

  static defaultProps = {
    name: '',
    domain: '',
    initContent: '',
  }

  editorRef = null

  componentDidMount () {
    let timer = null
    if (window.UE) {
      this.initUEditor()
    } else {
      timer = setInterval(() => {
        if (!window.UEDITOR_LOAD_STATUS) {
          clearInterval(timer)
          this.loadUEditorMainFile()
        } else if (window.UEDITOR_LOAD_STATUS === 2) {
          clearInterval(timer)
          this.initUEditor()
        }
      }, 50)

    }
  }

  componentWillUnmount () {
    this.editorRef && this.editorRef.destroy()
  }

  loadUEditorMainFile = async () => {
    const {domain} = this.props
    const homeUrl = `${domain}/ueditor/`
    window.UEDITOR_HOME_URL = homeUrl
    window.UEDITOR_LOAD_STATUS = 1
    await this.loadScript(`${homeUrl}ueditor.config.js`)
    await this.loadScript(`${homeUrl}ueditor.all.min.js`)
    await this.loadScript(`${homeUrl}lang/zh-cn/zh-cn.js`)
    window.UEDITOR_LOAD_STATUS = 2
    this.initUEditor()
  }

  loadScript = (url) => {
    return new Promise((resolve, reject) => {
      const script = document.createElement('script')
      const head = document.querySelector('head')
      script.onload = function () {
        resolve()
      }
      script.onerror = function () {
        reject()
      }
      script.src = url
      head.appendChild(script)
    })
  }

  initUEditor = () => {
    const {name} = this.props
    //如果编辑器还没就绪时切换了页面，页面上的挂载点卸载了，就不进行初始化
    if (!document.getElementById(name)) return
    this.editorRef = window.UE.getEditor(name)
    this.editorRef.ready(() => {
      this.editorRef.setContent(this.props.initContent)
    })
  }

  render () {
    const {name} = this.props
    return (
      <div>
        <script id={name} type="text/plain" style={{width: '1024px', height: '500px', margin: '0 auto'}}/>
      </div>
    )
  }

}