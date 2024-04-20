import "./Buttons.css";
import { Link } from "react-router-dom";

function Buttons() {
  return (
    <div>
      <div className="first-row">
        <Link
          to={"/installation-management/new-project"}
          className="btn btn-warning"
        >
          New Project +
        </Link>
        <Link
          to={"/installation-management/estimations"}
          className="btn btn-warning"
        >
          Estimations
        </Link>
      </div>

      <Link
        to={"/installation-management/generate-report"}
        className="btn btn-warning"
      >
        Generate report
      </Link>
    </div>
  );
}

export default Buttons;
