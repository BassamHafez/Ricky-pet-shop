import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Col } from 'react-bootstrap';
import styles from './PetCard.module.css';
import { useDispatch } from 'react-redux';
import { cartActions } from '../../Store/cart-slice';
import { wishActions } from '../../Store/wish-slice';
import MainButton from './MainButton';
import { singlePetActions } from '../../Store/singlePet-slice';

const PetCard = (props) => {
  const navigate=useNavigate();
  const dispatch = useDispatch();

  const addToCartHandler=()=>{
    dispatch(cartActions.addItemsToCart({
      id:props.id,
      name:props.name,
      src:props.src
    }));
  }

  const addtoWishHandler =()=>{
    dispatch(wishActions.addItemsToWishList({
      id:props.id,
      name:props.name,
      src:props.src
    }))
  }

  const sendDataToSinglePet=()=>{
    if(props.type==='dog'){
      dispatch(singlePetActions.sendDataFromDogs({
        id:props.id,
        name:props.name,
        src:props.src,
        height:props.height,
        width:props.width,
        temperament:props.temperament,
        life:props.life,
        bred_for:props.bred_for,
        breed_group:props.breed_group,
        weight_imperial:props.weight_imperial,
        weight_metric:props.weight_metric,
      }))
    }
    else{
      dispatch(singlePetActions.sendDataFromCats({
        id:props.id,
        name:props.name,
        src:props.src,
        desc:props.desc,
        country:props.country,
        wiki:props.wiki,
        vcahospitals_url:props.vcahospitals_url,
        vetstreet_url:props.vetstreet_url,
        temperament:props.temperament,
        life:props.life,
        adaptability:props.adaptability,
        intelligence:props.intelligence,
        social_needs:props.social_needs,
        energy_level:props.energy_level,
      }))
    }
    navigate('singlePet');
  }

  return (
    <Col sm={6} md={4} className={styles.card} key={props.id}>
      <div className={styles.card_parent}>
        <div className={styles.card_content}>
            <div className={styles.card_img}>
                <img src={props.src} alt={props.name} />
            </div>
            <div className={styles.card_caption}>
                <h5>{props.name}</h5>
                <p  className={styles.life}><span>life_span </span>: {props.life}</p>
                <p className={styles.temperament} >{props.temperament}</p>
                <button onClick={addToCartHandler} title='add to cart'  className={styles.card_cart}><i className="fa-solid fa-cart-plus"></i></button>
                <button onClick={sendDataToSinglePet}  title='quick view' className={styles.card_eye}><i className="fa-solid fa-eye"></i></button>
                <button onClick={addtoWishHandler}  title='add to wishlist' className={styles.card_wish}><i className="fa-regular fa-heart"></i></button>
            </div>
        </div>
            <MainButton text='Read More' />
        </div>
    </Col>
  )
}

export default PetCard
