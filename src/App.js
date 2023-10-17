import { useEffect, useState } from 'react';
import './App.css';
import TableRow from './components/TableRow';

function App() {
  const [data,setData] = useState([])

  useEffect(() => {
    const fetchData = () =>{
      let promise = fetch("https://jsonplaceholder.typicode.com/todos");
      promise.then((value)=>{
        return value.json();
      }).then((value)=>{
        setData(value)
      })
    }

    fetchData()
  },[])

  console.log(data[0]?.completed)
  return (
    <div className="app">
      <h2>Todo app</h2>
      <table className='app__table'>
        <thead>
          <td>User ID</td>
          <td>ID</td>
          <td>Title</td>
          <td>Completed</td>
        </thead>
        {data.length > 0 && data?.map((item) => {
          return <TableRow userId={item?.userId} id={item?.id} title={item?.title} completed={item?.completed.toString()} key={item?.id}/>
        })}
      </table>
    </div>
  );
}

export default App;
