import { useSelector, useDispatch} from 'react-redux'
import { useState } from 'react'
import { selectName, selectVisible } from '../store/profile/selectors'
import { changeName, toggleProfile } from '../store/profile/actions'

export function ProfilePage() {
  const name = useSelector(selectName)
  const visible = useSelector(selectVisible)
  const dispatch = useDispatch()
  const [value, setValue] = useState('')

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
        <button onClick={() => {dispatch(changeName(value), setValue(''))}}>Изменить имя</button>
        <hr />
        <input checked={visible} readOnly type="checkbox" id="home" />
        <label htmlFor='home'>CheckBox</label>  
        <button onClick={() => dispatch(toggleProfile())} >Отправить ответ</button>
      </form>
    </>
  )
}