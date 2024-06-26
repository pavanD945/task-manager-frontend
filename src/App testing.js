import logo from './logo.svg';
import React,{useState} from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [isHighlight,setIsHighlight] = useState(false);
  const [tasksResponse, setTasksResponse] = useState('')
  const getTasks = () => {
    axios.get('http://localhost:8080/task').
    then(
      response => {
        console.log(response)
        setTasksResponse(JSON.stringify(response))
      }).catch(err => {
        console.log(err)
      })
  }
  
  return (
    <div className="App">
      <h1 className='rvce-sample'>Task manager</h1>
      <div>
        <label>List of colleges on mysore road</label><br />
        <li>RVCE</li>
        <li>PESIT</li>
        <li>SJBIT</li>
        <input type = "text" placeholder = "Write something" /><br /><br /><br />
        <hr />
        <input type = "button" value = "Random"/>
        <div className='notHighlighted'>
          <button 
            className={`highlighted ${isHighlight === true && 'active'}`}
          onClick={()=>setIsHighlight(true)}
          >Highlight</button>
        </div>
        <button onClick={getTasks}>Get Tasks</button>
        <br />
        {tasksResponse ? <p>{tasksResponse}</p> : null}
      </div>  
    </div>
  );
}

export default App;