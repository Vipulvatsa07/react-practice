import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Todo.css";
const Todo = () => {
  const [todo, setTodo] = useState([]);
  // const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [task, setTask] = useState("");
  const [day, setDay] = useState("");
// ---------------------------------------------------------------
  //to get data
  const getData = () => {
    axios.get("http://localhost:8080/todo").then((res) => {
      console.log(res.data, "get");
      // console.log(typeof(res.data))
      setTodo(res.data);
    });
  };
// ---------------------------------------------------------------
  //to post data

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   const id=Date.now()
  //   const data = {id , name, task, day };
  //   console.log(data, "data");

  //   axios
  //     .post("http://localhost:8080/todo", data)
  //     .then((res) => {
  //       setTodo([...todo, data]);
  //       console.log(todo, "hello");
  //     })
  //     .catch((error) => console.error(error));
  // };


  const AddTodo = () => {

    if(name&&task&&day)
    {
      const id=Date.now()
      const data = {id , name, task, day };
      console.log(data, "data");
  
      axios
        .post("http://localhost:8080/todo", data)
        .then((res) => {
          setTodo([...todo, data]);
          console.log(todo, "hello");
        })
        .catch((error) => console.error(error));
    }
    
    else
    {
      alert("fill all the required fields")
    }
  }
  

  //----------------------------------------------------------------------------------------------------
  const updateTodo = (id) => {
    
    
    if(name&&task&&day)
    {
      const data = {name, task, day };
      // console.log(data, "data");
      console.log(data,"update")
      console.log(id)
      axios.patch(`http://localhost:8080/todo/${id}`, data)
        .then(res => {
          const updatedTodos = todo.map(todo => {
            if (todo.id === id) {
              return res.data;
            } else {
              return todo;
            }  
          });
          setTodo(updatedTodos);
          // setTodo([...todo, updatedTodos]);
        })
        .catch(error => console.log(error));
    }
    else
    {
      alert("fill all the required fields")
    }
    
  };

// ---------------------------------------------------------------------------
  //to delete post
   
  // const deleteTodo=(id)=>{
  //      axios.delete(`http://localhost:8080/todo/${id}`).then((res)=>{
  //       setTodo(todo.filter(todo=>todo.id!==id))
        
  //      })
  // }
  const deleteTodo = (id) => {
    console.log(id)
    axios.delete(`http://localhost:8080/todo/${id}`)
      .then((res) => {
        setTodo(todo.filter(todo => {
          console.log(id)
          return todo.id !== id;
        }));
      })
      .catch(error => console.error(error));
  };
  //------------------------------------------------------------------------------  
 
  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <h1 className="heading">Todos</h1>
      {/* <form onSubmit={handleSubmit}> */}
      
        {/* <label>
          ID:
          <input
            type="text"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
        </label> */}
        <br />
        <label>
        Task:
          <input
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
        
        </label>
        <br />
        <label>
        Day:
          <input
            type="text"
            value={day}
            onChange={(e) => setDay(e.target.value)}
          />
        </label>
        <br />
        <label>
        
          Assigned To:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <br />
        <button onClick={AddTodo}>Add Todo</button>
        {/* </form> */}
      <div>
        {todo.map((el) => (
          <div
          className="todo-item"
          >
            {/* ID:{el.id} */}
            <p>Task:{el.task}</p>
            <p>Day:{el.day}</p>
            <p>Assigned To:{el.name}</p>
            <div><button onClick={() => deleteTodo(el.id)} >Delete</button>
            <button onClick={() => updateTodo(el.id)} >Update</button></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Todo;
