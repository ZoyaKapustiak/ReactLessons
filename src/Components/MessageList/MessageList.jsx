import { useState } from "react";
import styles from './MessageList.module.css'

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
      <textarea value={value} onChange={changeTextArea} className={styles.textarea}/>
      <br/>
      <button type='submit' className={styles.button}>Отправить</button>
      </form>
      <ul className={styles.ulList}>
       {messageList.map((el, ind) => (
       <li key={ind}>
         {el.text}
        </li>))}
      </ul>
    </>
  )
}