import { useState} from 'react';
import { Routes, Route } from 'react-router-dom'
import { nanoid } from 'nanoid'
import { Provider } from 'react-redux';

import { ChatsList } from './Components/ChatsList/ChatsList';
import {useTheme, createTheme,} from '@mui/material';

import {MainPage} from './pages/MainPage';
import {ChatsPage} from './pages/ChatsPage';
import {ProfilePage} from './pages/ProfilePage';
import { Header } from './Components/Header/Header';
import { store } from './store/index'



const theme = createTheme({
  palette: {
    primary: {
      main: "#FF9800"
    },
    secondary: {
      main: '#0098FF',
    },
  },
});

const defaultMessage = {
  default: [
    {
      author: 'user',
      text: 'one text'
    },
    {
      author: 'user',
      text: 'two text'
    },
  ]
}

export function App() {
  const [messageList, setMessageList] = useState(defaultMessage);
  const theme = useTheme();

  const chats = Object.keys(messageList).map((chat) => ({
    id: nanoid(),
    name: chat
  }))

  const onAddChat = (newChat) => {
    
    setMessageList({
      ...messageList,
      [newChat.name]: []
    })
  }

  const onAddMessage = (chatId, newMessage) => {
    setMessageList({
      ...messageList,
      [chatId]: [...messageList[chatId], newMessage]
    })
  }

  return (
    <>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<Header />}>
            <Route index element={<MainPage />} />
            <Route path='profile' element={<ProfilePage />} />
            <Route path='chats'>
              <Route index element={<ChatsList chats={chats} onAddChat={onAddChat} />} />
              <Route 
                path=':chatId' 
                element={<ChatsPage chats={chats} 
                messageList={messageList} 
                onAddMessage={onAddMessage} 
                onAddChat={onAddChat} />} 
              />
            </Route>
          </Route>
          <Route path="*" element={<h2>404 Page not FOUND</h2>} />
        </Routes>
        </Provider>
    </>
  )
}


