import React from "react";
import { Row, Col, Card, Input, Container } from "reactstrap";

//Import Email Sidebar
/*import EmailSideBar from "./email-sidebar";
import { Editor } from "react-draft-wysiwyg";
//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"; */

const Gestion = () => {
    document.title = "Gestion de comentarios| 7AM Digital";
    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid>
                    <div className="page-title-box">
                        <Row className="align-items-center">
                            <Col md={8}>
                                <h6 className="page-title">Gestion de comentarios y reseñas</h6>
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

export default Gestion;