import {useEffect, useState, useRef} from 'react';
import {Message} from './Components/Message';
import {MessageList} from './Components/MessageList/MessageList';
import { ChatsList } from './Components/ChatsList/ChatsList';
import {useTheme, createTheme,} from '@mui/material';
import styles from './App.module.css'


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

function App() {
  const [messageList, setMessageList] = useState([]);
  const theme = useTheme();
  
  const addMessages = (newMessage) => {
    setMessageList([...messageList, newMessage])
  } 

  

  useEffect(() => {
    if(messageList.length > 0 && messageList[messageList.length - 1].author === 'user') {
      const timeOut = setTimeout(() => {
        addMessages({
          author: 'BOT',
          text: 'I am BOT'
        })
      }, 1500)
      return() => {clearTimeout(timeOut)}
    }
  }, [messageList])


  return (
    <>  
      <Message title="Message Component"/>
      <hr/>
      <div className={styles.chatBlock}>
      <ChatsList/><MessageList messageList={messageList} addMessages={addMessages}/>
      </div>
    </>
  );
}

export default App;
