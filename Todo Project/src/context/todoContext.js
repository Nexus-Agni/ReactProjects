import { createContext, useContext } from "react";

export const TodoContext = createContext({
    todos : [
        {
            id : 1,
            todo : "This is todo msg",
            completed : false
        }
    ],
    updateTodo : (id, todo ) => {},
    deleteTodo : (id) => {},
    addTodo : (todo) => {},
    toggleComplete : (id) => {}
})


export const useTodo = () => {
    return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider