import React, { Component } from 'react'
import { Image, Button, View } from 'react-native'
import styles from './style/style'
import imgShow from './img/running.jpg'

export default class Show extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image source={imgShow} style={styles.imageStyle} />
        <Button title="Back to Landing" onPress={() => this.props.switchScreen('landing')} />
      </View>
    )
  }
}
