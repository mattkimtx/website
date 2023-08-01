import {useState} from 'react';

function TaskForm({addTask}) {
     const [text, setText] = useState('');
     console.log(text);

     const handleSubmit = (e) => {
          e.preventDefault();
          if (!text.trim()) return;

          addTask(text);
          setText('');
     }

     return (
          <form>
               <input
                    type="text"
                    placeholder="Enter a task..."
                    onChange={(e) => {setText(e.target.value)}}
                    value = {text}
               />
               <button type="submit" onClick={handleSubmit}> Add Task </button>
          </form>
     )
}

export default TaskForm;