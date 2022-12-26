import { useState } from "react";
import { Link} from 'react-router-dom';
import styles from './ChatsList.module.css'
import {TextField, List, ListItem, Button, Box} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux'
import { addChat, deleteChat } from '../../store/messages/actions'
import { selectChat } from "../../store/messages/selectors";

export function ChatsList(props) {
  const [chat, setChat] = useState('')
  const dispatch = useDispatch()
  const chats = useSelector(selectChat, (prev, next) => prev.length === next.length)


  const handleSubmit = (e) => {
    e.preventDefault() 
    dispatch(addChat(chat))
  }

  
  return (
  <>
    <h1> ChatList</h1> 
    <List className={styles.listBlock}>
      {chats.map((value) => (
      <ListItem
        key={value.id}
        disableGutters
        >
        <Link to={`/chats/${value.name}`}>
          {value.name}
        </Link>
        <button onClick={() => dispatch(deleteChat(value.name))}>X</button>
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