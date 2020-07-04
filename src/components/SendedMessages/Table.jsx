import React from 'react';
import msglist from './msgList.module.scss';

const Table = props => {
  const columns = [
      {
        header: 'Date',
      },
      {
        header: 'Message',
      },
      {
        header: 'Status',
      },
    ]
    
  const rows = [
      {
        date: '30 September',
        msg: 'Hello there',
        st: 'Sended'
      },
      {
        date: '30 September',
        msg: 'Would you like?',
        st: 'Processing',
      },
      {
        date: '30 September',
        msg: 'Let\'s play',
        st: 'Failed'
      },
      {
        date: '31 September',
        msg: 'New work for you',
        st: 'Failed'
      },
      {
        date: '31 September',
        msg: 'New game was released',
        st: 'Sended'
      }
  ]
  return <div>
    <table>
      <tr>
        {columns.map( (el, i) => <td key={i} className={msglist.table_cells}>{el.header}</td>)}
      </tr>
        {rows.map((el, i) => 
            <tr key={i}>
                <td className={msglist.table_cells}>{el.date}</td>
                <td className={msglist.table_cells}>{el.msg}</td>
                <td className={msglist.table_cells}>{el.st}</td>
            </tr>)
        }
   </table>
  </div>  
}
  
export default Table;