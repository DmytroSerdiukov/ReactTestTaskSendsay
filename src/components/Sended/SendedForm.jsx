import React from 'react'
import sended from './sended.module.scss'
// import {useEffect} from 'react'
// import { Redirect } from 'react-router-dom'


const  SendedForm = props => {
  return (
    <div className={sended.main}>
      <div className={sended.info}>
        <p>Сообщение поставлено в очередь на отправку</p>
        <p>Совсем скоро сообщение вылетит из сервера, и 
        будет двигаться в сторону почты получателя «abc@my.com» 
        со скоростью электронов.</p>
      </div>
    </div>
  );
}

export default SendedForm;