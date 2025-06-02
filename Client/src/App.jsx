import { useEffect, useState } from "react"
import axios from "axios";

function App() {
    const [users,setUsers] = useState([]);
    const getAllUsers=()=>{
      axios.get("http://localhost:5000/movies").then
      ((res)=>{
        setUsers(res.data);
        console.log(res);
        
      })
    }
   useEffect(()=>{
    getAllUsers();
   },[])
  return (
    <>
      <div className="container">
        <h1>CRUD OPERATION USING NODEJS</h1>
        <table className="table">
          <thead>
            <tr>
              <th>S.No</th>
              <th>Name</th>
              <th>Age</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(users) && users.map((user, index) => (
              <tr key={user._id || index}>
                <td>{index + 1}</td>
                <td>{user.Name}</td>
                <td>{user.Age}</td>
                <td><button className="btn yellow">Edit</button></td>
                <td><button className="btn red">Delete</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default App
