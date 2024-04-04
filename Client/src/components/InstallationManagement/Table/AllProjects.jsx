import "./Tables.css";

function AllProjects() {
    const styles = {
        marginRight: "15px",
    };

    return (
        
        <div className="container">
            <br></br>
            <h3>Projects</h3>
            <table>
                <thead>
                    <tr>
                        <th>PID</th>
                        <th>Customer</th>
                        <th>Type</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>P001</td>
                        <td>xxx</td>
                        <td>xxx</td>
                        <td>xxx</td>
                        <td>
                            <button type="button" className="btn btn-warning" style={styles}>Update</button>
                            <button type="button" className="btn btn-danger">Delete</button>
                        </td>
                    </tr>
                    <tr>
                        <td>P002</td>
                        <td>xxx</td>
                        <td>xxx</td>
                        <td>xxx</td>
                        <td>
                            <button type="button" className="btn btn-warning" style={styles}>Update</button>
                            <button type="button" className="btn btn-danger">Delete</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default AllProjects;
