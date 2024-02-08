import { useEffect, useState } from 'react'
import './App.css'
import { TodoProvider } from './context/todoContext'
import TodoForm from './components/TodoForm'
import TodoItem from './components/TodoItem'

function App() {
  const [todos, setTodos] = useState([])

  const addTodo = (todo) => {
    setTodos((prev)=>{
      return [{id : Math.random(), ...todo},...prev]
    })
  }

  const updateTodo = (id, todo) => {
    setTodos((prev)=>{
      return prev.map((preTodo)=>{
        if (preTodo.id === id) {
          return todo
        } else {
          return preTodo
        }
      })
    })
  }
  
  const deleteTodo = (id) => {
    setTodos((prev)=>{
      return prev.filter((preTodo)=>{
        return preTodo.id !== id
      })
    })
  }

  const toggleComplete = (id) => {
    setTodos((prev)=>{
      return prev.map((preTodo)=>{
        if (preTodo.id === id) {
          return {...preTodo, completed : !preTodo.completed}
        } else {
          return preTodo
        }
      })
    })
  }

  useEffect(()=>{
    // const todos = JSON.parse(localStorage.getItem("todos"))
    // if (todos && todos.length > 0) {
    //   setTodos(todos)
    // }
    let todosData = localStorage.getItem("todos");
    if (todosData && todosData !== "undefined") {
      const todos = JSON.parse(todosData);
      if (todos && todos.length > 0) {
        setTodos(todos);
      }
    }
  },[])

  useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(todos))
  }, [todos])

  return (
    <TodoProvider value={{addTodo,deleteTodo,todos,toggleComplete,updateTodo}}>
    <div className="bg-[#172842] min-h-screen py-8">
      <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
        <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
        <div className="mb-4">
            {/* Todo form goes here */} 
            <TodoForm/>
        </div>
        <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
            {todos.map((todo)=>{
              return <div key={todo.id} className='w-full'>
                    <TodoItem todo={todo}/>
                  </div>
            })}
        </div>
      </div>
    </div>
    </TodoProvider >
  )
}

export default App
