import React, {useState} from 'react'
import WithLayout from '../../../hoc/WithLayout'
import './AddProject.css'
import SolarWaterHeatingEquipment from '../../../components/InstallationManagement/EquipmentDetails/SolarWaterHeatingEquipment';
import ResidentialRooftopSolarPVEquipment from '../../../components/InstallationManagement/EquipmentDetails/ResidentialRooftopSolarPVEquipment';
import SolarStreetLightingEquipment from '../../../components/InstallationManagement/EquipmentDetails/SolarStreetLightingEquipment';
import { Link } from "react-router-dom";

function AddProject() {

    const [projectType, setProjectType] = useState("");
    const [projectSize, setProjectSize] = useState("");
    const [status, setStatus] = useState("Pending");
    const [cost, setCost] = useState(null);
    const [duration, setDuration] = useState(null);
    const [comments, setComments] = useState("");

    console.log(status);
    //Current date
    const getCurrentDate = () => {
        const date = new Date();
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
      };

      const handleCalculate = () => {
        // Placeholder logic for calculating estimated cost and duration
        let calculatedCost = 0;
        let calculatedDuration = 0;
        if (projectType === "Solar Water Heating System") {
            calculatedCost = 5000; // Example cost for Solar Water Heating System
            calculatedDuration = 7; // Example duration in days
        } else if (projectType === "Residential Rooftop Solar PV System") {
            calculatedCost = 10000; // Example cost for Residential Rooftop Solar PV System
            calculatedDuration = 14; // Example duration in days
        } else if (projectType === "Solar Street Lighting System") {
            calculatedCost = 8000; // Example cost for Solar Street Lighting System
            calculatedDuration = 10; // Example duration in days
        }

        // Placeholder logic for considering project size
        if (projectSize === "Large") {
            calculatedCost *= 1.2; // Increase cost by 20% for large projects
            calculatedDuration *= 1.1; // Increase duration by 10% for large projects
        }

        calculatedDuration = Math.ceil(calculatedDuration);

        setCost(calculatedCost);
        setDuration(calculatedDuration);
        };

        return(
            <div className="container">
                <h3>Create Project</h3>
                <form>
                    <div className="row">
                        <div className="col">
                            <div className="form-group">
                                <label htmlFor="cID">Customer ID</label>
                                <input type="text" className="form-control" id="cID" value={"C00"} readOnly/>
                            </div>
                        </div>
                        <div className="col">
                            <div className="form-group">
                                <label htmlFor="cName">Customer Name</label>
                                <input type="text" className="form-control" id="cName" value={"xxx"} readOnly/>
                            </div>
                        </div>
                    </div>
                    
                    <div className="row">
                        <div className="col">
                            <div className="form-group">
                                <label htmlFor="cID">Project ID</label>
                                <input type="text" className="form-control" id="pID" value={"P00"} readOnly/>
                            </div>
                        </div>
                        <div className="col">
                            <div className="form-group">
                                <label htmlFor="age">Date</label>
                                <input type="text" className="form-control" id="date" value={getCurrentDate()} readOnly/>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col">
                            <div className="form-group">
                                <label htmlFor="gender">Project Type</label>
                                <select className="form-control" id="pType" onChange={(e) => setProjectType(e.target.value)}>
                                    <option value="">Select Type</option>
                                    <option value="Solar Water Heating System">Solar Water Heating System</option>
                                    <option value="Residential Rooftop Solar PV System">Residential Rooftop Solar PV System</option>
                                    <option value="Solar Street Lighting System">Solar Street Lighting System</option>
                                </select>
                            </div>
                        </div>
                        <div className="col">
                            <div className="form-group">
                                <label htmlFor="projectSize">Project Size</label>
                                <select className="form-control" id="projectSize" onChange={(e) => setProjectSize(e.target.value)}>
                                    <option value="">Select Size</option>
                                    <option value="Small">Small</option>
                                    <option value="Medium">Medium</option>
                                    <option value="Large">Large</option>
                                </select>
                            </div>
                        </div>
                    </div>

                   
                    <button type="button" className="btn btn-secondary" onClick={handleCalculate}>Calculate Estimations</button>

                    {cost !== null && duration !== null &&
                        <div>

                            {projectType === "Solar Water Heating System" && projectSize !== "" && <SolarWaterHeatingEquipment/>}
                            {projectType === "Residential Rooftop Solar PV System" && projectSize !== "" && <ResidentialRooftopSolarPVEquipment />}
                            {projectType === "Solar Street Lighting System" && projectSize !== "" && <SolarStreetLightingEquipment />}
                            <br />

                            <div className="form-group">
                                <label htmlFor="cost">Estimated Cost</label>
                                <input type="text" className="form-control" id="cost" value={`Rs. ${cost}`} readOnly />
                            </div>

                            <div className="form-group">
                                <label htmlFor="duration">Estimated Duration</label>
                                <input type="text" className="form-control" id="duration" value={`${duration} days`} readOnly />
                            </div>


                            <div className="form-group">
                                <label htmlFor="comments">Comments</label>
                                <input type="text" className="form-control" id="comments" onChange={(e) => setComments(e.target.value)}/>
                            </div>

                            <button type="submit" className="btn btn-primary">Add Project</button>
                        </div>
                    }

                </form>
                
                <Link to={"/installation-management"} className="btn btn-primary">Cancel</Link>

            </div>
        
        )
}

export default WithLayout(AddProject);
