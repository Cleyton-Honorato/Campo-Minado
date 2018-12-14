import { StyleSheet } from 'react-native'
import Params from '../params';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-end',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    board: {
        alignItems: 'center',
        backgroundColor: "#AAA"
    },

    //  ############     Estilo Field      ###########

    field: {                                // padrão normal 
        width: Params.blockSize,            // altura do block
        height: Params.blockSize,           // largura do block
        borderWidth: Params.borderSize,     // largura da borda padrão 
    },

    regular: {
        backgroundColor: '#999',
        borderLeftColor: '#CCC',
        borderTopColor: '#CCC',
        borderRightColor: '#333',
        borderBottomColor: '#333',
    },

    opened: {
        backgroundColor: '#999',
        borderColor: '#777',
        alignItems: 'center',
        justifyContent: 'center',
    },

    label: {
        fontWeight: 'bold',
        fontSize: Params.fontSize,
    },

    // #############       mines        ##################
    mine: {
        alignItems: 'center',
        justifyContent: 'center'
    },

    coreMine: {
        width: 14,
        height: 14,
        borderRadius: 10,
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center'
    },

    line: {
        position: 'absolute',
        height: 3,
        width: 20,
        borderRadius: 3,
        backgroundColor: 'black'
    },

    exploded: {
        backgroundColor: 'red',
        borderColor: 'red'
    },
    // #################     Flag     ####################

    container2: {
        marginTop: 2,
    },
    flagpole: {
        position: 'absolute',
        height: 14,
        width: 2,
        backgroundColor: '#222',
        marginLeft: 9,

    },
    flag: {
        position: 'absolute',
        height: 5,
        width: 6,
        backgroundColor: '#F22',
        marginLeft: 3,
    },
    base1: {
        position: 'absolute',
        height: 2,
        width: 6,
        backgroundColor: '#222',
        marginLeft: 7,
        marginTop: 10,

    },
    base2: {
        position: 'absolute',
        height: 2,
        width: 10,
        backgroundColor: '#222',
        marginLeft: 5,
        marginTop: 12,

    },

    // #############       bandeira maior      ##############
    flagpoleBigger: {
        height: 28,
        width: 4,
        marginLeft: 16,

    },
    flagBigger: {
        height: 10,
        width: 14,
        marginLeft: 3,
    },
    base1Bigger: {
        height: 4,
        width: 12,
        marginLeft: 12,
        marginTop: 20,
    },
    base2Bigger: {
        height: 4,
        width: 20,
        marginLeft: 8,
        marginTop: 24,

    }, 


})
export default styles