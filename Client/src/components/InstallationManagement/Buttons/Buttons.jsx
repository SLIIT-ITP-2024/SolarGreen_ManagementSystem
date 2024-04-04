import "./Buttons.css"
import { Link } from "react-router-dom";

function Buttons() {
     
    return(
        <>
            <div className="first-row">
                <button className="btn btn-primary">New Project +</button>
                <Link to={"/installation-management/estimations"} className="btn btn-primary">Estimations</Link>
            </div>

            <button className="btn btn-primary">Generate report</button>

        </>
        
    );

}

export default Buttons