import './App.css'
import {useState} from 'react';
import TaskForm from './components/TaskForm';


function App() {
     const [tasks, setTasks] = useState('');

     const addTask = (task) => {
          setTasks((prevTasks) => [...prevTasks, task]);
     }

     return(
          <>
               <div>
                    <h1> Simple To-Do List</h1>
                    <TaskForm addTask={addTask} />
                    <TaskList tasks={tasks} />
               </div>
          </>
     )
}

export default App;