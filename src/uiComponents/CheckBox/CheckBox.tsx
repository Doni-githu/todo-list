import React from 'react'
import './CheckBox.scss'
import { ITodo } from '../../interfaces/types'
export interface ICheckBoxProps {
    todo: ITodo,
}
const Checkbox = ({ todo }: ICheckBoxProps) => {
    return (
        <label>
            <input type="checkbox" className='hid' defaultChecked={todo.status === "completed" ? true : false} />
            <span className="fake"></span>
        </label>
    )
}

export default Checkbox