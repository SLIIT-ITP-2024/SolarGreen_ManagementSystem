import React, { useState } from "react";
import WithLayout from "../../../hoc/WithLayout";
import "../AddProject/AddProject.css";
import { Link } from "react-router-dom";

function UpdateProject() {
  const { id } = useParams();
  // const [customerID, setCustomerID] = useState("");
  // const [customerName, setCustomerName] = useState("");
  // const [projectID, setProjectID] = useState("");
  // const [date, setDate] = useState("");
  // const [estimatedCost, setEstimatedCost] = useState("");
  // const [estimatedDuration, setEstimatedDuration] = useState("");
  const [projectType, setProjectType] = useState("");
  const [projectSize, setProjectSize] = useState("");
  const [status, setStatus] = useState("Pending");
  const [comments, setComments] = useState("");

  // useEffect(() => {
  //     axios.get(`http://localhost:8070/project/get/${_id}`)
  //         .then((res) => {
  //             const project = res.data.project;
  //             setName(student.name);
  //             setAge(student.age);
  //             setGender(student.gender);
  //         })
  //         .catch((err) => {
  //             console.log(err);
  //         });
  // }, [_id]);

  return (
    <div>
      <div className="container">
        <h3>Update Project</h3>
        <h3>{id}</h3>
        <form>
          <div className="row">
            <div className="col">
              <div className="form-group">
                <label htmlFor="cID">Customer ID</label>
                <input
                  type="text"
                  className="form-control"
                  id="cID"
                  value={"C00"}
                  readOnly
                />
              </div>
            </div>
            <div className="col">
              <div className="form-group">
                <label htmlFor="cName">Customer Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="cName"
                  value={"xxx"}
                  readOnly
                />
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col">
              <div className="form-group">
                <label htmlFor="cID">Project ID</label>
                <input
                  type="text"
                  className="form-control"
                  id="pID"
                  value={"P00"}
                  readOnly
                />
              </div>
            </div>
            <div className="col">
              <div className="form-group">
                <label htmlFor="gender">Project Status</label>
                <select
                  className="form-control"
                  id="status"
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                >
                  <option value="">Select Status</option>
                  <option value="Pending">Pending</option>
                  <option value="Completed">Completed</option>
                  <option value="On hold">On hold</option>
                </select>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col">
              <div className="form-group">
                <label htmlFor="gender">Project Type</label>
                <select
                  className="form-control"
                  id="pType"
                  onChange={(e) => setProjectType(e.target.value)}
                >
                  <option value="">Select Type</option>
                  <option value="Solar Water Heating System">
                    Solar Water Heating System
                  </option>
                  <option value="Residential Rooftop Solar PV System">
                    Residential Rooftop Solar PV System
                  </option>
                  <option value="Solar Street Lighting System">
                    Solar Street Lighting System
                  </option>
                </select>
              </div>
            </div>
            <div className="col">
              <div className="form-group">
                <label htmlFor="projectSize">Project Size</label>
                <select
                  className="form-control"
                  id="projectSize"
                  onChange={(e) => setProjectSize(e.target.value)}
                >
                  <option value="">Select Size</option>
                  <option value="Small">Small</option>
                  <option value="Medium">Medium</option>
                  <option value="Large">Large</option>
                </select>
              </div>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="comments">Comments</label>
            <input
              type="text"
              className="form-control"
              id="comments"
              onChange={(e) => setComments(e.target.value)}
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Update
          </button>
          <Link to={"/installation-management"} className="btn btn-primary">
            Cancel
          </Link>
        </form>
      </div>
    </div>
  );
}

export default WithLayout(UpdateProject);
