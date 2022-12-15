import { useState } from "react";
import { Link} from 'react-router-dom';
import { MessageList } from "../MessageList/MessageList";
import styles from './ChatsList.module.css'
import CommentIcon from '@mui/icons-material/Comment';
import { nanoid } from "nanoid";
import {TextField, List, ListItem, Button, Box} from '@mui/material';

export function ChatsList({onAddChat, chats}) {
  console.log(chats)
console.log()

  const [chat, setChat] = useState('')

  const handleChange = (e) => {
    setChat(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    onAddChat({
      id: nanoid(),
      name: chat
    })
  }
  return (
  <>
  <h1> ChatList</h1>
  
  <List className={styles.listBlock}>
  {chats.map((value) => (
    <ListItem
      key={value.id}
      disableGutters
    ><Link to={`/chats/${value.name}`}>
    {value.name}
  </Link>
    </ListItem>
  ))}
</List>
<h1>ChatList</h1>
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
          onChange={handleChange}
        />
        <br/>
        <Button type='submit' variant="outlined" >Create Chat</Button>
      </Box>


</>
)
}