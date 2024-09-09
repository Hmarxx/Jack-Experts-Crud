import TaskCard from '../task-card/task-card.component'
import { useContext } from 'react'
import { TasksContext } from '../../context/tasks.context'

import './task-list.component.css'

function TaskList() {
  const {tasks} = useContext(TasksContext)
  return (
    <div className="taskList">{
      tasks?.map((task, i) => (<TaskCard key={i} task={task} />))
    }</div>
  )
}

export default TaskList
