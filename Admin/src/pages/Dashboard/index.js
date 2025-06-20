import PropTypes from 'prop-types';
import React from "react";
import { Container, Row, Col } from "reactstrap";
import MetricoolPanel from 'components/Metricool/MetricoolPanel';

const Dashboard = () => {
  document.title = "Dashboard | 7 AM Digital";

  return (
    <React.Fragment>
      <div className="page-content" style={{ padding: 0 }}>
        <Container fluid className="p-0 m-0">
          <Row className="m-0 p-0">
            <Col md={12} className="p-0 m-0">
              <MetricoolPanel />
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

Dashboard.propTypes = {
  t: PropTypes.any
};

export default Dashboard;



/*import PropTypes from 'prop-types';
import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Card,
  CardBody,
  Input,
  Dropdown,
  DropdownToggle,
  DropdownItem,
  DropdownMenu
} from "reactstrap";
import { Link } from "react-router-dom";

import MetricoolPanel from 'components/Metricool/MetricoolPanel';

const Dashboard = () => {
  const token = 'BYYGMTUNSPCPMYOOFQMYSPFVEAVCMDLZLPRPRVAMHSXGRVHHDVXVHWQGQKDBOEBR'; 

  return <MetricoolPanel loginToken={token} />;

  
const Dashboard = props => {
  const [menu, setMenu] = useState(false);
  const toggle = () => {
    setMenu(!menu);
  };
  document.title = "Dashboard | 7 AM Digital";
  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <div className="page-title-box">
            <Row className="align-items-center">
              <Col md={8}>
                <h6 className="page-title">Dashboard</h6>
                <ol className="breadcrumb m-0">
                  <li className="breadcrumb-item active">Bienvenido a Dashboard 7AM Digital</li>
                </ol>
              </Col>
              </Row>
          </div>
            
        </Container>
      </div> 
    </React.Fragment>
  );
};
};

Dashboard.propTypes = {
  t: PropTypes.any
};

// export default withTranslation()(Dashboard);
export default Dashboard;*/


