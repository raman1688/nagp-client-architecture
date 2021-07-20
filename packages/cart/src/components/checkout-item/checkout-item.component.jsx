import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    '@global': {
        a: {
            textDecoration: 'none',
        },
    },
    checkoutItem: {
        width: '100%',
        display: 'flex',
        minHeight: '100px',
        borderBottom: '1px solid darkgrey',
        padding: '15px 0',
        fontSize: '20px',
        alignItems: 'center',
    },
      
    imageContainer: {
        width: '23%',
        paddingRight: '15px',
    },
    img: {
        width: '100%',
        height: '100%',
    },
    name: {
        width: '23%',
    },
    quantity: {
        width: '23%',
        display: 'flex',
    },
    arrow: {
        cursor: 'pointer',
    },
    value: {
        margin: '0 10px',
    },
    price: {
        width: '23%',
    },
      
    removeButton: {
        paddingLeft: '12px',
        cursor: 'pointer',
    }
}));
const CheckoutItem = ({ cartItem }) => {
    const classes = useStyles();
    const {imageUrl, name, quantity, price, id} = cartItem;

    const handleRemoveItemFromCartClick = () => {
        const event = new CustomEvent("RemoveItemFromCart", { detail: cartItem });
        window.dispatchEvent(event);
    }
    const handleRemoveCartItemClick = () => {
        const event = new CustomEvent("RemoveCartItem", { detail: id });
        window.dispatchEvent(event);
    }
    const handleAddCartItemClick = () => {
        const event = new CustomEvent("AddItemToCart", { detail: cartItem });
        window.dispatchEvent(event);
    }
    return (
        <div className={classes.checkoutItem}>
            <div className={classes.imageContainer}>
                <img className={classes.img} src={imageUrl} alt='item' />
            </div>
            <span className={classes.name}>{name}</span>
            <span className={classes.quantity}>
            <div className={classes.arrow} onClick={() => handleRemoveItemFromCartClick()}>
            &#10094;
            </div>
            <span className={classes.value}>{quantity}</span>
            <div className={classes.arrow} onClick={() => handleAddCartItemClick()}>
            &#10095;
            </div>
        </span>
            <span className={classes.price}>{price}</span>
            <div className={classes.removeButton} onClick={() => handleRemoveCartItemClick()}>&#10005;</div>
        </div>
    );
}

export default CheckoutItem;
