import React, {Component} from 'react'
import './App.css'
import UEditor from '@/components/UEditor'

class App extends Component {
  render () {
    return (
      <div className="App">
        <UEditor name="e1"/>
        <UEditor name="e2"/>
        <UEditor name="e3"/>
      </div>
    )
  }
}

export default App
