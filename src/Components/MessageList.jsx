import { useState } from "react";

export function MessageList({messageList, addMessages}) {

  const [value, setValue] = useState('');
  
  const changeTextArea = (event) => {
    setValue(event.target.value)
  }
  const clickTextArea = (e) => {
    e.preventDefault()
    addMessages({text: value, author: 'user'})
    setValue('')
  }
  return (
    <>
      <form onSubmit={clickTextArea}>
      <textarea value={value} onChange={changeTextArea}/>
      <br/>
      <button type='submit'>Отправить</button>
      </form>
      <ul>
       {messageList.map((el, ind) => (
       <li key={ind}>
        {el.author}: {el.text}
        </li>))}
      </ul>
    </>
  )
}