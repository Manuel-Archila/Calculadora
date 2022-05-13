import React from 'react'
import PropTypes from 'prop-types'
import './Key.css'

const Key = ({ value, clicker, clase }) => (
  <button type="button" onClick={() => { clicker(value) }} className={`${clase}`}>
    {value}
  </button>
)

Key.propTypes = {
  clicker: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  clase: PropTypes.string.isRequired,
}

export default Key
