
import ChartOne from "../components/Dashboard/ChartOne";
import LineChart from "../components/Dashboard/LineChart/LineChart";
import PieChart from "../components/Dashboard/PieChart/PieChart";
import ProjectOverview from "../components/Dashboard/ProjectOverview/ProjectOverview";
import StatisticChart from "../components/Dashboard/StatisticChart/StatisticChart";
import TopCard from "../components/_Shared/topCard/TopCard";
import WithLayout from "../hoc";
import './Dashboard.scss';



function Dashboard() {
    return ( 
      <div className="dashboard-outer">
          <div className="top-section">
            <TopCard title = "Total Revenue" descr = "$685.59" />
            <TopCard title = "Activity" descr = "21 upcoming projects"/>
          </div>

          <div className="second-section">
            <ProjectOverview />
            <StatisticChart />
          </div>
          <div className="third-section">
            <PieChart />
            <LineChart />
            </div>


      </div>
     
    
      
    );
}

export default WithLayout(Dashboard);
