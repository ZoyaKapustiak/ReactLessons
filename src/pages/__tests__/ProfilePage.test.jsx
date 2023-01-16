import React from "react";
import { render } from "@testing-library/react";
import '@testing-library/jest-dom'
import { ProfilePage } from "../ProfilePage";
import * as reduxHooks from 'react-redux'

jest.mock('react-redux')
const mockUseSelector = jest.spyOn(reduxHooks, 'useSelector')
describe('testing Header', () => {
  it('creating snapshot ProfilePages ', () => {
    mockUseSelector.mockReturnValue([])
    const component = render(<ProfilePage />)
    expect(component).toMatchSnapshot()
  })
})