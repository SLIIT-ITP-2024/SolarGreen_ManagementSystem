import "./Buttons.css";
import { Link } from "react-router-dom";

function Buttons() {
  return (
    <div>
      <div className="first-row">
        <Link
          to={"/installation-management/new-project"}
          className="btn btn-primary"
        >
          New Project +
        </Link>
        <Link
          to={"/installation-management/estimations"}
          className="btn btn-primary"
        >
          Estimations
        </Link>
      </div>

      <Link
        to={"/installation-management/generate-report"}
        className="btn btn-primary"
      >
        Generate report
      </Link>
    </div>
  );
}

export default Buttons;
