import React, { useContext } from 'react'
import Checkbox from '../../uiComponents/CheckBox/Checkbox'
import './Item.scss'
import { IItemProps } from "./Item.props"
import { context } from '../../context'
import { IContext, TodoAction, TodoStates } from '../../interfaces/types'

const Item = ({ todo, setStatus }: IItemProps) => {
    const { dispatch } = useContext(context) as IContext<TodoStates, TodoAction>
    return (
        <div className={`list-group-item d-flex align-middle gap-2`}>
            <div onClick={() => {
                if (todo.status === "active") {
                    setStatus("completed", todo.id)
                } else {
                    setStatus("active", todo.id)
                }
            }}>
                <Checkbox todo={todo} />
            </div>
            <div>
                <p className={todo.status === "completed" ? "text-decoration-line-through" : ''}>{todo.todo}</p>
            </div>
        </div>
    )
}

export default Item