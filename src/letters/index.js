import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import BoxLetters from './box'
import ButtonClose from './button-close'
import InputGame from './input'

import './Letters.css'

let testBoardOne = require('../utilities/test-board-1.json')
let testBoardTwo = require('../utilities/test-board-2.json')
let dictionary = require('../utilities/dictionary.json')

export default class Letters extends Component {
  constructor(props){
    super(props)
    this.state = {
      list: [],
      listTwo: [], 
      value: '',
      show: false,
      showTwo: false,
      activeId: [],
      activeIdTwo: []
    }
  }

  findDictionary(word) {
    let words = word.toLowerCase()
    dictionary.words.forEach((word) => {
      if(word === words) {
        this.state.activeId.map((data) => {
          return this.changeColor(data, '#68b131')
        })

        this.state.activeIdTwo.map((data) => {
          return this.changeColorTwo(data, '#68b131')
        })
      }
    })
  }

  onChangeValue(event){
    this.setState({ value: event.target.value });
  };

  addLetter(tag) {
    let data = ReactDOM.findDOMNode(this).getElementsByClassName(tag)
    let letter = data[0].children[0].innerText

    this.setState(state => {
      const list = state.list.concat(letter)
      const activeId = state.activeId.concat(tag)
      return {
        list,
        show: true,
        activeId
      };
    });

    let newWord = this.state.list
    
    if((newWord.length > 1) && (newWord.length <= 2)) {
      setTimeout(() => {
        this.findDictionary(this.state.list.join("").toString())
      }, 3000)
    } if(newWord.length >= 3) {
      setTimeout(() => {
        this.findDictionary(this.state.list.join("").toString())
      }, 3000)
    }
  };

  onClearArray(e) {
    e.map((data) => {
      let x = ReactDOM.findDOMNode(this).getElementsByClassName(data)
      return ((x[0].style.background = 'linear-gradient(to bottom, #face5a, #F87D27)') && (x[0].style.borderColor = '#e13f50'))
    })
    
    this.setState({ list: [], show: false, activeId: [] })
  };

  addLetterTwo(e) {
    let data = ReactDOM.findDOMNode(this).getElementsByClassName(e)
    let letter = data[0].children[0].innerText

    this.setState(state => {
      const listTwo = state.listTwo.concat(letter)
      const activeIdTwo = state.activeIdTwo.concat(e)

      return {
        listTwo,
        value: e,
        showTwo: true,
        activeIdTwo
      };
    });

    let newWord = this.state.listTwo

    if((newWord.length > 1) && (newWord.length <= 2)) {
      setTimeout(() => {
        this.findDictionary(this.state.listTwo.join("").toString())
      }, 3000)
    } if(newWord.length >= 3) {
      setTimeout(() => {
        this.findDictionary(this.state.listTwo.join("").toString())
      }, 3000)
    }
    
  };

  onClearArrayTwo(arrState) {
    arrState.map((data) => {
      let x = ReactDOM.findDOMNode(this).getElementsByClassName(data)
      return ((x[0].style.background = 'linear-gradient(to bottom, #face5a, #F87D27)') && (x[0].style.borderColor = '#e13f50'))
    })
  
    this.setState({ listTwo: [], showTwo: false, activeIdTwo: [] });
  };

  changeColor(e, color) {
    let x = ReactDOM.findDOMNode(this).getElementsByClassName(e)
    let input = ReactDOM.findDOMNode(this).getElementsByClassName('input-game')

    x[0].style.background = color
    x[0].style.borderColor = color

    input[0].style.color = color
  }

  changeColorTwo(e, color) {
    let x = ReactDOM.findDOMNode(this).getElementsByClassName(e)
    let input = ReactDOM.findDOMNode(this).getElementsByClassName('input-game')
    
    x[0].style.background = color
    x[0].style.borderColor = color

    input[1].style.color = color
  }

  render() {
    return (
      <div className='container-box'>
        <h1>letters game!</h1>
        <h3>Find words that are in our virtual dictionary!</h3>
        <div className='container'>
          <div className='container-letter'>
            
            {testBoardOne.board.map((letter, i) =>
              <BoxLetters key={i}
                          letter={letter}
                          className={`${i}p box-letter`}
                          id={`${i}p`}
                          click={() => this.addLetter(`${i}p`)}
                          onmouseup={() => this.changeColor(`${i}p`, '#e13f50')}
              />

            )}
          </div>
          <div className='container-input-close'>
            {this.state.show && <ButtonClose  onClick={() => this.onClearArray(this.state.activeId)}
                                              value='clear word'
                                />
            }
            <label>
              <InputGame value={this.state.list.join("")}
                          onChange={this.onChangeValue}
              />
            </label>
          </div>
        </div>
        <div className='container separation'>
          <div className='container-letter'>
            {testBoardTwo.board.map((letter, i) =>
              <BoxLetters key={i}
                          letter={letter}
                          className={`${i+letter}p box-letter`}
                          id={`${i+letter}p`}
                          click={() => this.addLetterTwo(`${i+letter}p`)}
                          onmouseup={() => this.changeColorTwo(`${i+letter}p`, '#e13f50')}
              />

            )}
          </div>
          <div className='container-input-close'>
            {this.state.showTwo && <ButtonClose onClick={() => this.onClearArrayTwo(this.state.activeIdTwo)}
                                                value='clear word'
                                />
            }
            <label>
              <InputGame  value={this.state.listTwo.join("")}
                          onChange={this.onChangeValue}
              />
            </label>
          </div>
        </div>
      </div>
    )
  }
}