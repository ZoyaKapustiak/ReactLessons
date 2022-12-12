import {useEffect, useState} from 'react';
import {Message} from './Components/Message';
import {MessageList} from './Components/MessageList/MessageList';



function App() {
  const [messageList, setMessageList] = useState([{text: '', author: ''}]);
 
  
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
      <MessageList messageList={messageList} addMessages={addMessages}/>
    </>
  );
}

export default App;
