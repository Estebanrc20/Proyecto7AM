import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Card, CardBody } from "reactstrap";

//Import Image
/*import avatar2 from "../../assets/images/users/user-2.jpg";
import img3 from "../../assets/images/small/img-3.jpg";
import img4 from "../../assets/images/small/img-4.jpg";*/

//Import Breadcrumb
//import Breadcrumbs from "../../components/Common/Breadcrumb";

//Import Email Sidebar
//import EmailSideBar from "./email-sidebar";

//Import Email Topbar
//import EmailToolbar from "./email-toolbar";

const Analisis = () => {
  document.title = "Estadisticas | 7AM Digital";
  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <div className="page-title-box">
            <Row className="align-items-center">
              <Col md={8}>
                <h6 className="page-title">Analisis de estadistica en tiempo real</h6>
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

export default Analisis;
