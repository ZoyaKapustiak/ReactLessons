import { useParams, Navigate } from 'react-router-dom'
import { useSelector } from "react-redux"
import { MessageContainer } from "../Components/Message/MessageContainer"
import { MessageList } from "../Components/MessageList/MessageList"
import { ChatsList } from "../Components/ChatsList/ChatsList"
import styles from './Pages.module.css'
import { selectMessage } from "../store/messages/selectors"
import { WithCLasses } from '../HOC/WithCLasses'
import { Message } from '../Components/Message/Message'

export function ChatsPage ({messageDB, chats}) {
  
  const {chatId} = useParams()
 
  // const messages = useSelector(selectMessage)
  const MessageListWithClass = WithCLasses(MessageList)

  const messagesChat = chats.find((chat) => chat?.name === chatId)
  console.log('messagesChat', messagesChat)
  const messages = Object.entries(messagesChat.messages).map((mes) => ({
    id: mes[0],
    text: mes[1].text,
    author: mes[1].author,
  }))
  console.log('messages', messages)
  

  // if(chatId && !messages[chatId]) {
  //   return <Navigate to="/chats" replace />
  // }

  return (
    <>
      <h1>Welcome to chat!</h1>
      <ChatsList chats={chats}/>
      <div className={styles.messageStyle}>
        <div>
           {/* <MessageContainer /> */}
        </div>
        <div className="styles.listStyle">
          {/* <MessageList messages={chatId ? messages : []} /> */}
          <MessageListWithClass
            messages={chatId ? messages : []} 
            classes={styles.border}
           />
        </div>
      </div>
      <Message />
    </>
  )
}