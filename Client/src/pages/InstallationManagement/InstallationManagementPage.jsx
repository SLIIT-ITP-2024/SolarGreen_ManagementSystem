import React from "react";
import WithLayout from "../../hoc/WithLayout";
import Buttons from "../../components/InstallationManagement/Buttons/Buttons";
import AllProjects from "../../components/InstallationManagement/Table/AllProjects";
import SearchProject from "../../components/InstallationManagement/SearchProject/SearchProject";
import ProjectStatusChart from "../../components/InstallationManagement/ProjectStatusChart/ProjectStatusChart";

const InstallationManagementPage = () => {
  return (
    <div>
      <Buttons />
      <SearchProject />
      <AllProjects />
      <ProjectStatusChart />
    </div>
  );
};

export default WithLayout(InstallationManagementPage);
