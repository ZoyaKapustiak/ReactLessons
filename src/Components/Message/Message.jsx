import { useState } from "react";
import styles from './Message.module.css';
import { TextField, Button, Box } from '@mui/material';
import PropTypes from 'prop-types'
import { useDispatch } from "react-redux";
import { addMessage } from "../../store/messages/actions";
import { useParams } from "react-router-dom";

export function Message() {

  const [toggle, setToggle] = useState(false)
  const [text, setText] = useState('');
  const dispatch = useDispatch();
  const { chatId } = useParams()


  const clickTextArea = (e) => {
    e.preventDefault()
    dispatch(addMessage(chatId, text))
    setText('')
  }

  const clickButton = () => {
    setToggle(!toggle)
  }

  const changeText = (e) => {
    setText(e.target.value)
  }
  
  
  return (
    <>
    <h1>Message</h1>
    <h2 className={styles.heading}>Здравствуйте!</h2>
    <h3>Очень приятно познакомиться с Вами</h3>
    <button onClick={() => clickButton(!toggle)} >Кликните по кнопке</button>
    {toggle && <p>Меня зовут Зоя! Мало времени на обучение, но я стараюсь! Не будьте строги ко мне:)</p>}
    
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
          value={text}
          onChange={changeText}
          inputRef={input => input && input.focus()}
        />
        <br/>
        <Button type='submit' variant="outlined" >Отправить</Button>
      </Box>
    
    </>
  )
}
Box.propTypes = {
  addMessage: PropTypes.func
}
