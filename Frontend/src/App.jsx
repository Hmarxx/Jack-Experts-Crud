import Header from './components/header/header.component'
import Main from './components/main/main.component'
import {useMemo, useEffect, useState, useContext} from 'react'
import TasksService from './services/tasks.service'
import {TasksProvider, TasksContext} from './context/tasks.context'
import onChangeTasks from './observables/tasks.observable'

import './App.css'

function App() {
  const tasksContext = useContext(TasksContext)
  const tasksService = useMemo(() => new TasksService(), [])

  const [tasks, setTasks] = useState([])

  useEffect(() => {
    tasksContext?.setTasks(tasks)
  }, [tasks])

  useEffect(() => {
    const getTasks = async () => {
      const tasks = await tasksService.getTasks()
      setTasks(tasks)
    }

    getTasks()
  }, [])

  useEffect(() => {
    const onChangeSubscription = onChangeTasks.subscribe((tasks) => {
      setTasks(tasks)
    })

    return () => onChangeSubscription.unsubscribe()
  }, [])

  return (
    <TasksProvider value={{tasks, setTasks}}>
      <div className="task-box">
        <Header />
        <Main />
      </div>
    </TasksProvider>
  )
}

export default App
