import React, { Component } from 'react'
import {
  View,
  Alert,
} from 'react-native'
import Params from './src/params'
import styles from './src/style/style'
import MineField from './src/components/MineField'
import Header from './src/components/Header'
import LevelSelection from './src/screens/LevelSelection'
import {
  createMinedBoard,
  cloneBoard,
  openField,
  hadExplosion,
  wonGame,
  showMines,
  invertFlag,
  flagsUsed
} from './src/Logica'


export default class App extends Component {
  // criação do estado da função 
  constructor(props) {
    super(props)
    this.state = this.createState()
  }
  // função 

  minesAmount = () => {
    const rows = Params.getRowsAmount()
    const cols = Params.getColumnsAmount()
    return Math.ceil(cols * rows * Params.difficultlevel)
  }

  // função 

  createState = () => {
    const rows = Params.getRowsAmount()
    const cols = Params.getColumnsAmount()
    return {
      board: createMinedBoard(cols, rows, this.minesAmount()),
      won: false,
      lost: false,
      showLevelSelect: false,
    }
  }

  // funções 

  onOpenField = (row, column) => {
    const board = cloneBoard(this.state.board)
    openField(board, row, column)
    const lost = hadExplosion(board)
    const won = wonGame(board)

    if (lost) {
      showMines(board)
      Alert.alert('Perdeeeeu trouxa!', 'Ah pvt burroooo mah! kkkkk')
    }

    if (won) {
      Alert.alert('È neh ganhou', 'Tu é um cagão')
    }

    this.setState({ board, lost, won })
  }

  onSelectField = (row, column) => {
    const board = cloneBoard(this.state.board)
    invertFlag(board, row, column)
    const won = wonGame(board)

    if (won) {
      Alert.alert('Parabéns', 'Você é um a.....')
    }

    this.setState({ board, won })
  }

  onLevelSelected = level => {
    Params.difficultlevel = level
    this.setState(this.createState())
  }

  render() {
    return (
      <View style={styles.container}>

        <LevelSelection isVisible={this.state.showLevelSelection}
          onLevelSelected={this.onLevelSelected}
          onCancel={() => this.setState({ showLevelSelection: false })} />


        <Header
          flagsLeft={this.minesAmount() - flagsUsed(this.state.board)}
          onNewGame={() => this.setState(this.createState())}
          onFlagPress={() => this.setState({ showLevelSelection: true })}
        />

        <View style={styles.board}>
          <MineField board={this.state.board}
            onOpenField={this.onOpenField}
            onSelectField={this.onSelectField}
          />
        </View>

      </View>
    )
  }
}

