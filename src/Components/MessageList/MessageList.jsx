import { useState,} from "react";
import styles from './MessageList.module.css'
import PropTypes from 'prop-types'

export function MessageList({messageList}) {
  console.log(messageList)
  return (
    <>
    <h1>MessageList</h1>
      <ul>
       {messageList.map((el, ind) => (
       <li key={ind} >{el.author}: {el.text} 
        </li>))}
      </ul>
      
    </>
  )
}

MessageList.propTypes = {
  messageList: PropTypes.array
}