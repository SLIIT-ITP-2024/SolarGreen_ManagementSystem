import "./Buttons.css"
import { Link } from "react-router-dom";

function Buttons() {
     
    return(
        <div>
            <div className="first-row">
                <Link to={"/installation-management/newProject"} className="btn btn-primary">New Project +</Link>
                <Link to={"/installation-management/estimations"} className="btn btn-primary">Estimations</Link>
            </div>

            <button className="btn btn-primary">Generate report</button>

        </div>
        
    );

}

export default Buttons