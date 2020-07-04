import React from 'react';
import msglist from './msgList.module.scss';
import Table from './Table';

const SendedMessages = props => {

  return <div className={msglist.main}>
    <span className={msglist.header}>Отправленные сообщения</span>
    <Table />
  </div>  
}

export default SendedMessages;