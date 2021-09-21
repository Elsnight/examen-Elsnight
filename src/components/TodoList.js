import React, {useEffect, useState} from 'react';
import {findByDisplayValue} from "@testing-library/react";

const initialTask = [
    {id:1,task: 'Lavar la ropa'},
    {id:2,task: 'cambiar cortinas'},
    {id:3,task: 'Salir al banco '}
];

const TodoList = () => {

    const [tasks,setTasks]=useState(initialTask);
    const [error,setError] = useState(null);
    const [ completed,setCompleted] = useState([]);

    const [ windowWidth, setWindowWidth ] = React.useState( window.innerWidth );

    const handleAddTask = () => {
        //VALOR DE LO INPUTS
        const task = document.querySelector("#task").value;
       // setTasks(prevState =>[...prevState,task]);
        


        if (task=== " " ){
            //alert("Ingrese los datos")
            setError("Ingrese todos los campos")
            return
        }

        //expresiones reguilares contien datos que no son
        const regex = /[0-9]/
        const containsNumberdos =  regex.test(task);
        if(containsNumberdos){
            setError("Los campos no pueden tener numeros ")
            return;
        }




        /*const newUsers = {
            id: users.length,
            name:name,
            lastname:lastname
        }*/
        setError(null)
        //CREATE A NEW USER
        const newTask = {
            id: tasks.length + 1,
            task
        };
        /*let newUsers = [];
        users.forEach((user,index) =>{
            newUsers[index]=user;
        });
        newUsers[newUsers.length]=newUsers
        */
        //CREATE A NEW ARRAY modo 1 WITH USER OLD NEXT TO NEWUSERS
        // const newUsersList = [...users, newUser];
        //    setUsers(newUsersList);

        //create un new array modo 2
        setTasks((prevState) =>[...tasks, newTask])

        //vaciar p[antalla de nombre y apellido
        document.querySelector("#task").value=" ";
    }

    useEffect( () => {
        console.log("Ejecución del efecto");
        window.addEventListener("resize", handleResize);


        //SE DESMONTA EL COMPONENTEN
        return () => {
            console.log("SE DEMSONTO EL COMPPONENTE");
            window.removeEventListener("resize",handleResize);
        };
      },[]);

    const handleResize = () =>{
        console.log("handleResize",windowWidth)
        setWindowWidth(window.innerWidth)
    }


    //Eliminar tareas
    const handleDeleteTask = (index) => {
        setTasks((prevState) =>{
            return prevState.filter( ( task,i ) => i !== index );
        });
    };

    //tareas completadas
    const handleCompleteTask = ( index ) => {
        setCompleted( ( prevState ) => [
            ...prevState,
            tasks[ index ]
        ] );

        handleDeleteTask( index );
    };






    return (

        <div>

            {/*CREAMOS TAREAS */}
            <h1>Crear nuevos tareas</h1>
            <div>
                <div>
                    <label htmlFor='task'>Tarea : </label>
                    <input type='text' id='task' />
                </div>


                {error && <div className="error">La tarea contiene errorres {error}</div>}


                <div>
                    <button onClick={handleAddTask} >Agregar tarea</button>
                </div>
            </div>

            {/*BORRAMOS TAREAS */}

            <h1>Lista de tareas ({tasks.length} tareas )</h1>
            <ul>
                {tasks.map( ( task,index ) => (
                    <li key={ task.id }>
                         { task.task }
                            <button onClick={() => handleDeleteTask( index )} >Eliminar</button>
                            <button onClick={() => handleCompleteTask( index )} >Completada</button>
                    </li>))}
            </ul>

            {/* TAREAS COMPLETADAS*/}

            <h1>Lista de tareas completadas ({completed.length}) en total </h1>
            <ul>
                {completed.map( ( task,index ) => (
                    <li key={ task.id }>
                        { task.task }
                    </li>))}
            </ul>
        <div>Ancho de la ventana: { windowWidth }</div>
        </div>

    );
};

export default TodoList;
