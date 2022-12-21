import PropTypes from 'prop-types'

export function MessageList({messages}) {
  console.log(messages)
  return (
    <>
    <h1>MessageList</h1>
      <ul>
       {messages.map((el, ind) => (
       <li key={ind} >{el.author}: {el.text} 
        </li>))}
      </ul>
    </>
  )
}

MessageList.propTypes = {
  messages: PropTypes.array
}