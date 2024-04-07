import "./Tables.css";
import { Link } from "react-router-dom";

function AllProjects() {

    // const [projects, setProjects] = useState([]);

    // Get all projects

    // useEffect(() => {
    //     function getProjects() {
    //         axios.get("http://localhost:8070/project/")
    //             .then((res) => {
    //                 // console.log(res.data);
    //                 setProjects(res.data);
    //             })
    //             .catch((err) => {
    //                 alert(err.message);
    //             });
    //     }

    //     getProjects();
    // }, []);

    // Delete a project

    // const handleDelete = async (id) => {
    //     const confirmDelete = window.confirm("Are you sure you want to delete this record?");
    //     if (confirmDelete) {
    //         try {
    //             await axios.delete(`http://localhost:8070/project/delete/${id}`);
    //             // Remove the deleted student from the state
    //             setProjects(projects.filter(project => project._id !== id));
    //         } catch (error) {
    //             console.error("Error deleting record:", error);
    //             alert("An error occurred while deleting the record");
    //         }
    //     }
    // };

    return (  
        <div className="container">
            <br></br>
            <h3>Projects</h3>
            <table>
                <thead>
                    <tr>
                        <th>PID</th>
                        <th>CID</th>
                        <th>Type</th>
                        <th>Date</th>
                        <th>Status</th>
                        <th>Comments</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>P001</td>
                        <td>xxx</td>
                        <td>xxx</td>
                        <td>xxx</td>
                        <td>xxx</td>
                        <td>xxx</td>
                        <td>
                            <Link to={"/installation-management/update-project"} className="btn btn-warning">Update</Link>
                            <button type="button" className="btn btn-danger">Delete</button>
                        </td>
                    </tr>
                    <tr>
                        <td>P002</td>
                        <td>xxx</td>
                        <td>xxx</td>
                        <td>xxx</td>
                        <td>xxx</td>
                        <td>xxx</td>
                        <td>
                        <Link to={"/installation-management/update-project"} className="btn btn-warning">Update</Link>
                            <button type="button" className="btn btn-danger">Delete</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default AllProjects;
