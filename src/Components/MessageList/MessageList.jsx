import { useState,} from "react";
import styles from './MessageList.module.css'
import {TextField, ThemeProvider, useTheme, createTheme, Button, Box, useForkRef,} from '@mui/material';

export function MessageList({messageList, addMessages,}) {

  const [value, setValue] = useState('');
  
  
  const changeTextArea = (event) => {
    setValue(event.target.value)
  }
  const clickTextArea = (e) => {
    e.preventDefault()
    addMessages({text: value, author: 'user'})
    setValue('')
  }
  
  return (
    <>
      <Box
      onSubmit={clickTextArea}
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
          value={value}
          onChange={changeTextArea}
          autoFocus={true}
        />
        <br/>
        <Button type='submit' variant="outlined" >Отправить</Button>
      </Box>
      <ul className={styles.ulList}>
       {messageList.map((el, ind) => (
       <li key={ind}>{el.author}: {el.text}
        </li>))}
      </ul>
    </>
  )
}