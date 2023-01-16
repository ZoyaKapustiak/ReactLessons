import React from "react";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom'

import { ChatsList } from "./ChatsList";

import * as reduxHooks from 'react-redux'
import * as actions from ''

jest.mock('react-redux')
const mockUseDispatch = jest.spyOn(reduxHooks, 'useDispatch')
describe('testing ChatList', () => {
  it('should create ChatList', () => {
    mockUseDispatch.mockReturnValue(jest.fn)
    const component = render(<ChatsList messageDB={{}} chats={[]} />)
    expect(component).toMatchSnapshot()
  })

  it('should dispatch action', () => {
    const dispatch = jest.fn;
    mockUseDispatch.mockReturnValue(dispatch)
    const messagesRef = {}
    render(
      <ChatsList messageDB={{}} chats={[]} />
      )
    const buttons = screen.getByRole('button')
    
  })

})