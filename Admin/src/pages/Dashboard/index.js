import PropTypes from 'prop-types';
import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody
} from "reactstrap";

import MetricoolPanel from 'components/Metricool/MetricoolPanel';

const Dashboard = () => {
  document.title = "Dashboard | 7 AM Digital";

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid={true}>
          <div className="page-title-box">
            <Row className="align-items-center">
              <Col md={8}>
                <h6 className="page-title">Dashboard</h6>
                <ol className="breadcrumb m-0">
                  <li className="breadcrumb-item active">7AM Digital</li>
                </ol>
              </Col>
            </Row>
          </div>
          <Row>
            <Col md={12}>
              <Card>
                <CardBody>
                  <MetricoolPanel />
                </CardBody>
              </Card>
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
