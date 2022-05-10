import React from 'react'
import './Key.css'

const Key = ({ value, clicker }) => (
  <button type="button" onClick={() => { clicker(value) }} className="button-box">
    {value}
  </button>
)

export default Key
