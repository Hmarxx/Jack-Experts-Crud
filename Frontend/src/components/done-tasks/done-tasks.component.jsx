import Tag from '../tag/tag.component';
import { useContext } from 'react';
import { TasksContext } from '../../context/tasks.context'

import './done-tasks.component.css'

export default function DoneTasks() {
  const { tasks } = useContext(TasksContext);
  return (
    <div className='done-tasks'>
      tarefas concluídas
      <Tag backgroundColor='green' color='white' value={tasks?.filter((task) => task?.status === 'concluida')?.length ?? 0}/>
    </div>
  )
}
