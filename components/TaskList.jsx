function TaskList({tasks}) {
     return (
          <ul>
               {tasks.map((task, index) => (
                    <li key={indexedDB}>{task}</li>
               ))}
          </ul>
     )
}


export default TaskList;