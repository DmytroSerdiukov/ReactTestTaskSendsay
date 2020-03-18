import React from 'react';
import mainpage from './mainpage.module.css';
import { Field, reduxForm } from 'redux-form';
import { Redirect } from 'react-router-dom';

class MainPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sent: false
    }

    this.showMe = this.showMe.bind(this);
  }


  showMe(data) {
    let { sent } = this.state;
    console.log(data);
    this.setState({sent: !sent});
  }

  render() {
    return (
      <div className = {mainpage.window}>
        { this.state.sent ? <Redirect to="/sent" /> : 
        <ReduxMessageForm onSubmit={this.showMe}/> }
      </div>
    );
  }
  
}

const MessageForm = (props) => {
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