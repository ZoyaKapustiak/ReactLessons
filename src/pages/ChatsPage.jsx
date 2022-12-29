import { useParams, Navigate } from 'react-router-dom'
import { useSelector } from "react-redux"
import { MessageContainer } from "../Components/Message/MessageContainer"
import { MessageList } from "../Components/MessageList/MessageList"
import { ChatsList } from "../Components/ChatsList/ChatsList"
import styles from './Pages.module.css'
import { selectMessage } from "../store/messages/selectors"



export function ChatsPage () {
  const {chatId} = useParams()
  const messages = useSelector(selectMessage)

  if(chatId && !messages[chatId]) {
    return <Navigate to="/chats" replace />
  }

  return (
    <>
      <h1>Welcome to chat!</h1>
      <ChatsList />
      <div className={styles.messageStyle}>
        <div>
      <MessageContainer />
      </div>
      <div className="styles.listStyle">
      <MessageList messages={chatId ? messages[chatId] : []} />
      </div>
      </div>
    </>
  )
}