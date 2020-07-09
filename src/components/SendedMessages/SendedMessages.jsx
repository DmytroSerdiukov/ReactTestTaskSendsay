import React from 'react';
import msglist from './msgList.module.scss';
import { connect } from 'react-redux';
import { getMessages } from '../../reducer/selectors';
import { useEffect } from 'react'


const Table = props => {
  const columns = [
    {
      header: 'Дата',
    },
    {
      header: 'Тема',
    },
    {
      header: 'Статус',
    },
  ]
  
  
  return <div>
    <span className={msglist.header}>Отправленные сообщения</span>
    <table>
      <tr className={msglist.table_headers}>
        {columns.map( (el, i) => <td className={msglist.header_columns} key={i}>{el.header}</td>)}
      </tr>
      { props.messages.map((el, i) => 
        <tr key={i} className={msglist.table_cells}>
          <td>{el.date}</td>
          <td>{el.header}</td>
          <td>{el.st}</td>
        </tr>
      )}
   </table>
  </div>  
}

const SendedMessages = props => {

  return <div className={msglist.main}>
    <Table messages={props.messages}/>
  </div>  
}

let mapDispatchToProps = state => ({
  messages: getMessages(state)
})

export default connect(mapDispatchToProps, null)(SendedMessages);