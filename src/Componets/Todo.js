import React, { useEffect, useRef, useState } from 'react'
function Todo() {
    const [todo, setTodo] = useState('')
    const [todos, setTodos] = useState([])
    const [editId,seteditId]=useState(0)
    const [searchInput,setSearchInput]=useState('')
    const [searchData,setSearchData]=useState([todos])
    const handleSubmit = (e) => {
        e.preventDefault()
    }
    const addTodo = () => {
      if(todo!==''){
        setTodos([...todos, { id: new Date().getTime(), task: todo }])
        setTodo('')
      }
      if(editId){
        const editItem=todos.find(todo=>todo.id===editId)
        const updatedTodo=todos.map(uptodo=>uptodo.id===editItem.id?
        (uptodo={id:uptodo.id,task:todo}):(uptodo={id:uptodo.id,task:uptodo.task}))
        setTodos(updatedTodo)
        seteditId(0)
        setTodo('')
      }
    }
    const deleteTodo = (id) => {
        // const newTodo = todos.filter(todo => todo.id !== id)
        setTodos(todos=>todos.filter(todo=>todo.id !==id))
        console.log(todos)
    }
    const editTodo=(id)=>{
      const  editItem=todos.find(todo=>todo.id===id)
      setTodo(editItem.task)
      seteditId(editItem.id)
    }
   
   useEffect(()=>{
    setSearchData(todos.filter(itm=>{
        if(searchInput===""){
            return true
        }else if(itm.task.startsWith(searchInput)){
            return true
        }
    }))
   },[searchInput,todos])
    return (
        <div>
            <h1>Todo...List</h1>
            <form onSubmit={handleSubmit}>
                <input type='text'value={todo} onChange={e => setTodo(e.target.value)} ></input>
                <input type='text' placeholder='search' value={searchInput} onChange={e=>setSearchInput(e.target.value)}></input>
                <button onClick={addTodo} >{editId?"EDIT":"ADD"}</button>
                {searchData.map(todo => {
                    return (
                        <div key={todo.id}>{todo.task}<i class="fa-solid fa-edit " onClick={()=>editTodo(todo.id)} style={{ marginLeft: '160px' }}></i><i class="fa-solid fa-trash " style={{ marginLeft: '20px' }} onClick={()=>deleteTodo(todo.id)}></i></div>
                    )
                })}
              
            </form>
        </div>
    )
}
export default Todo