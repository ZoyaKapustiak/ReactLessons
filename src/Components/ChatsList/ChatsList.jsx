import { useState } from "react";
import { Link} from 'react-router-dom';
import styles from './ChatsList.module.css'
import {TextField, List, ListItem, Button, Box} from '@mui/material';
import { useDispatch } from 'react-redux'
import { addChat, deleteChat } from '../../store/messages/actions'
import { push, set, remove } from 'firebase/database'
import { messagesRef, getChatById, getMessageListById } from "../../services/firebase";

export function ChatsList({messageDB, chats}) {
  
  const [chat, setChat] = useState('')
  const dispatch = useDispatch()
  // const chats = useSelector(selectChat, (prev, next) => prev.length === next.length)


  const handleSubmit = (e) => {
    e.preventDefault() 
    dispatch(addChat(chat))
    
    set(messagesRef, {
      ...messageDB,
      [chat]: {
        name: chat
      }
    })

    push(getMessageListById(chat), {
      text: 'Chat has been created',
      author: 'Admin'
    });

    setChat('')
  }

  const handleDeleteChat = (chatId) => {
    remove(getChatById(chatId));
  };

  
  return (
  <>
    <h1> ChatList</h1> 
    <List className={styles.listBlock}>
      {chats.map((value) => (
      <ListItem
        key={value.name}
        disableGutters
        >
        <Link to={`/chats/${value.name}`}>
          {value.name}
        </Link>
        <button 
        onClick={() => dispatch(handleDeleteChat(value.name))}
        >X</button>
      </ListItem>
      ))}
    </List>
    <Box
      onSubmit={handleSubmit}
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off">
        <TextField
          id="outlined-multiline-flexible"
          label="Multiline"
          multiline
          maxRows={4}
          value={chat}
          onChange={(e) => setChat(e.target.value)}
          />
        <br/>
        <Button type='submit' variant="outlined" >Create Chat</Button>
    </Box>
  </>
)
}