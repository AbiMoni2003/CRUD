import { useEffect, useState } from "react"
import axios from "axios";

function App() {
    const [users,setUsers] = useState([]);
    const [filterUsers,setFilterUser] =useState([])
    const getAllUsers=()=>{
      axios.get("https://crud-1x9p.onrender.com/movies/").then
      ((res)=>{
        setUsers(res.data);
        setFilterUser(res.data);
        console.log(res);
        
      })
      .catch((err) => console.error(err));
    }
   useEffect(()=>{
    getAllUsers();
   },[])

   const handleSearchChange =(e)=>{
        const searchText = e.target.value.toLowerCase();
        const filterdUsers = users.filter((user)=>user.Name.toLowerCase().includes(searchText)
      )
       setFilterUser(filterdUsers)
   }


  return (
    <>
      <div className="container">
        <h1>CRUD OPERATION USING NODEJS</h1>
        <div className="search-div">
          <input type="search" placeholder="Search" onChange={handleSearchChange}/>
          <button className="btn green">Add Record</button>
        </div>
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
            {Array.isArray(filterUsers) && filterUsers.map((user, index) => (
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
