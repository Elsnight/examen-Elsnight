
import '../styles/App.css';
import UserList from "./UserList";
import TodoList from "./TodoList";
import {useState} from "react";
import UserInfo from "./UserInfo";
import Counter from "./Counter";
//<Counter/>
//<Users/>


function App() {
    const [showTodo,setShowTodo] =useState(true);

    const handleToggleTodoList = () => {
        setShowTodo(!showTodo);
    };

  return (
      <div>
          <Counter/>
          <UserInfo />
          <hr/>

            <div >
                <button onClick={handleToggleTodoList}>
                    {showTodo ? "Ocultar ":"Mostrar"} lista de tareas
                </button>
            </div>

          {showTodo && <TodoList/>}{/* Oculta al todolist*/}



      </div>

  );
}

export default App;
