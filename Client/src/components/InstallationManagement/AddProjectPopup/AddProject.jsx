import React, {useState} from "react"
import {Link} from "react-router-dom"

function AddProject() {

    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [gender, setGender] = useState("");


    return(
        <div className="container">
            <form>
                <div className="form-group">
                    <label for="name">Student Name</label>
                    <input type="text" className="form-control" id="name" placeholder="Enter Student Name"/>
                </div>
            
                <div className="form-group">
                    <label for="age">Student Age</label>
                    <input type="text" className="form-control" id="age" placeholder="Enter Student Age"/>
                </div>
            
                <div className="form-group">
                    <label for="age">Student Gender</label>
                    <input type="text" className="form-control" id="gender" placeholder="Enter Student Gender"/>
                </div>
            
                <button type="submit" className="btn btn-primary">Add</button>
            </form>
        </div>
    
  )
}

export default Withlayout(AddProject)
