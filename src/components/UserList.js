import React, {useState} from 'react';
import TodoList from "./TodoList";

const initialUsers = [
    {id:1,name: 'Chalo',lastname: 'Salvador'},
    {id:2,name: 'María',lastname: 'Morales'},
    {id:3,name: 'Andrés',lastname: 'Andrade'}
];

const UserList = () => {

    const [users,setUsers]=useState(initialUsers);
    const [error,setError] = useState(null);

    const handleAddUser = () => {
        console.log("handleAddUser ");
        //VALOR DE LO INPUTS
        const name = document.querySelector("#name").value;
        const lastname = document.querySelector("#lastname").value;


        if (name=== " " || lastname === ""){
            //alert("Ingrese los datos")
            setError("Ingrese todos los campos")
            return
        }

        //expresiones reguilares contien datos que no son
        const regex = /[0-9]/
        const containsNumber =  regex.test(name+lastname);
        if(containsNumber){
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
        const newUser = {
            id: users.length + 1,
            name,
            lastname
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
        setUsers((prevState) =>[...users, newUser])

        //vaciar p[antalla de nombre y apellido
        document.querySelector("#name").value=" ";
        document.querySelector("#lastname").value= " ";


    }


    return (
        <div>
            <h1>Crear nuevos usuarios</h1>
            <div>
                <div>
                    <label htmlFor='name'>Nombre : </label>
                    <input type='text' id='name' />
                </div>

                <div>
                    <label htmlFor='lastname'> Apellido :</label>
                    <input type='text' id='lastname' />
                </div>


                {error && <div className="error">El dormumlario contiene erorres {error}</div>}


                <div>
                    <button onClick={handleAddUser} >Agregar usuario</button>
                </div>
            </div>

            <h1>Lista de usuarios ({users.length} usuarios )</h1>
            <ul>
                {users.map( ( user, index ) => (
                    <li key={ user.id }>
                        { user.id }. { user.name } { user.lastname }
                    </li>))}
            </ul>

            <TodoList/>
        </div>


    );
};

export default UserList;
