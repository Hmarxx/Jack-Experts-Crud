import Tag from '../tag/tag.component';
import { useContext, useState, useEffect } from 'react';
import {TasksContext} from '../../context/tasks.context';

import './created-tasks.component.css'

export default function CreatedTasks() {
  const tasksContext = useContext(TasksContext);
  const [tasks, setTasks] = useState(tasksContext?.tasks);
  useEffect(() => {
    setTasks(tasksContext?.tasks)
    console.log(tasksContext?.tasks)
  }, [tasksContext])
  return (
    <div className='created-tasks'>
      tarefas criadas
      <Tag backgroundColor='purple' color='white' value={tasks?.length}/>
    </div>
  )
}
