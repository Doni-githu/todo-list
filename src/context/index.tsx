import { useReducer, createContext } from "react";
import { AppProviderProps, TodoAction, TodoStates } from "../interfaces/types";



const initialState: TodoStates = {
    todos: [],
    filter: 'all',
    isWantChange: false,
    isWantAdd: false
}

export const context = createContext({})

function reducer(state: TodoStates, action: TodoAction): TodoStates {
    switch (action.type) {
        case "ADD_ONE_TODO":
            return { ...state, todos: [...state.todos, action.payload] }
        case "CHANGE_FILTER":
            return {...state, filter: action.payload}
        case "CHANGE_STATUS":

            return { ...state }
        case "CHANGE_TODO":
            return state
        case "CLEAR_COMPLETED":
            const changedTodos = state.todos.map((item) => {
                if (item.id === action.payload[1]) {
                    return {
                        ...item,
                        status: action.payload[0]
                    }
                } else {
                    return item
                }
            })
            return {...state, todos: [...changedTodos]}
        case "DELETE_TODO":
            const newTodos = state.todos.filter((c) => c.id != action.payload)
            return { ...state, todos: newTodos }
        case "CHANGE_ACTIVE":
            return { ...state, [action.payload.key]: [action.payload.value] }
    }
}


function AppProvider({ children }: AppProviderProps) {
    const [state, dispatch] = useReducer(reducer, initialState)


    return (
        <context.Provider value={{ state, dispatch }}>
            {children}
        </context.Provider>
    )
}

export default AppProvider