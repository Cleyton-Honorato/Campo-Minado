import React from 'react'
import {
    View
} from 'react-native'
import styles from '../style/style'

export default props => {
    return (
        // array vai ter uma condiçao, que passa a bandeira maior, simplesmente para o header do jogo
        <View style={styles.container2}>
            <View style={[styles.flagpole, props.bigger ? styles.flagpoleBigger: null]} />
            <View style={[styles.flag, props.bigger ? styles.flagBigger: null]} />
            <View style={[styles.base1, props.bigger ? styles.base1Bigger: null]} />
            <View style={[styles.base2, props.bigger ? styles.base2Bigger: null]} />
        </View>
    )
}

