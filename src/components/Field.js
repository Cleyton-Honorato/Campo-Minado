import React from 'react'
import {
    View,
    Text,
    TouchableWithoutFeedback,
} from 'react-native'
import styles from '../style/style';
import Mine from './Mine'
import Flag from './Flag'

// component funcional 
export default props => {
    const { mined, opened, nearMines, exploded, flagged } = props // ecmascript = recurso destruction. Tirar de dentro de um objeto um atributo, obs: para ler

    const stylesField = [styles.field]

    if (opened) stylesField.push(styles.opened) // puxar o estilo aberto do block
    if (exploded) stylesField.push(styles.exploded)
    if (flagged) stylesField.push(styles.flagged)
    if (!opened && !exploded) stylesField.push(styles.regular) // o style regular só é aplicado se o styles.field só tiver um elemento 

    let color = null
    if (nearMines > 0) {
        if (nearMines == 1) color = '#2EFE2E'
        if (nearMines > 1 && nearMines <= 4) color = '#0000FF'
        if (nearMines > 4) color = '#DF0101'
    }
    return (

        <TouchableWithoutFeedback
            onPress={props.onOpen}
            onLongPress={props.onSelect}>

            <View style={stylesField}>
                {!mined && opened && nearMines > 0 ?  // se essas tres condições forem verdadeiras exibir o texto 
                    <Text style={[styles.label, { color: color }]}>
                        {nearMines}</Text> : false}
                {mined && opened ? <Mine /> : false}
                {flagged && !opened ? <Flag /> : false}

            </View>
        </TouchableWithoutFeedback>
    )
}

// cor se tiver mais de um 4 minas #DF0101 
// cor se tiver menos de 4 minas  #0000FF
// cor se tiver mais cinco minas  #BDBDBD
