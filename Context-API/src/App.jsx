import './App.css'
import Login from './components/Login'
import Profile from './components/Profile'
import UserContextProvider from './context/UserContextProvider'

function App() {
  

  return (
    <UserContextProvider>
      <h1 className='text-center text-2xl font-bold bg-orange-500 p-5'>Context API in React</h1>
      <Login/>
      <Profile/>
    </UserContextProvider>
  )
}

export default App
