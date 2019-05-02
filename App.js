import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Landing from './Landing'
import Show from './Show'

export default class App extends React.Component {
  state = {
    currentScreen: 'landing'
  }

  switchScreen = (screen) => {
    this.setState({ currentScreen: screen })
  }

  renderScreen = () => {
    if (this.state.currentScreen === 'landing')
      return <Landing switchScreen={this.switchScreen} />
    return <Show switchScreen={this.switchScreen} />
  }

  render() {
    return this.renderScreen()
  }
}
