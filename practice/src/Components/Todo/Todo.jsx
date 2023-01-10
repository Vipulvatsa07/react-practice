import React from "react";
import { useState } from "react";

const Todo = () => {
  const [text, setText] = useState("");
  const [update, setUpdate] = useState([]);
  const [done, setDone] = useState("InCompleted");

  function handleChange(e) {
  
    setText(e.target.value);
  }
  function handleClick() {
    if(text==="")
    {
      return(
      alert("please enter something")
      )
    }
   
    setUpdate((olditems) => {
      return [...olditems, text];
    });

    console.log(update);
    setText("");
  }
  function handleDelete(id) {
    // console.log("hello")
    setUpdate((olditems) => {
      return olditems.filter((arrElem, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <h1>Todo</h1>
      <input type="addTodo" onChange={handleChange} value={text} />
      <button onClick={handleClick}>ADD</button>
      {update.map((el, index) => (
        <div style={{display:"flex",margin:"20px"}}>
          <ul style={{display:"flex",margin:"20px"}} >
            <li>
              {el}
              <button
                onClick={(()=>{done === "InCompleted"
                ? setDone("Completed")
                : setDone("InCompleted")})
                  
                }
              >
                {done}
              </button>
              <button
                onClick={() => {
                  handleDelete(index);
                }}
              >
                Delete
              </button>
            </li>
          </ul>
        </div>
      ))}

      <h1>{text}</h1>
    </div>
  );
};

export default Todo;
