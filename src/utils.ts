import { FilterType, ITodo } from "./interfaces/types"

const filterTodoHandler = (data: ITodo[], filter: FilterType) => {
    if (filter !== "all") {
        return data.filter((c) => c.status === filter)
    }

    return data
}

export {
    filterTodoHandler
}