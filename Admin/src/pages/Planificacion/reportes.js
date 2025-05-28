import PropTypes from 'prop-types';
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

const Dashboard = props => {
  const [menu, setMenu] = useState(false);
  const toggle = () => {
    setMenu(!menu);
  };
  document.title = "Reportes Mensuales | 7 AM Digital";
  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <div className="page-title-box">
            <Row className="align-items-center">
              <Col md={8}>
                <h6 className="page-title">Reportes mensuales de rendimiento</h6>
                <ol className="breadcrumb m-0">
                  <li className="breadcrumb-item active">7AM Digital</li>
                </ol>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </React.Fragment>
  );
};

Dashboard.propTypes = {
  t: PropTypes.any
};

// export default withTranslation()(Dashboard);
export default Dashboard;
