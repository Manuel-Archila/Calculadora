import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import Calculator from '../Calculator.jsx'

it('No permite ingresar mas de 9 digitos ', async () => {
  render(<Calculator />)

  const element = screen.getByText('7')
  expect(element).toBeInTheDocument()

  // Se presiona 10 veces pero deveria aparecer solo 9
  await userEvent.click(element)
  await userEvent.click(element)
  await userEvent.click(element)
  await userEvent.click(element)
  await userEvent.click(element)
  await userEvent.click(element)
  await userEvent.click(element)
  await userEvent.click(element)
  await userEvent.click(element)
  await userEvent.click(element)

  expect(await screen.getByText('777777777')).toBeInTheDocument()
})
