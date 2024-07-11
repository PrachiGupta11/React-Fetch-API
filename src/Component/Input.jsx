import React, { useEffect, useState } from 'react';
import './Input.css';

function Input()
{
  const[userData,setUserData]=useState([]);
  const[name,setName]=useState("");
  
  useEffect(()=>
    {
      getUser();
    })
  
  function getUser()   // Fetch Data from API
    {
fetch("https://jsonplaceholder.typicode.com/users").then((result)=>{
        result.json().then((response)=>{
          setUserData(response);
        })
      })
    }

  function addUser()   // POST method, Add data
    {
      let data={name};
      fetch("https://jsonplaceholder.typicode.com/users",
      {
        method:"POST",
        headers:{
          'accept':'application/json',
          'Content-Type': 'application/json'
          },
        body: JSON.stringify(data)
      }
    ).then((result)=>{
        result.json().then((response)=>{
          console.log("response",response)
        })
    })
    }
  return(
    <div>
      <div id='header'>
        <h1>Digikull Students</h1>
      </div>
      <div id='content'>
        <h1>Hello User</h1>
        <input type="text" placeholder="Enter Name" onChange={(e)=>setName(e.target.value)} value={name} />
        <button onClick={addUser}>ADD</button>
      </div>
      <div id='list'>
        <ul>
        {
         userData.map((item,index)=>
           <li key={index}>
             {item.name}
           </li>
           )
        }
        </ul>
      </div>
      
    </div>
  )
}

export default Input;