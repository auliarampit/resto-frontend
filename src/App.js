import React, { Component } from 'react'
import {Provider} from 'react-redux'
import store from './publics/Store'
import { Route,BrowserRouter as Router } from 'react-router-dom'

import Modal from './components/modal'
import Home from '../src/screens/Home'

class App extends Component {
  constructor() {
    super()
    this.state = {
      Modal: false
    }
  }

  showModal() {
    this.setState({ Modal: true })
  }
  hideModal() {
    this.setState({ Modal: false })
  }
  render() {
    return (
      <Provider store={store}>
        <Router>
        <Route exact path={'/'} render={()=> <Home show={this.state.showModal} />} />
        <Route exact path={'/'} render={()=> <Modal show={this.state.showModal} handleClose={this.hideModal} {...this.props} /> } />
        </Router>
      </Provider>
    )
  }
}

export default App