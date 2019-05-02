import React, { Component } from 'react'
import { Text, View, Image, Button } from 'react-native'
import styles from './style/style'

var img = require('./img/logo.png')

export default class Landing extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image source={img} style={styles.imageStyle} />
        <Text>Hello I am here</Text>
        {console.log('Landing is working')}
        <Button title="Click to go to next view" onPress={() => this.props.switchScreen('show')} />
      </View>
    )
  }
}
