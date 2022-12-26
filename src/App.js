import { useState} from 'react';
import { Routes, Route } from 'react-router-dom'

import { Provider } from 'react-redux';

import { ChatsList } from './Components/ChatsList/ChatsList';
import {useTheme, createTheme,} from '@mui/material';

import {MainPage} from './pages/MainPage';
import {ChatsPage} from './pages/ChatsPage';
import {ProfilePage} from './pages/ProfilePage';
import {AboutWithConnect} from './pages/AboutPage'
import { Header } from './Components/Header/Header';
import { store, persistor } from './store/index'
import { PersistGate } from 'redux-persist/integration/react';



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


  return (
    <>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <Routes>
          <Route path="/" element={<Header />}>
            <Route index element={<MainPage />} />
            <Route path='profile' element={<ProfilePage />} />
            <Route path='about' element={<AboutWithConnect />} />
            <Route path='chats'>
              <Route index element={<ChatsList />} />
              <Route 
                path=':chatId' 
                element={<ChatsPage />} 
              />
            </Route>
          </Route>
          <Route path="*" element={<h2>404 Page not FOUND</h2>} />
        </Routes>
        </PersistGate>
      </Provider>
    </>
  )
}


