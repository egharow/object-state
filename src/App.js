import './App.css';
import { useState } from 'react';
import records from './records.json';

function App(){
  const[toDo,setToDo] = useState('')
  const[toDoList, setToDoList] = useState(['Buy Milk', 'Go to a movie'])
  
  function handleTodoChange(e){
    setToDo(e.target.value)
  }
  return(
    <div className="App">
    <input value={toDo} onChange= {handleTodoChange}/>
    <button>Add to list</button>
    <h3>List of things to do</h3>
    {
      records.map(record =>{
        return(
          <div className='box'>
            {record.name} {record.email}

          </div>
        )
      })
    }
    <ul>
      {toDoList.map(
        toDo => (
        <li>{toDo}</li>
        )
      )}
    </ul>
    </div>
    );
}

export default App;
