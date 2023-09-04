import React from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";
import styles from "./Navs.module.css";
import CartButton from "../Ui/CartButton";
import WishListIcon from "../Ui/WishListIcon";

import logo from "../../images/logo.png";

const Navs = () => {
  return (
    <Navbar
      className={`${styles.navbar_class} navbar-dark`}
      sticky="top"
      expand="lg"
    >
      <Container fluid>
        <NavLink to="/">
          <img src={logo} alt="brand_img" className={styles.nav_logo} />
        </NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto ms-5">
            
            <NavLink to='/'
              className={({isActive}) =>
                isActive ? styles.active : undefined
              }
              end
              >
                  <i className="fa-solid fa-shop"></i> home
            </NavLink>

            <NavLink
              to="dogs"
              className={({isActive}) =>
              isActive ? styles.active : undefined
            }
            >
              <i className="fa-solid fa-dog"></i> dogs
            </NavLink>
            <NavLink
              to="cats"
              className={({isActive}) =>
              isActive ? styles.active : undefined
            }
            >
              <i className="fa-solid fa-cat"></i> cats
            </NavLink>
            <NavLink
              to="birds"
              className={({isActive}) =>
              isActive ? styles.active : undefined
            }
            >
              <i className="fa-brands fa-earlybirds"></i> birds
            </NavLink>
          </Nav>
          <div className="d-flex justify-content-end ms-auto">
            <button className={styles.search_icon}>
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
            <WishListIcon />
            <CartButton />
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navs;
