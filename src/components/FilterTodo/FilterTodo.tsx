import React, { useContext } from 'react'
import { context } from '../../context'
import { FilterType, IContext, TodoAction, TodoStates } from '../../interfaces/types'
import './FilterTodo.scss'


const FilterTodo = () => {
  const { state, dispatch } = useContext(context) as IContext<TodoStates, TodoAction>
  const changeFilter = (filter: string) => {
    dispatch({ type: "CHANGE_FILTER", payload: filter })
  }
  const data = [
    {
      title: "all"
    },
    {
      title: "active"
    },
    {
      title: "completed"
    }
  ]
  return (
    <div className='d-flex justify-content-between'>
      <div className='center'>
        <p>{state.todos.filter((c) => c.status === "active").length}</p>
      </div>
      <div className='btn-group'>
        {data.map((item) => (
          <button onClick={() => changeFilter(item.title)} className={`btn ${item.title === state.filter ? "active" : ""}`}>{item.title.charAt(0).toUpperCase() + item.title.slice(1)}</button>
        ))}
      </div>
      <div className='center'>
        <p style={{ cursor: 'pointer' }}>Clear completed</p>
      </div>
    </div>
  )
}

export default FilterTodo