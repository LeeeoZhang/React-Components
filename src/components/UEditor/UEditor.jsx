import React, {Component} from 'react'

export default class UEditor extends Component {

  static defaultProps = {}

  state = {
    headDom:null,
  }

  headDom = document.querySelector('head')

  componentDidMount () {
    this.loadMainUEditorFile()
  }

  componentWillUnMount () {
    this.headDom = null
  }


  loadMainUEditorFile = async () => {
    await this.loadScript(require('./lib/ueditor.config'))
    await this.loadScript(require('./lib/ueditor.all.min'))
  }

  loadScript = (url) => {
    return new Promise((resolve, reject) => {
      const script = document.createElement('script')
      script.onload = function () {
        resolve()
      }
      script.onerror = function () {
        reject()
      }
      script.src = url
      this.headDom.appendChild(script)
    })
  }

  onChange = () => {
  }

  render () {
    return (
      <div className='content'>
        ##content##
      </div>
    )
  }

}