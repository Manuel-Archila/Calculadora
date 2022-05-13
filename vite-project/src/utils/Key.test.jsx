import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Key from '../Key.jsx'

it('renders the text into button', () => {
  render(<Key value="AC" clicker={() => {}} clase="clear" />)
  const element = screen.getByText('AC')
  expect(element).toBeInTheDocument()
})
