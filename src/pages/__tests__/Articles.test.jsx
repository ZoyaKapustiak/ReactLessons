import React from "react";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom'
import userEvent from "@testing-library/user-event";
import configureStore from 'redux-mock-store';
import { Articles } from "../Articles";
import * as reduxHooks from 'react-redux'

jest.mock('react-redux')

describe('testing Articles Page', () => {
  const mockUseSelector = jest.spyOn(reduxHooks, 'useSelector')
  const mockUseDispatch = jest.spyOn(reduxHooks, 'useDispatch')
  const dispatch = jest.fn()

  it('creating snapshot Articles Pages', () => {
    mockUseSelector.mockReturnValue([])
    mockUseDispatch.mockReturnValue(dispatch)
    const component = {}
      render(
            <Articles/>     
          )
    expect(component).toMatchSnapshot()
  })
  it('testing button functioan', async () => {
    render(
      <Articles/>
    )
    const button = screen.getByRole('button')
    await userEvent.click(button)
    expect(dispatch).toHaveBeenCalled()
  })
})