import { useEffect } from "react"
import { useParams, Navigate } from 'react-router-dom'

import { Message } from "../Components/Message"
import { MessageList } from "../Components/MessageList/MessageList"
import { ChatsList } from "../Components/ChatsList/ChatsList"
import styles from './Pages.module.css'

export function ChatsPage ({onAddChat, onAddMessage, messageList, chats}) {


  const {chatId} = useParams()
  

  useEffect(() => {
    if(chatId && messageList[chatId]?.length > 0 && messageList[chatId][messageList[chatId].length - 1].author === 'user') {
      const timeOut = setTimeout(() => {
        onAddMessage(chatId, {
          author: 'BOT',
          text: 'I am BOT'
        })
      }, 1500)
      return() => {clearTimeout(timeOut)}
    }
  }, [chatId, messageList])

  const handleAddMessage = (message) => {
    if (chatId) {
      onAddMessage(chatId, message)
    }
  }


  if(chatId && !messageList[chatId]) {
    return <Navigate to="/chats" replace />
  }

  return (
    <>
      <h1>Welcome to chat!</h1>
      <ChatsList chats={chats} onAddChat={onAddChat} />
      <div className={styles.messageStyle}>
        <div>
      <Message addMessage={handleAddMessage} />
      </div>
      <div className="styles.listStyle">
      <MessageList messageList={chatId ? messageList[chatId] : []} />
      </div>
      </div>
    </>
  )
}