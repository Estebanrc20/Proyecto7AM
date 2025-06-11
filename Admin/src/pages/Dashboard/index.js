import PropTypes from 'prop-types';
import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody
} from "reactstrap";

import MetricoolPanel from 'components/Metricool/MetricoolPanel';

const Dashboard = () => {
  const token = 'BYYGMTUNSPCPMYOOFQMYSPFVEAVCMDLZLPRPRVAMHSXGRVHHDVXVHWQGQKDBOEBR';
  const loginUrl = `https://app.metricool.com/autoin/KHDLAUEHUOLAKQCIJJXW`;

  document.title = "Dashboard | 7 AM Digital";

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid={true}>
          {/* Título similar al de la imagen de "Calendario" */}
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
                  <iframe
                    src={loginUrl}
                    style={{ width: '100%', height: '80vh', border: 'none' }}
                    title="Metricool White Label"
                  />
                </CardBody>
              </Card>
            </Col>
          </Row>

          {/* Texto centrado debajo del iframe */}
          <Row>
            <Col className="text-center mt-3">
              <p className="text-muted">
                Si no se abre automáticamente, <a href={loginUrl} target="_blank" rel="noopener noreferrer">haz clic aquí</a>.
              </p>
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


