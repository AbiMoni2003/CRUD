import { useEffect, useState } from "react"
import axios from "axios";

function App() {
    const [users,setUsers] = useState([]);
    const [filterUsers,setFilterUser] =useState([])
    const [modelOpen,setModelOpen] =useState(false);
    const [userData,setUserData]=useState({Name:"",Age:""});

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
        const filterdUsers = users.filter((user)=>user.Name.toLowerCase().includes(searchText) ||
        user.Age.toString().includes(searchText)
      )
       setFilterUser(filterdUsers)
   }

   const deleteUser= async(_id)=>{
    const confrom = window.confirm("Are You Sure?");
    if(confrom){
       await  axios.delete(`https://crud-1x9p.onrender.com/movies/${_id}`).then
    ((res)=>{
      getAllUsers();
    })
   }
    }

 
    const handleAdd=()=>{
        setUserData({Name:"",Age:""})
        setModelOpen(true)
    }

    const handleData =(e)=>{
        setUserData({...userData,[e.target.name]:e.target.value})
    }

    const handleSubmit=(e)=>{
      e.preventDefault();
      if(userData._id){
        axios.put(`https://crud-1x9p.onrender.com/movies/${userData._id}`,userData).then
        ((res)=>{
          console.log(res);
           getAllUsers();
        })
      }
      else{
        axios.post("https://crud-1x9p.onrender.com/movies/",userData).then
      ((res)=>{
        console.log(res);
        setModelOpen(false)
         getAllUsers();
      })
      }
      setModelOpen(false);
      
    }

    const handleEdit=async(user)=>{
      setUserData(user)
      setModelOpen(true)
    }


  return (
    <>
      <div className="container">
        <h1>CRUD OPERATION USING NODEJS</h1>
        <div className="search-div">
          <input type="search" placeholder="Search" onChange={handleSearchChange}/>
          <button className="btn green" onClick={handleAdd}>Add Record</button>
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
                <td><button className="btn yellow" onClick={()=>handleEdit(user)} >Edit</button></td>
                <td><button className="btn red" onClick={()=>deleteUser(user._id)}>Delete</button></td>
              </tr>
            ))}
          </tbody>
        </table>
        {modelOpen && 
          <div className="model">
            <div className="model-content">
              <span className="close" onClick={()=>setModelOpen(false)}>&times;</span>
              <h2>Add User Details</h2>
              <div className="input-group">
                <label htmlFor="Name">Full Name</label>
                <input type="text" name="Name" id="Name" value={userData.Name} onChange={handleData}/>
              </div>
              <div className="input-group">
                <label htmlFor="Age">Age</label>
                <input type="text" name="Age" id="Age" value={userData.Age} onChange={handleData}/>
              </div>
              <button className="btn green" onClick={handleSubmit}>Add User</button>
            </div>
            
          </div>
        }
      </div>
    </>
  )
}

export default App
