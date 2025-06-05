import PropTypes from "prop-types";
import React, { useEffect } from "react";
import { Row, Col, CardBody, Card, Container, Form, FormFeedback, Label, Input, Alert } from "reactstrap";

// Formik validation
import * as Yup from "yup";
import { useFormik } from "formik";

// action
import { registerUser, apiError, registerUserFailed } from "../../store/actions";

// Redux
import { connect, useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

// import images
import logoSm from "../../assets/images/logo7amblanco.png";

const Register = props => {
  const history = useNavigate();

  const dispatch = useDispatch();

  const { user } = useSelector(state => ({
    user: state.Account.user,
  }));

  useEffect(() => {
    if (user) {
      setTimeout(() => history("/login"), 3000);
    }
    // setTimeout(() => {
    //     dispatch(resetRegisterFlag());
    // }, 3000);

  }, [dispatch, user, history]);


  const validation = useFormik({
    // enableReinitialize : use this flag when initial values needs to be changed
    enableReinitialize: true,

    initialValues: {
      email: '',
      username: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().required("Por favor, introduzca su correo"),
      username: Yup.string().required("Por favor, introduzca su nombre de usuario"),
      password: Yup.string().required("Por favor, introduzca su contraseña"),
    }),
    onSubmit: (values) => {
      dispatch(registerUser(values));
    }
  });



  useEffect(() => {
    props.apiError("");
  }, []);

  document.title = "Registro | 7AM Digital";
  return (
    <React.Fragment>
      <div className="home-btn d-none d-sm-block">
        <Link to="/" className="text-dark">
          <i className="fas fa-home h2"></i>
        </Link>
      </div>
      <div className="account-pages my-5 pt-sm-5">
        <Container>
          <Row className="justify-content-center">
            <Col md={8} lg={6} xl={4}>
              <Card className="overflow-hidden">
                <div className="bg-primary">
                  <div className="text-primary text-center p-4">
                    <h5 className="text-white font-size-20">Registro Gratuito</h5>
                    <p className="text-white-50"></p>
                    <Link to="/index">
                      <img src={logoSm} height="45" alt="logo" />
                    </Link>
                  </div>
                </div>
                <CardBody className="p-4">
                  <div className="p-3">
                    {user ? (
                      <Alert color="success" style={{ marginTop: "13px" }} className="mt-5">
                        Registro usuario exitoso
                      </Alert>
                    ) : null}
                    <Form className="mt-4" onSubmit={(e) => {
                      e.preventDefault();
                      validation.handleSubmit();
                      return false;
                    }}
                      action="#">

                      <div className="mb-3">
                        <Label className="form-label" htmlFor="useremail">Correo electronico</Label>
                        <Input
                          name="email"
                          className="form-control"
                          placeholder="Ingresa tu correo electronico"
                          type="email"
                          id="useremail"
                          onChange={validation.handleChange}
                          onBlur={validation.handleBlur}
                          value={validation.values.email || ""}
                          invalid={
                            validation.touched.email && validation.errors.email ? true : false
                          }
                        />
                        {validation.touched.email && validation.errors.email ? (
                          <FormFeedback type="invalid">{validation.errors.email}</FormFeedback>
                        ) : null}
                      </div>

                      <div className="mb-3">
                        <Label className="form-label" htmlFor="username">Nombre de usuario</Label>
                        <Input
                          name="username"
                          className="form-control"
                          placeholder="Ingresa tu nombre de usuario"
                          type="text"
                          id="username"
                          onChange={validation.handleChange}
                          onBlur={validation.handleBlur}
                          value={validation.values.username || ""}
                          invalid={
                            validation.touched.username && validation.errors.username ? true : false
                          }
                        />
                        {validation.touched.username && validation.errors.username ? (
                          <FormFeedback type="invalid">{validation.errors.username}</FormFeedback>
                        ) : null}
                      </div>

                      <div className="mb-3">
                        <Label className="form-label" htmlFor="userpassword">Contraseña</Label>
                        <Input
                          name="password"
                          value={validation.values.password || ""}
                          type="password"
                          id="userpassword"
                          className="form-control"
                          placeholder="Ingresa tu contraseña"
                          onChange={validation.handleChange}
                          onBlur={validation.handleBlur}
                          invalid={
                            validation.touched.password && validation.errors.password ? true : false
                          }
                        />
                        {validation.touched.password && validation.errors.password ? (
                          <FormFeedback type="invalid">{validation.errors.password}</FormFeedback>
                        ) : null}
                      </div>

                      <div className="mb-3 row">
                        <div className="col-12 text-end">
                          <button className="btn btn-primary w-md waves-effect waves-light" type="submit">Registrarme</button>
                        </div>
                      </div>

                      <div className="mt-2 mb-0 row">
                        <div className="col-12 mt-4">
                          <p className="mb-0">Al registrarse acepta los Términos de uso de 7AM. <Link to="#" className="text-primary">Condiciones de uso</Link></p>
                        </div>
                      </div>
                    </Form>
                  </div>
                </CardBody>
              </Card>
              <div className="mt-5 text-center">
                <p>
                ¿Ya tienes una cuenta?{" "}
                  <Link to="/login" className="fw-medium text-primary">
                    {" "}
                    Iniciar Sesion
                  </Link>{" "}
                </p>
                <p>
                  © {new Date().getFullYear()} 7AM Digital{" "}
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

Register.propTypes = {
  registerUser: PropTypes.func,
  registerUserFailed: PropTypes.func,
  registrationError: PropTypes.any,
  user: PropTypes.any,
};

const mapStatetoProps = state => {
  const { user, registrationError, loading } = state.Account;
  return { user, registrationError, loading };
};

export default connect(mapStatetoProps, {
  registerUser,
  apiError,
  registerUserFailed,
})(Register);
