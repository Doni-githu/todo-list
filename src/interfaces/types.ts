import { Dispatch, ReactNode } from "react";

export type FilterType = 'all' | 'active' | 'completed'
export type TodoType = "active" | "completed"
export interface ITodo {
    todo: string,
    status: TodoType,
    id: string,
}


export interface TodoStates {
    todos: ITodo[],
    filter: FilterType,
    isWantChange: boolean,
    isWantAdd: boolean
}





export type Types = "ADD_ONE_TODO" |
    "CHANGE_STATUS" |
    "CHANGE_FILTER" |
    "CLEAR_COMPLETED" |
    "DELETE_TODO" |
    "CHANGE_TODO" |
    "CHANGE_ACTIVE"

export interface TodoAction {
    type: Types,
    payload?: any
}


export interface AppProviderProps {
    children: ReactNode
}

export interface IContext<T, G> {
    state: T,
    dispatch: Dispatch<G>
}