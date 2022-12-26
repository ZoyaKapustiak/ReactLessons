import styles from './Message.module.css';
import { TextField, Button, Box } from '@mui/material';
import PropTypes from 'prop-types'


export function Message(props) {
  
  return (
    <>
    <h1>Message</h1>
    <h2 className={styles.heading}>Здравствуйте!</h2>
    <h3>Очень приятно познакомиться с Вами</h3>
    <button onClick={() => props.clickButton(!props.toggle)} >Кликните по кнопке</button>
    {props.toggle && <p>Меня зовут Зоя! Мало времени на обучение, но я стараюсь! Не будьте строги ко мне:)</p>}
    
    <Box
      onSubmit={props.clickTextArea}
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
          value={props.text}
          onChange={props.changeText}
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
