import React from 'react';
import "./TableRow.css";


const TableRow = ({userId, id, title, completed}) => {
  return (
    <tr>
        <td>{userId}</td>
        <td>{id}</td>
        <td>{title}</td>
        <td>{completed}</td>
    </tr>
  )
}

export default TableRow
