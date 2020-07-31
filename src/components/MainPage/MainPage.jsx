import React, { useState } from 'react'
import { Field, reduxForm } from 'redux-form'
import { sendMessage } from '../../reducer/formHandleReducer'
import { connect } from 'react-redux'
import SendedForm from '../Sended/SendedForm'
import SendedMessages from '../SendedMessages/SendedMessages'
import mainpage from './mainpage.module.scss'
import Button from '../Button'
import FormElement from '../formControls/formControls'
import { //required, 
       // maxLengthMaker, 
        // validate\
       emailIsValid, nameIsValid, required} from '../validators/validators'
import FileKeeper from '../addFile'

const MainPage = props => {
  const [sent, setSending] = useState(false)

  let showMe = data => {
    const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"]
    const d = new Date()
    const date = '' + d.getDate() + ', ' + monthNames[d.getMonth()]
    console.log(data)
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
      <div className={mainpage.window}>
        <ReduxMessageForm onSubmit={showMe}/>
      </div>
    </>}
    <SendedMessages />
  </div>
  );
}

const Input = FormElement("input")
const TextArea = FormElement("textarea")
//const length10 = maxLengthMaker(10)

const MessageForm = props => {
  const {handleSubmit, pristine, submitting} = props
  return <>
    <div className={mainpage.header_form}>
      <span>Отправлялка сообщений</span>
    </div>
    <form onSubmit = {handleSubmit}>
      <div>
        <div className={mainpage.labelStyles}><label>От кого</label></div>
        <div className={mainpage.row_direction}>
          <div><Field 
              name="yourname" 
              placeholder="Имя" 
              component={Input} 
              type="text"
              validate={[required]}
            />
          </div>
          <div><Field 
              name="youremail" 
              placeholder="Email" 
              component={Input} 
              type="text"
              validate={[required, emailIsValid]}
            />
          </div>
        </div>
      </div>
      <div>
        <div className={mainpage.labelStyles}><label>Кому</label></div>
        <div className={mainpage.row_direction}>
          <div><Field 
            name="name" 
            placeholder="Имя" 
            component={Input} 
            type="text"
            validate={[required]}
          />
        </div>
          <div><Field 
            name="email" 
            placeholder="Email" 
            component={Input} 
            type="text"
            validate={[required, emailIsValid]}
          />
        </div>
        </div>
      </div>
      <div>
        <div>
          <div className={mainpage.labelStyles}><label>Тема письма</label></div>
          <div className={mainpage.message_header}>
            <Field name="header" 
              component={Input} 
              type="text"
              // validate={[required, length10]}
            />
          </div>
        </div>
        
        <div>
          <div className={mainpage.labelStyles}><label>Сообщение</label></div>  
          <div className={mainpage.row_direction}>
            <Field  
              name="message" 
              component={TextArea} 
              type="text"
              // validate={[required, length10]}
            />
          </div>
        </div>
      </div>
      <FileKeeper />
      <Button disabled={pristine || submitting}/>

    </form>
  </>
}

const ReduxMessageForm = reduxForm({form: "message"})(MessageForm)

export default connect(null, {sendMessage})(MainPage)
