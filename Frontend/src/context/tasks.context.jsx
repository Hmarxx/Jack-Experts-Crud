import { createContext } from 'react'
import PropTypes from 'prop-types'

const TasksContext = createContext();

const TasksProvider = ({ value, children }) => {
  return (
    <TasksContext.Provider value={value}>
      {children}
    </TasksContext.Provider>
  )
}

TasksProvider.propTypes = {
  value: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired
}

export { TasksContext, TasksProvider }
