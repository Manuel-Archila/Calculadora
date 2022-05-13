import React, { useRef, useState } from 'react'
import './Calculator.css'
import Key from './Key'

// `${useState}`.length

const Calculator = () => {
  const [screen, setScreen] = useState('')
  const keys = ['+/-', '%', 'C', 'AC', '7', '8', '9', '+', '4', '5', '6', '-', '1', '2', '3', 'x', '0', '.', '/', '=']
  const operacion = useRef([])
  const pressop = useRef(false)

  const verifyResultado = (result) => {
    if (result.toString().length > 9) {
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
      operacion.current.push(es.toString())
      setScreen(es)
    } else if (operandores[1] === '-') {
      const resta = (parseFloat(operandores[0]) - parseFloat(operandores[2]))
      operacion.current = []
      const es = verifyResultado(resta)
      operacion.current.push(es.toString())
      setScreen(es)
    } else if (operandores[1] === '/') {
      const division = (parseFloat(operandores[0]) / parseFloat(operandores[2]))
      operacion.current = []
      const es = verifyResultado(division)
      operacion.current.push(es.toString())
      setScreen(es)
    } else if (operandores[1] === '*') {
      const multiplicacion = (parseFloat(operandores[0]) * parseFloat(operandores[2]))
      operacion.current = []
      const es = verifyResultado(multiplicacion)
      operacion.current.push(es.toString())
      setScreen(es)
    } else if (operandores[1] === '%') {
      const suma = (parseFloat(operandores[0]) % parseFloat(operandores[2]))
      operacion.current = []
      const es = verifyResultado(suma)
      operacion.current.push(es.toString())
      setScreen(es)
    }
  }

  const clickHandler = (value) => {
    if (screen !== 'ERROR') {
      if ('/+-%x'.includes(value) && `${screen}`.length !== 0 && pressop.current === false) {
        operacion.current.push(screen)
        if (operacion.current.length === 3) {
          calculate(operacion.current)
        }
        if (value === '+') {
          operacion.current.push('+')
          pressop.current = true
        } else if (value === '-') {
          operacion.current.push('-')
          pressop.current = true
        } else if (value === '/') {
          operacion.current.push('/')
          pressop.current = true
        } else if (value === '%') {
          operacion.current.push('%')
          pressop.current = true
        } else if (value === 'x') {
          operacion.current.push('*')
          pressop.current = true
        }
        if (value === 'C') {
          setScreen('')
        }
      }
      if (value === '=') {
        operacion.current.push(screen)
        calculate(operacion.current)
        operacion.current = []
      }
      if (value === '+/-') {
        const numerin = parseFloat(screen)
        const newscreen = (-1) * (numerin)
        const negativin = verifyResultado(newscreen)
        setScreen(negativin.toString())
      }
      if (value === '.') {
        if (!screen.includes(value)) {
          setScreen(screen + value)
        }
      }
      if (`${screen}`.length < 9 && !('AC+/-%x=.'.includes(value))) {
        if (pressop.current === true) {
          setScreen(value)
          pressop.current = false
        } else {
          setScreen(screen + value)
        }
      }
    }
    if (value === 'AC') {
      operacion.current = []
      setScreen('')
    }
    console.log(operacion.current)
  }

  return (
    <div className="calcbody">
      <div className="screen">
        {screen}
      </div>
      <div className="button-holder">
        <div className="buttons">
          {
            keys.map((element) => {
              if (element === 'AC') {
                return (
                  <Key key={element} value={element} clicker={clickHandler} clase="clear" />
                )
              }
              return (
                <Key key={element} value={element} clicker={clickHandler} clase="button-box" />
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Calculator
