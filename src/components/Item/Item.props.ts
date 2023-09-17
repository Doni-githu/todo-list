import { ITodo, TodoType } from "../../interfaces/types";

export interface IItemProps {
    todo: ITodo,
    setStatus: (status: TodoType, id: string) => void
}