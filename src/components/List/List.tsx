import { useContext } from 'react'
import Item from '../Item/Item'
import { context } from '../../context'
import { IContext, TodoAction, TodoStates, TodoType } from '../../interfaces/types'
import { filterTodoHandler } from '../../utils'

const List = () => {
    const { state, dispatch } = useContext(context) as IContext<TodoStates, TodoAction>
    const setStatus = (status: TodoType, id: string): void => {
        dispatch({ type: 'CHANGE_STATUS', payload: [status, id] })
    }

    return (
        <div className='list-group'>
            {filterTodoHandler(state.todos, state.filter).map((item, idx) => {
                return <Item setStatus={setStatus} key={idx} todo={item} />
            })}
        </div>
    )
}

export default List