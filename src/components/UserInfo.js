// const user =
// {
//     "id": 1,
//     "name": "Leanne Graham",
//     "username": "Bret",
//     "email": "Sincere@april.biz",
//     "address": {
//     "street": "Kulas Light",
//         "suite": "Apt. 556",
//         "city": "Gwenborough",
//         "zipcode": "92998-3874",
//         "geo": {
//         "lat": "-37.3159",
//             "lng": "81.1496"
//     }
// },
//     "phone": "1-770-736-8031 x56442",
//     "website": "hildegard.org",
//     "company": {
//     "name": "Romaguera-Crona",
//         "catchPhrase": "Multi-layered client-server neural-net",
//         "bs": "harness real-time e-markets"
// }
//
// }



import {useEffect, useState} from "react";

const UserInfo = () => {

    const [user,setUser] = useState(1);

    //llamda auna fuente de datos externa
    useEffect ( () =>  {
        //metodo 1
        // fetch("https://jsonplaceholder.typicode.com/users/6")
        //     .then((response)=>{
        //         console.log("response",response);
        //         return response.json();
        //
        //     })
        //     .then((data)=>{
        //         console.log("data",data);
        //         setUser(data);
        //
        //
        //
        //     })

        //METODO 2

        const getData = async () =>{
             const response =await fetch("https://jsonplaceholder.typicode.com/users/6");
            const data = await  response.json();
            setUser(data);
        }
        getData();

    },[]);

    if(!user){
        return "Cargando datos";
    }


    return (
        <div>

        <div> <strong> Nombre:</strong>{user.name}</div>
        <div> <strong> Username:</strong>{user.username}</div>
        {/*<div> <strong> Email:</strong>{" "}*/}
        {/*    <a href={`mailto: ${user.email}`}>{user.email}</a></div>*/}
        {/*<div> <strong> Direccion:</strong>{user.address.street},{user.address.suite} ,{""}*/}
        {/*    {user.address.city},{user.address.zipcode}</div>*/}
        <div> <strong> Telefono:</strong>{user.phone}</div>
        <div> <strong> Website:</strong> <a href={user.website}>{user.website}</a></div>
        
    </div> )

  
};



export default UserInfo;