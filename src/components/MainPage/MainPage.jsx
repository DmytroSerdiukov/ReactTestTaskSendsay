import React from 'react';
import mainpage from './mainpage.module.css';
import { Field, reduxForm } from 'redux-form';

const MessageForm = () => {
    return <>
    <form>
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
      </form>
    </>
}

const MainPage = props => {
  return (
    <div className = {mainpage.window}>
      <ReduxMessageForm />
    </div>
  );
}

const ReduxMessageForm = reduxForm({form: "message"})(MessageForm);

export default MainPage;