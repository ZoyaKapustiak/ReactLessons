import { useState } from 'react'
import { changeName, toggleProfile } from '../store/profile/actions'
import { connect } from 'react-redux'
import { Button } from '../Components/ui/Button'

function AboutPage(props) {
  const [value, setValue] = useState('')

  return (
    <>
      <h1>AboutPage</h1>
      <br/>
      <h2>{props.name}</h2>
      <form action="#">
        <input
          type='text'
          value={value}
          onChange={(event) => setValue(event.target.value)}
        />
        <Button onClick={() => {props.changeName(value)}}>Изменить имя</Button>
        <hr />
        <input checked={props.visible} readOnly type="checkbox" id="home" /><label for='home'>CheckBox</label>  
        <button onClick={() => props.toggle()} >Отправить ответ</button>
      </form>
    </>
  )
}

const mapStateToProps = (state) => ({
  name: state.profile.name,
  visible: state.profile.visible
}) 

const mapDispatchToProps = (dispatch) => ({
  toggle:() => dispatch(toggleProfile()),
  changeName: (value) => dispatch(changeName(value))
})

export const AboutWithConnect = connect(mapStateToProps, mapDispatchToProps)(AboutPage)