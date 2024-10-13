import React, { useState } from "react";
import {
  NavLink,
  Link,
  useRouteLoaderData,
  useNavigate,
} from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";
import styles from "./Navs.module.css";
import CartButton from "../Ui/CartButton";
import WishListIcon from "../Ui/WishListIcon";
import logo from "../../images/logo.png";
import LoginButton from "../Ui/LoginButton";
import ConfirmationModal from "../Ui/ConfirmationModal";

const Navs = () => {
  const [show, setShow] = useState(false);
  const token = useRouteLoaderData("root");
  const navigate = useNavigate();

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const navigateToLogoutPage = () => {
    setShow(false);
    navigate("logout");
  };
  return (
    <>
      <Navbar
        className={`${styles.navbar_class} navbar-dark`}
        sticky="top"
        expand="lg"
      >
        <Container fluid>
          <NavLink to="/" className={styles.no_border}>
            <img src={logo} alt="brand_img" className={styles.nav_logo} />
          </NavLink>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto ms-5">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? styles.active : undefined
                }
                end
              >
                <i className="fa-solid fa-shop"></i> home
              </NavLink>

              <NavLink
                to="dogs"
                className={({ isActive }) =>
                  isActive ? styles.active : undefined
                }
              >
                <i className="fa-solid fa-dog"></i> dogs
              </NavLink>
              <NavLink
                to="cats"
                className={({ isActive }) =>
                  isActive ? styles.active : undefined
                }
              >
                <i className="fa-solid fa-cat"></i> cats
              </NavLink>
              <NavLink
                to="birds"
                className={({ isActive }) =>
                  isActive ? styles.active : undefined
                }
              >
                <i className="fa-brands fa-earlybirds"></i> birds
              </NavLink>
            </Nav>
            <div className="d-flex justify-content-end ms-auto">
              <WishListIcon />
              <CartButton />
              {token ? (
                <Link onClick={handleShow} className={styles.no_border}>
                  <LoginButton />
                </Link>
              ) : (
                <Link to="/login?mode=signin" className={styles.no_border}>
                  <LoginButton />
                </Link>
              )}
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {show && (
        <ConfirmationModal
          pageType="logout"
          onClick={navigateToLogoutPage}
          handleClose={handleClose}
          show={show}
        />
      )}
    </>
  );
};

export default Navs;
