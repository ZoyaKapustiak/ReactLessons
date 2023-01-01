/* import { useState } from "react";
import { useDispatch } from "react-redux";
import { addMessageWithReply } from "../../store/messages/actions";
import { useParams } from "react-router-dom";
// import { Message } from "./Message";
import { push } from 'firebase/database'
import { getMessageListById } from "../../services/firebase";

export function MessageContainer() {

  const [toggle, setToggle] = useState(false)
  const [text, setText] = useState('');
  const dispatch = useDispatch();
  const { chatId } = useParams()
  const text2 = '2'

  const clickTextArea = (e) => {
    e.preventDefault()
    dispatch(addMessageWithReply(chatId, {
      author: 'user',
      text
    }))
   
    push(getMessageListById(chatId), {
      author: 'user',
      text
    })
    setText('')
  }

  const clickButton = () => {
    setToggle(!toggle)
  }

  const changeText = (e) => {
    setText(e.target.value)
  }
  
  
  return (
    <>
    { <Message 
    clickTextArea={clickTextArea} 
    clickButton={clickButton} 
    changeText={changeText} 
    toggle={toggle}
    setToggle={setToggle}
    text={text}
    setText={setText}
    text2={text2}
    />
     }
    </>
  )
}
*/
