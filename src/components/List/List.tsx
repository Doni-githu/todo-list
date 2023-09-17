import { useContext } from 'react'
import Item from '../Item/Item'
import { context } from '../../context'
import { FilterType, IContext, ITodo, TodoAction, TodoStates, TodoType } from '../../interfaces/types'

const List = () => {
    const { state, dispatch } = useContext(context) as IContext<TodoStates, TodoAction>
    const setStatus = (status: TodoType, id: string): void => {
        dispatch({ type: 'CHANGE_STATUS', payload: [status, id] })
    }
    const filterTodoHandler = (data: ITodo[], filter: FilterType) => {
        if (filter !== "all") {
            return data.filter((c) => c.status === filter)
        }

        return data
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