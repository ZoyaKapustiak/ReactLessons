import { useEffect } from "react"
import { useParams, Navigate } from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux"
import { Message } from "../Components/Message/Message"
import { MessageList } from "../Components/MessageList/MessageList"
import { ChatsList } from "../Components/ChatsList/ChatsList"
import styles from './Pages.module.css'
import { selectMessage } from "../store/messages/selectors"
import { addMessageBot } from "../store/messages/actions"


export function ChatsPage () {
  const {chatId} = useParams()
  const messages = useSelector(selectMessage)
  const dispatch = useDispatch()

  useEffect(() => {
    if(chatId && messages[chatId]?.length > 0 && messages[chatId][messages[chatId].length - 1].author === 'user') {
      const timeOut = setTimeout(() => {
        dispatch(addMessageBot(chatId, [
           'I am BOT'
        ]))
      }, 1500)
      return() => {clearTimeout(timeOut)}
    }
  }, [chatId, messages])


  if(chatId && !messages[chatId]) {
    return <Navigate to="/chats" replace />
  }

  return (
    <>
      <h1>Welcome to chat!</h1>
      <ChatsList />
      <div className={styles.messageStyle}>
        <div>
      <Message />
      </div>
      <div className="styles.listStyle">
      <MessageList messages={chatId ? messages[chatId] : []} />
      </div>
      </div>
    </>
  )
}