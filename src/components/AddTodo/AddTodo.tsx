import React, {
    useState,
    useContext
} from 'react'
import TextArea from '../../uiComponents/TextArea/TextArea'
import { context } from '../../context'
import { IContext, ITodo, TodoAction, TodoStates } from '../../interfaces/types'

const AddTodo = () => {
    const [todo, setTodo] = useState<string>('')
    const { state, dispatch } = useContext(context) as IContext<TodoStates, TodoAction>
    const addTodoHandler = () => {
        if (!todo) {
            return
        }

        const payload: ITodo = {
            id: `${Date.now()}Id`,
            todo: todo.replace("\n", "<br>"),
            status: "active"
        }

        dispatch({ type: "ADD_ONE_TODO", payload })
        setTodo('')
    }
    return (
        <div className='d-flex gap-2 justify-content-center'>
            <div>
                <TextArea label='Add Todo' state={todo} setState={setTodo} />
            </div>
            <div className='d-flex flex-column'>
                <button className='btn' onClick={addTodoHandler}>
                    <i className='fa-solid fa-plus'></i>
                </button>
                <button className='btn' onClick={() => {
                    dispatch({ type: 'CHANGE_ACTIVE', payload: { key: 'isWantAdd', value: false } })
                }}>
                    <i className='fa-solid fa-x'></i>
                </button>
            </div>
        </div>
    )
}

export default AddTodo