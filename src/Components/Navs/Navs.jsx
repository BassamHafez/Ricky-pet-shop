import React from 'react';
import { Navbar,Container,Nav} from 'react-bootstrap';
import styles from './Navs.module.css';
import CartButton from '../Ui/CartButton';
import WishListIcon from '../Ui/WishListIcon';

import logo from '../../images/logo.png'

const Navs = () => {
  return (
    <Navbar className={`${styles.navbar_class} navbar-dark`} sticky='top' expand="lg" >
    <Container fluid>
      <Navbar.Brand href="#home"><img src={logo} alt="brand_img" className={styles.nav_logo} /></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto ms-5">
          <Nav.Link className='mx-3' href="#home"><i className="fa-solid fa-shop"></i> shop</Nav.Link>
          <Nav.Link className='mx-3' href="#link"><i className="fa-solid fa-dog"></i> dogs</Nav.Link>
          <Nav.Link className='mx-3' href="#link"><i className="fa-solid fa-cat"></i> cats</Nav.Link>
          <Nav.Link className='mx-3' href="#link"><i className="fa-brands fa-earlybirds"></i>  birds</Nav.Link>
        </Nav>
        <div className="d-flex justify-content-end ms-auto">
          <button className={styles.search_icon}><i className="fa-solid fa-magnifying-glass"></i></button>
          <WishListIcon/>
          <CartButton/>
        </div>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default Navs
