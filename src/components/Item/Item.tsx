import Checkbox from '../../uiComponents/CheckBox/CheckBox'
import './Item.scss'
import { IItemProps } from "./Item.props"

const Item = ({ todo, setStatus }: IItemProps) => {
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