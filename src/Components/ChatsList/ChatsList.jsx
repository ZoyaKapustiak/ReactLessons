import { useState } from "react";
import {TextField,List, ListItem, IconButton} from '@mui/material';
import { MessageList } from "../MessageList/MessageList";
import styles from './ChatsList.module.css'
import CommentIcon from '@mui/icons-material/Comment';

export function ChatsList() {
  const [chats, setChats] = useState([{name: 'chat1', id: 123}, {name: 'chat2', id: 124}])
  return (
  <>
  <List className={styles.listBlock}>
  {chats.map((value, ind) => (
    <ListItem
      key={ind}
      disableGutters
      secondaryAction={
        <IconButton aria-label="comment">
          <CommentIcon />
        </IconButton>
      }
    >{value.name}
    </ListItem>
  ))}
</List>
</>
)
}