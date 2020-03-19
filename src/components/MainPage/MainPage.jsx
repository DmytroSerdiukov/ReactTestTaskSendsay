import React, { useState } from 'react';
import mainpage from './mainpage.module.css';
import { Field, reduxForm } from 'redux-form';
import { Redirect } from 'react-router-dom';

const MainPage = props => {
  const [sent, setSending] = useState(false);
  let showMe = data => {
    setSending(true);
    console.log(data);
  }

  return (
    <div className = {mainpage.window}>
      { sent ? <Redirect to="/sent" /> : 
      <ReduxMessageForm onSubmit={showMe}/> }
    </div>
  );
}

const MessageForm = props => {
  const {handleSubmit} = props;
  return <>
    <form onSubmit = {handleSubmit}>
      <div>
        <div><label>От кого</label></div>
        <div>
          <div><Field name="yourname" component="input" type="text"/></div>
          <div><Field name="youremail" component="input" type="text"/></div>
        </div>
      </div>
      <div>
        <div><label>Кому</label></div>
        <div>
          <div><Field name="name" component="input" type="text"/></div>
          <div><Field name="email" component="input" type="text"/></div>
        </div>
      </div>
      <div>
        <div>
          <div><label>Тема письма</label></div>
          <div><Field name="header" component="input" type="text"/></div>
        </div>
        
        <div>
          <div><label>Сообщение</label></div>
          <div><Field name="message" component="input" type="text"/></div>
        </div>
      </div>
      <button>send</button>
    </form>
  </>
}

const ReduxMessageForm = reduxForm({form: "message"})(MessageForm);

export default MainPage;
