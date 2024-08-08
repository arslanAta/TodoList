import './App.css'
import AddTodo from './components/AddTodo/AddTodo'
import Header from './components/Header/Header'
import TodoList from './components/TodoList/TodoList'

function App() {
  return (
    <div className='w-full h-screen flex justify-center items-center bg-[#ffe2c4]'>
      <div className='w-1/2 h-3/4 bg-[#f9f9f9] shadow-xl overflow-hidden rounded-lg grid grid-rows-[55px_1fr] grid-cols-12'>
        <Header />
        <TodoList />
        <AddTodo />
      </div>
    </div>
  )
}

export default App
