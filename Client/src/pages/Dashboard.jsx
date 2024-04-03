
import ChartOne from "../components/Dashboard/ChartOne";
import WithLayout from "../hoc";
import './Dashboard.scss';
function Dashboard() {
    return ( 
      <div className="text-center">
          <ChartOne />
      </div>
     
    
      
    );
}

export default WithLayout(Dashboard);
