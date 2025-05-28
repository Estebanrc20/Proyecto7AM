import React from "react";

import { Link } from "react-router-dom";
import { Container, Row, Col, Button, Input, Label, Card } from "reactstrap";

//Import Breadcrumb
/*import Breadcrumbs from "../../components/Common/Breadcrumb";

//Import Email Sidebar
import EmailSideBar from "./email-sidebar";

//Import Email Topbar
import EmailToolbar from "./email-toolbar";*/

const PublicacionSimultanea = () => {
  document.title = "Publicacion simultanea en varios canales digitales | 7AM Digital";
  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <div className="page-title-box">
            <Row className="align-items-center">
              <Col md={8}>
                <h6 className="page-title">Publicación simultánea en varios canales digitales</h6>
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

export default PublicacionSimultanea;
