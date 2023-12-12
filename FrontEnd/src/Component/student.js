import * as React from "react";
import { useState,useEffect } from "react";

export default function Student() {
  
  const [name,setName]=useState('');
  const [address,setAddress]=useState('');

  const [all,setAll]=useState([]);

  const helper=(e)=>{
    e.preventDefault();
    const stud={name,address};
    console.log(stud);

    fetch("http://www.localhost:8080/add",{
        method:'POST',
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(stud)
    }).then(()=>{
        console.log("User is added");
    })
  }

 useEffect(()=>{
    fetch("http://www.localhost:8080/getAll")
    .then(res=>res.json())
    .then((result)=>setAll(result))
 },[])

 const ulStyle = {
    listStyle: 'none',
    padding: 0,
    margin: 0,
  };
  return (
    <div className="container">
      <center>
      <form className="col-md-3">
        <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Student Name</label><br></br>
            <input type="text"id="exampleInputEmail1" aria-describedby="emailHelp" value={name} onChange={(e)=>setName(e.target.value)}/>
            
        </div>
        <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Address</label><br></br>
            <input type="text"  id="exampleInputPassword1" value={address} onChange={(e)=>setAddress(e.target.value)}/>
        </div>
       
        <button type="submit" className="btn btn-primary" onClick={helper}>Submit</button>
        </form>
        
        <div>
            <h1>List of Student</h1>
            <ul style={ulStyle}>
                {all.map((item) => (
                <li className="mb-2" key={item.id}>{item.id}{item.name}{item.address}</li>
                ))}
            </ul>
        </div>

       
        
      </center>
    </div>
  );
}
