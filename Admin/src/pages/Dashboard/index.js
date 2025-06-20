import React from "react";
import MetricoolPanel from 'components/Metricool/MetricoolPanel';

const Dashboard = () => {
  document.title = "Dashboard | 7 AM Digital";

  return (
    <React.Fragment>
      <MetricoolPanel />
    </React.Fragment>
  );
};

export default Dashboard;
