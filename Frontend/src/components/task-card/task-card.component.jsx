import PropTypes from 'prop-types'
import { FaTrash } from 'react-icons/fa'
import {useMemo, useCallback, useContext} from 'react'
import TasksService from '../../services/tasks.service'
import { TasksContext } from '../../context/tasks.context'

import './task-card.component.css'

function TaskCard({ task }) {
  const {tasks, setTasks} = useContext(TasksContext)
  
  const tasksService = useMemo(() => new TasksService(), [])
  const toggleDone = useCallback(async (e) => {
    const newStatus = e.target.checked ? 'concluida' : 'pendente'
    const updatedTask = {...task, status: newStatus}
    await tasksService.updateTask(updatedTask)
    setTasks(tasks.map(t => t.id === task.id ? updatedTask : t))
  }, [task, tasksService, tasks, setTasks])
  return (
    <div className="taskCard" style={{backgroundColor: task?.status === 'concluida' ? 'transparent' : '#E0DCE4'}}>
      <input type='checkbox' name='task' checked={task?.status === 'concluida'} onChange={toggleDone}/>
      <p className="title" style={{textDecoration: task?.status === 'concluida' ? 'lineThrough' : 'none'}}>{task?.titulo}</p>
      <button><FaTrash /></button>
    </div>
  )
}

TaskCard.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.number.isRequired,
    titulo: PropTypes.string.isRequired,
    descricao: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
  }).isRequired,
}

export default TaskCard
