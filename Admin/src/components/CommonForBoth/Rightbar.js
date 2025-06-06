import React from "react"
import PropTypes from "prop-types"

import { connect } from "react-redux"
import {
  changeLayout,
  changeLayoutWidth,
  changeSidebarTheme,
  changeBodyTheme,
  changeSidebarType,
  changeTopbarTheme,
  showRightSidebarAction,
} from "../../store/actions"

//SimpleBar
import SimpleBar from "simplebar-react"

import { Link } from "react-router-dom"

//Import images
import layout1 from "../../assets/images/layouts/layout-1.jpg"
import layout2 from "../../assets/images/layouts/layout-2.jpg"
import layout3 from "../../assets/images/layouts/layout-3.jpg"

const RightSidebar = props => {
  return (
    <React.Fragment>
      <div className="right-bar" id="right-bar">
        <SimpleBar style={{ height: "900px" }}>
          <div data-simplebar className="h-100">
            <div className="rightbar-title px-3 py-4">
              <Link
                to="#"
                onClick={e => {
                  e.preventDefault()
                  props.showRightSidebarAction(false)
                }}
                className="right-bar-toggle float-end"
              >
                <i className="mdi mdi-close noti-icon" />
              </Link>
              <h5 className="m-0">Ajustes</h5>
            </div>

            <hr className="my-0" />

            <div className="p-4">
              <div className="radio-toolbar">
                <span className="mb-2 d-block">Diseños</span>
                <input
                  type="radio"
                  id="radioVertical"
                  name="radioFruit"
                  value="vertical"
                  checked={props.layoutType === "vertical"}
                  onChange={e => {
                    if (e.target.checked) {
                      props.changeLayout(e.target.value)
                    }
                  }}
                />
                <label htmlFor="radioVertical">Vertical</label>
                {"   "}
                <input
                  type="radio"
                  id="radioHorizontal"
                  name="radioFruit"
                  value="horizontal"
                  checked={props.layoutType === "horizontal"}
                  onChange={e => {
                    if (e.target.checked) {
                      props.changeLayout(e.target.value)
                    }
                  }}
                />
                <label htmlFor="radioHorizontal">Horizontal</label>
              </div>

              <hr className="mt-1" />

              <div className="radio-toolbar">
                <span className="mb-2 d-block" id="radio-title">
                Ancho de diseño
                </span>
                <input
                  type="radio"
                  id="radioFluid"
                  name="radioWidth"
                  value="fluid"
                  checked={props.layoutWidth === "fluid"}
                  onChange={e => {
                    if (e.target.checked) {
                      props.changeLayoutWidth(e.target.value)
                    }
                  }}
                />{" "}
                <label htmlFor="radioFluid">Liquido</label>
                {"   "}
                <input
                  type="radio"
                  id="radioBoxed"
                  name="radioWidth"
                  value="boxed"
                  checked={props.layoutWidth === "boxed"}
                  onChange={e => {
                    if (e.target.checked) {
                      props.changeLayoutWidth(e.target.value)
                    }
                  }}
                />{" "}
                <label htmlFor="radioBoxed">En caja</label>
              </div>
              <hr className="mt-1" />

              <div className="radio-toolbar">
                <span className="mb-2 d-block" id="radio-title">
                Tema de la barra superior
                </span>
                <input
                  type="radio"
                  id="radioThemeLight"
                  name="radioTheme"
                  value="light"
                  checked={props.topbarTheme === "light"}
                  onChange={e => {
                    if (e.target.checked) {
                      props.changeTopbarTheme(e.target.value)
                    }
                  }}
                />
                <label htmlFor="radioThemeLight">Luz</label>
                {"   "}
                <input
                  type="radio"
                  id="radioThemeDark"
                  name="radioTheme"
                  value="dark"
                  checked={props.topbarTheme === "dark"}
                  onChange={e => {
                    if (e.target.checked) {
                      props.changeTopbarTheme(e.target.value)
                    }
                  }}
                />

                <label htmlFor="radioThemeDark">Oscuro</label>
                {"   "}
              </div>

              {props.layoutType === "vertical" ? (
                <React.Fragment>
                  <hr className="mt-1" />
                  <div className="radio-toolbar">
                    <span className="mb-2 d-block" id="radio-title">
                    Tipo de barra lateral izquierda{" "}
                    </span>
                    <input
                      type="radio"
                      id="sidebarDefault"
                      name="sidebarType"
                      value="default"
                      checked={props.leftSideBarType === "default"}
                      onChange={e => {
                        if (e.target.checked) {
                          props.changeSidebarType(e.target.value)
                        }
                      }}
                    />
                    <label htmlFor="sidebarDefault">Predeterminado</label>
                    {"   "}
                    <input
                      type="radio"
                      id="sidebarCompact"
                      name="sidebarType"
                      value="compact"
                      checked={props.leftSideBarType === "compact"}
                      onChange={e => {
                        if (e.target.checked) {
                          props.changeSidebarType(e.target.value)
                        }
                      }}
                    />
                    <label htmlFor="sidebarCompact">Compacto</label>
                    {"   "}
                    <input
                      type="radio"
                      id="sidebarIcon"
                      name="sidebarType"
                      value="icon"
                      checked={props.leftSideBarType === "icon"}
                      onChange={e => {
                        if (e.target.checked) {
                          props.changeSidebarType(e.target.value)
                        }
                      }}
                    />
                    <label htmlFor="sidebarIcon">Icono</label>
                  </div>

                  <hr className="mt-1" />

                  <div className="radio-toolbar">
                    <span className="mb-2 d-block" id="radio-title">
                    Color de la barra lateral izquierda
                    </span>
                    <input
                      type="radio"
                      id="leftsidebarThemelight"
                      name="leftsidebarTheme"
                      value="light"
                      checked={props.leftSideBarTheme === "light"}
                      onChange={e => {
                        if (e.target.checked) {
                          props.changeSidebarTheme(e.target.value)
                        }
                      }}
                    />

                    <label htmlFor="leftsidebarThemelight">Luz</label>
                    {"   "}
                    <input
                      type="radio"
                      id="leftsidebarThemedark"
                      name="leftsidebarTheme"
                      value="dark"
                      checked={props.leftSideBarTheme === "dark"}
                      onChange={e => {
                        if (e.target.checked) {
                          props.changeSidebarTheme(e.target.value)
                        }
                      }}
                    />

                    <label htmlFor="leftsidebarThemedark">Oscuro</label>
                    {"   "}
                    <input
                      type="radio"
                      id="leftsidebarThemecolored"
                      name="leftsidebarTheme"
                      value="colored"
                      checked={props.leftSideBarTheme === "colored"}
                      onChange={e => {
                        if (e.target.checked) {
                          props.changeSidebarTheme(e.target.value)
                        }
                      }}
                    />

                    <label htmlFor="leftsidebarThemecolored">De colores</label>
                  </div>
                  <hr className="mt-1" />
                </React.Fragment>
              ) : null}

              <h6 className="text-center">Elegir diseños</h6>

              <div className="mb-2">
                <Link to="//veltrix-v.react.themesbrand.com" target="_blank">
                  <img
                    src={layout1}
                    className="img-fluid img-thumbnail"
                    alt=""
                  />
                </Link>
                <div className="form-check form-switch mb-3">
                  <input
                    type="checkbox"
                    className="form-check-input theme-choice"
                    id="light-mode-switch"
                    value="light"
                    checked={props.bodyTheme === "light"}
                    onChange={e => {
                      if (e.target.checked) {
                        props.changeBodyTheme(e.target.value)
                      }
                    }}
                  />
                  <label
                    className="form-check-label"
                    htmlFor="light-mode-switch"
                  >
                    Modo de luz
                  </label>
                </div>
              </div>

              <div className="mb-2">
                <Link
                  to="//veltrix-v-dark.react.themesbrand.com"
                  target="_blank"
                >
                  <img
                    src={layout2}
                    className="img-fluid img-thumbnail"
                    alt=""
                  />
                </Link>
                <div className="form-check form-switch mb-3">
                  <input
                    type="checkbox"
                    className="form-check-input theme-choice"
                    id="dark-mode-switch"
                    value="dark"
                    checked={props.bodyTheme === "dark"}
                    onChange={e => {
                      if (e.target.checked) {
                        props.changeBodyTheme(e.target.value)
                      }
                    }}
                  />
                  <label
                    className="form-check-label"
                    htmlFor="dark-mode-switch"
                  >
                    Modo oscuro
                  </label>
                </div>
              </div>

              <div className="mb-2">
                <Link
                  to="//veltrix-v-rtl.react.themesbrand.com"
                  target="_blank"
                >
                  <img
                    src={layout3}
                    className="img-fluid img-thumbnail"
                    alt=""
                  />
                </Link>
                <div className="form-check form-switch mb-5">
                  {/* <input
                    type="checkbox"
                    className="form-check-input theme-choice"
                    id="rtl-mode-switch"                   
                    onClick={(event) => console.log(event.target.checked)}
                  /> */}
                  <label className="form-check-label" htmlFor="rtl-mode-switch">
                    Modo RTL
                  </label>
                </div>
              </div>

              <Link
                to="#"
                className="btn btn-primary btn-block mt-3"
                target="_blank"
              >
              </Link>
            </div>
          </div>
        </SimpleBar>
      </div>
    </React.Fragment>
  )
}

RightSidebar.propTypes = {
  changeLayout: PropTypes.func,
  changeLayoutWidth: PropTypes.func,
  changeSidebarTheme: PropTypes.func,
  changeBodyTheme: PropTypes.func,
  changeSidebarType: PropTypes.func,
  changeTopbarTheme: PropTypes.func,
  layoutType: PropTypes.any,
  layoutWidth: PropTypes.any,
  leftSideBarTheme: PropTypes.any,
  leftSideBarType: PropTypes.any,
  showRightSidebarAction: PropTypes.func,
  topbarTheme: PropTypes.any,
}

const mapStateToProps = state => {
  return { ...state.Layout }
}

export default connect(mapStateToProps, {
  changeLayout,
  changeSidebarTheme,
  changeBodyTheme,
  changeSidebarType,
  changeLayoutWidth,
  changeTopbarTheme,
  showRightSidebarAction,
})(RightSidebar)
