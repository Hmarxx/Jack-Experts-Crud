import CreatedTasks from '../created-tasks/created-tasks.component'
import DoneTasks from '../done-tasks/done-tasks.component'
import TaskList from '../task-list/task-list.component'
import {useContext, useState} from 'react'
import {TasksContext} from '../../context/tasks.context'

import './main.component.css'

export default function Main() {
  const task = useContext(TasksContext)
  const [taskList] = useState(task?.tasks)

  // useEffect(() => {

  // }, [])

  return (
    <main>
      <div className="labels">
        <CreatedTasks />
        <DoneTasks />
      </div>

      <TaskList tasks={taskList} />
    </main>
  )
}
