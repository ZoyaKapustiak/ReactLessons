import React from "react";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom'
import userEvent from "@testing-library/user-event";
import { Button } from "./Button";

describe('testing Button', () => {
  it('render component Button', () => {
    render(<Button>Change name</Button>)
  })

  it('render with snapshot', () => {
    const {asFragment} = render(<Button>Change name</Button>)
    expect(asFragment()).toMatchSnapshot()
  })

  it('render component with text name button', () => {
    render(<Button>Change name</Button>)
    expect(screen.getByText(/Change name/)).toBeInTheDocument()
  })

  it('render multiply component', () => {
    render(
      <>
      <Button>Edit</Button>
      <Button>Delete</Button>
      </>
    )
    expect(screen.queryAllByRole('button').length).toBe(2)
  })

  it('buttom is disable', () => {
    render(<Button disabled>Delete</Button>)
    expect(screen.getByText(/Delete/)).toBeDisabled()
  })

  it('button have style color black', () => {
    render(<Button>Delete</Button>)
    expect(screen.getByText(/Delete/)).toHaveStyle({color: 'black'})
  })
  
  it('button click userEvent', async () => {
    const mockHandler = jest.fn()

    render(<Button cliсk={mockHandler}>Delete</Button>)
    await userEvent.click(screen.getByText(/Delete/))
    expect(mockHandler).toHaveBeenCalledTimes(0)
  })

  it('test example', async () => {
    const onChange = jest.fn()
    render(<input type="checkBox" onChange={onChange}/>)

    const checkBox = screen.getByRole('checkbox')
    await userEvent.dblClick(checkBox)
    expect(onChange).toHaveBeenCalledTimes(2)
    expect(checkBox).not.toBeChecked()
  })
})