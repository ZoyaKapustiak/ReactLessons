import { Routes, Route } from 'react-router-dom'

import { useDispatch } from 'react-redux';

import { ChatsList } from './Components/ChatsList/ChatsList';
import {useTheme, createTheme,} from '@mui/material';

import {MainPage} from './pages/MainPage';
import {ChatsPage} from './pages/ChatsPage';
import {ProfilePage} from './pages/ProfilePage';
import {AboutWithConnect} from './pages/AboutPage'
import { Header } from './Components/Header/Header';
import { persistor } from './store/index'
import { PersistGate } from 'redux-persist/integration/react';
import { Articles } from './pages/Articles'
import { SignIn } from './pages/SignIn'
import { SignUp } from './pages/SignUp'
import { PrivateRoute } from './utils/PrivateRoute';
import { PublicRoute } from './utils/PublicRoute';
import { firebaseAuth, messagesRef } from './services/firebase';
import { onValue } from 'firebase/database'
import { useEffect, useState } from 'react';
import { auth } from './store/profile/actions';


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

export function App() {
  const theme = useTheme();
  const dispatch = useDispatch();

  const [messageDB, setMessageDB] = useState({})
  const [chats, setChats] = useState([])
  
  useEffect(() => {
   const unsubscribe = firebaseAuth.onAuthStateChanged((user) => {
      if(user) {
        dispatch(auth(true))
      } else {
        dispatch(auth(false))
      }
    })
    return unsubscribe
  }, [])

  useEffect(() => {
    onValue(messagesRef, (snapshot) => {
      const data = snapshot.val()
      const newChats = Object.entries(data).map((item) => ({
        name: item[0],
        messages: item[1].messageList//изменила на s
      }))
      setMessageDB(data)
      setChats(newChats)
      
    })
  }, [])


  return (
    <>
      {/* <Provider store={store}> */}
        <PersistGate persistor={persistor}>
          <Routes>
            <Route path="/" element={<Header />}>
              <Route index element={<MainPage />} />
              <Route path='profile' element={<ProfilePage />} />
              <Route path='about' element={<AboutWithConnect />} />
              <Route path='chats' element={<PrivateRoute />}>
                <Route 
                  index 
                  element={<ChatsList chats={chats} messageDB={messageDB} />} 
                />
                <Route 
                  path=':chatId' 
                  element={<ChatsPage chats={chats} messageDB={messageDB} />} 
                />
              </Route>
              <Route path='articles' element={<Articles />} />
              <Route 
                path='signin' 
                element={<PublicRoute component={<SignIn/>} />}/>
              <Route path='signup' element={<SignUp />} />
            </Route>
          <Route path="*" element={<h2>404 Page not FOUND</h2>} />
        </Routes>
      </PersistGate>
      {/* </Provider> */}
    </>
  )
}


