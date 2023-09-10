import { useSelector } from 'react-redux';

import Modal from 'react-bootstrap/Modal';
import CartItem from '../Cart/CartItem';
import styles from './CartModal.module.css';
import MainButton from './MainButton';

const CartModal = (props) => {
  const cartItems = useSelector(state=>state.cart.items);


  return (
    <Modal
    {...props}
    size="lg"
    aria-labelledby="contained-modal-title-vcenter"
    centered
  >
    <Modal.Header closeButton>
      <Modal.Title className={styles.modal_title} id="contained-modal-title-vcenter">
        Discover Cart Items
      </Modal.Title>
    </Modal.Header>
    <Modal.Body>
        {cartItems.map((item)=>(
         <CartItem key={item.id} id={item.id} name={item.name} src={item.src} quantity={item.quantity} />
        ))}
    </Modal.Body>
    <Modal.Footer>
      <MainButton text='Close' onClick={props.onHide}/>
    </Modal.Footer>
  </Modal>
);
}

export default CartModal
