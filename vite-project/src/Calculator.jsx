import React, { useRef, useState } from 'react'
import './Calculator.css'
import Key from './Key'

// `${useState}`.length

const Calculator = () => {
  const [screen, setScreen] = useState('')
  const keys = ['1', '2', '3', '+', '4', '5', '6', '-', '7', '8', '9', 'x', '0', '.', '%', '=']
  const operacion = useRef([])

  const verifyResultado = (result) => {
    if (result.toString().length > 9) {
      setScreen('ERROR')
      return 'ERROR'
    }
    if (parseFloat(result) < 0) {
      setScreen('ERROR')
      return 'ERROR'
    }
    setScreen(result)
    return result
  }

  const calculate = (operandores) => {
    if (operandores[1] === '+') {
      const suma = (parseFloat(operandores[0]) + parseFloat(operandores[2]))
      operacion.current = []
      const es = verifyResultado(suma)
      setScreen(es)
      operacion.current.push(suma)
    } else if (operandores[1] === '-') {
      const resta = (parseFloat(operandores[0]) - parseFloat(operandores[2]))
      operacion.current = []
      const es = verifyResultado(resta)
      setScreen(es)
      operacion.current.push(resta)
    } else if (operandores[1] === '*') {
      const multiplicacion = (parseFloat(operandores[0]) * parseFloat(operandores[2]))
      operacion.current = []
      const es = verifyResultado(multiplicacion)
      setScreen(es)
      operacion.current.push(multiplicacion)
    } else if (operandores[1] === '%') {
      const modulo = (parseFloat(operandores[0]) % parseFloat(operandores[2]))
      operacion.current = []
      const es = verifyResultado(modulo)
      setScreen(es)
      operacion.current.push(modulo)
    }
  }

  const clickHandler = (value) => {
    if ('+-x%='.includes(value)) {
      if (value === '+') {
        operacion.current.push(screen)
        setScreen('')
        operacion.current.push('+')
      } else if (value === '-') {
        operacion.current.push(screen)
        setScreen('')
        operacion.current.push('-')
      } else if (value === 'x') {
        operacion.current.push(screen)
        setScreen('')
        operacion.current.push('*')
      } else if (value === '%') {
        operacion.current.push(screen)
        setScreen('')
        operacion.current.push('%')
      } else if (value === '=') {
        operacion.current.push(screen)
        calculate(operacion.current)
        operacion.current = []
      }
    }
    if (`${screen}`.length < 9 && !('+-x%='.includes(value))) {
      setScreen(screen + value)
    }
  }
  return (
    <div className="calcbody">
      <div className="screen">
        {screen}
      </div>
      <button type="button" onClick={() => { setScreen(''); operacion.current = [] }} className="clear">CE</button>
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
