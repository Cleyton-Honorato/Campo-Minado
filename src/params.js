import { Dimensions } from 'react-native'

const Params = {
    blockSize: 30,          // tamanho do bloco 
    borderSize: 5,
    fontSize: 15,
    headerRatio: 0.15,      // proporção do painel superior da tela 
    difficultlevel: 0.1,    // proporção do nivel de dificuldade 
    getColumnsAmount() {      // dimensão das columas 
        const width = Dimensions.get('window').width
        return Math.floor(width / this.blockSize) // largura dividida pelo tamanho do block (math.floor= arredonda um numero para baixo ate o mais perto de ser interiro)
    },
    getRowsAmount() {         // dimensão das linhas 
        const heigth = Dimensions.get('window').height             // altura total da tela 
        const bordeheigth = heigth * (1 - this.headerRatio)        // altura total tirando o header do title da tela

        return Math.floor(bordeheigth / this.blockSize)          // altura dividida pelo tamanho do block
    }
}

export default Params;