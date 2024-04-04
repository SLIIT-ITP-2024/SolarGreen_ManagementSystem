import "./Tables.css";

function AllProjects() {

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
                            <button type="button" className="btn btn-warning">Update</button>
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
                            <button type="button" className="btn btn-warning">Update</button>
                            <button type="button" className="btn btn-danger">Delete</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default AllProjects;
