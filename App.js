import React, { Component } from 'react'
import { Text, View } from 'react-native'
import Params from './src/params'
import styles from './src/style/style'
import Field from './src/components/Field'
import Flag from './src/components/Flag'
export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Bem vindo ao campo minado C.H</Text>
        <Text style={styles.instructions}>Tamanho da grade: {Params.getRowAmout()}x{Params.getColumnsAmout()} </Text>
        <Field />
        <Field opened />
        <Field opened nearMines={1} />
        <Field opened nearMines={5} />
        <Field mined />
        <Field mined opened />
        <Field mined opened exploded />
        <Field flagged />
        <Field opened flagged />
      </View>
    )
  }
}

