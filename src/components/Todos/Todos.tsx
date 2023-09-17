import { useContext } from 'react'
import List from '../List/List'
import FilterTodo from '../FilterTodo/FilterTodo'
import AddTodo from '../AddTodo/AddTodo'
import { context } from '../../context'
import { IContext, TodoAction, TodoStates } from '../../interfaces/types'
import ChangeTodo from '../ChangeTodo/ChangeTodo'
import './Todo.scss'
import Box from '../../uiComponents/Box/Box'

const Todo = () => {
    const { state, dispatch } = useContext(context) as IContext<TodoStates, TodoAction>
    return (
        <div className='py-5 todo'>
            <Box>
                <div className='fs-1 mb-2 text-center font-light'>Todo</div>
                <FilterTodo />
            </Box>
            <Box>
                {state.todos.length === 0 ? <>
                    <h1 className='text-center text-danger'>Not have {state.filter !== "all" ? state.filter : ""} todos </h1>
                </> : <List />}
            </Box>
            <Box>
                {state.isWantAdd ? <>
                    <AddTodo />
                </> : <>
                    <button className='btn' onClick={() => {
                        dispatch({ type: 'CHANGE_ACTIVE', payload: { key: "isWantAdd", value: true } })
                    }}>
                        <i className='fa-solid fa-plus'></i>
                    </button>
                </>}
                {state.isWantChange ? <>
                    <ChangeTodo />
                </> : null}
            </Box>
        </div>
    )
}

export default Todo