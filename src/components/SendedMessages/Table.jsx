import React from 'react';
import msglist from './msgList.module.scss';

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
    
  const rows = [
    {
      date: '30 Сентября',
      msg: 'Тема письма, которая не поместится в эту строку, потому ч...',
      st: 'Отправлено'
    },
    {
      date: '30 Сентября',
      msg: 'Тема письма, которая не поместится в эту строку, потому ч...',
      st: 'В очереди',
    },
    {
      date: '30 Сентября',
      msg: 'Тема письма, которая не поместится в эту строку, потому ч...',
      st: 'Ошибка'
    },
  ]
  return <div>
    <span className={msglist.header}>Отправленные сообщения</span>
    <table>
      <tr className={msglist.table_headers}>
        {columns.map( (el, i) => <td className={msglist.header_columns} key={i}>{el.header}</td>)}
      </tr>
      {rows.map((el, i) => 
        <tr key={i} className={msglist.table_cells}>
          <td>{el.date}</td>
          <td>{el.msg}</td>
          <td>{el.st}</td>
        </tr>
      )}
   </table>
  </div>  
}
  
export default Table;