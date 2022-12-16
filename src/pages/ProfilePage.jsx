import { useSelector, useDispatch} from 'react-redux'
import { useState } from 'react'
import * as types from '../store/profile/types'


export function ProfilePage() {
  const name = useSelector((store) => store.name)
  const dispatch = useDispatch()
  const [value, setValue] = useState('')
  const [checkBox, setCheckBox] = useState(false)

  const handleChange = () => {
    console.log(value)
    dispatch({type: types.CHANGE_NAME, payload: value})
    setValue('checked')
  }

  const handleCheckbox = () => {
    
    dispatch({type: types.CHECKED, payload: checkBox})
  
  }

  const changeCheck = (e) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value
    setCheckBox(value)
  }


  return (
    <>
      <h1>ProfilePage</h1>
      <br/>
      <h2>{name}</h2>
      <form action="#">
        <input
          type='text'
          value={value}
          onChange={(event) => setValue(event.target.value)}
        />
        <button onClick={handleChange}>Изменить имя</button>
        <hr />
        <input onChange={changeCheck} type="checkbox" name="" id="home" value='First'/><label for='home'>CheckBox</label>  
        <button onClick={handleCheckbox} >Отправить ответ</button>
      </form>
    </>
  )
}