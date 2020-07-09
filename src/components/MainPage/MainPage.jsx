import React, { useState } from 'react'
import mainpage from './mainpage.module.scss'
import { Field, reduxForm } from 'redux-form'
import SendedForm from '../Sended/SendedForm'
import SendedMessages from '../SendedMessages/SendedMessages'
import { sendMessage } from '../../reducer/formHandleReducer'
import { connect } from 'react-redux'

const MainPage = props => {
  const [sent, setSending] = useState(false)

  let showMe = data => {
    const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"]
    const d = new Date()
    const date = '' + d.getDate() + ', ' + monthNames[d.getMonth()]

    const message = {
      date: date,
      header: data.header,
      msg: data.message,
      st: 'sended'
    }
    props.sendMessage(message)
    setSending(true)
  }

  return (
  <div className={mainpage.main_container}>
    { sent ? <SendedForm /> :
    <>
      <div 
      className={mainpage.window}
      >
        <ReduxMessageForm onSubmit={showMe}/>
      </div>
    </>}
    <SendedMessages />
  </div>
  );
}

const MessageForm = props => {
  const {handleSubmit} = props
  return <>
    <div className={mainpage.header_form}>
      <h1>Отправлялка сообщений</h1>
    </div>
    <form onSubmit = {handleSubmit}>
      <div>
        <div><label>От кого</label></div>
        <div className={mainpage.row_direction}>
          <div><Field name="yourname" placeholder="Имя" component="input" type="text"/></div>
          <div><Field name="youremail" placeholder="Email" component="input" type="text"/></div>
        </div>
      </div>
      <div>
        <div><label>Кому</label></div>
        <div className={mainpage.row_direction}>
          <div><Field name="name" placeholder="Имя" component="input" type="text"/></div>
          <div><Field name="email" placeholder="Email" component="input" type="text"/></div>
        </div>
      </div>
      <div>
        <div>
          <div><label>Тема письма</label></div>
          <div className={mainpage.message_header}><Field name="header" component="input" type="text"/></div>
        </div>
        
        <div>
          <div><label>Сообщение</label></div>  
          <div className={mainpage.row_direction}><Field  name="message" component="textarea" type="text"/></div>
        </div>
      </div>
      <button 
      className={mainpage.send_button}
      >Отправить</button>
    </form>
  </>
}

const ReduxMessageForm = reduxForm({form: "message"})(MessageForm)

export default connect(null, {sendMessage})(MainPage)
