import React, { useState } from 'react'
import './Calculator.css'
import Key from './Key'

// `${useState}`.length

const Calculator = () => {
  const [screen, setScreen] = useState('')
  const keys = ['1', '2', '3', '+', '4', '5', '6', '-', '7', '8', '9', 'x', '0', '.', '%', '=']
  const operacion = []
  const [resultado, setResultado] = useState('')

  const verifyResultado = (result) => {
    if (result.length > 9) {
      setScreen('ERROR')
    }
    setScreen(result)
  }

  const calculate = (operation) => {
    console.log(operation)
    if (operacion[1] === '+') {
      const suma = (Number(operation[0]) + Number(operation[2]))
      verifyResultado(suma)
    } else if (operation[1] === '-') {
      const resta = (Number(operation[0]) - Number(operation[2]))
      verifyResultado(resta)
    } else if (operation[1] === '*') {
      const multi = (Number(operation[0]) * Number(operation[2]))
      verifyResultado(multi)
    } else if (operation[1] === '%') {
      const modulo = (Number(operation[0]) % Number(operation[2]))
      verifyResultado(modulo)
    }
  }
  const clickHandler = (value) => {
    console.log(operacion)
    if ('+-*%='.includes(value)) {
      if (value === '+') {
        operacion.push(screen)
        console.log(operacion)
        setScreen('')
        operacion.push('+')
        console.log(operacion)
      } else if (value === '-') {
        operacion.push(screen)
        console.log(operacion)
        setScreen('')
        operacion.push('-')
        console.log(operacion)
      } else if (value === '*') {
        operacion.push(screen)
        console.log(operacion)
        setScreen('')
        operacion.push('*')
        console.log(operacion)
      } else if (value === '%') {
        operacion.push(screen)
        console.log(operacion)
        setScreen('')
        operacion.push('%')
        console.log(operacion)
      } else if (value === '=') {
        operacion.push(screen)
        calculate(operacion)
        console.log(resultado)
      }
    }
    if (`${screen}`.length < 9 && !('+-*%='.includes(value))) {
      setScreen(screen + value)
    }
  }
  return (
    <div className="calcbody">
      <div className="screen">
        {screen}
      </div>
      <button type="button" onClick={() => { setScreen('') }} className="clear">CE</button>
      <div className="button-holder">
        <div className="buttons">
          {
            keys.map((element, index) => (
              <Key key={index.id} value={element} clicker={clickHandler} />
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Calculator
