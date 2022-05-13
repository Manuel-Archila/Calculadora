import React from 'react'
import './Key.css'

const Key = ({ value, clicker, clase }) => (
  <button type="button" onClick={() => { clicker(value) }} className={`${clase}`}>
    {value}
  </button>
)

export default Key
