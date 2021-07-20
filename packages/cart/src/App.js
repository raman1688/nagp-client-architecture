import React from 'react';
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';
import StripeCheckoutButton from './components/stripe-button/stripe-button.component.jsx';
import CheckoutItem from './components/checkout-item/checkout-item.component.jsx';
import { cartTotal } from './utils';

const generateClassName = createGenerateClassName({
    productionPrefix: 'ca',
});

const useStyles = makeStyles((theme) => ({
    '@global': {
        a: {
            textDecoration: 'none',
        },
    },
    checkoutPage: {
        width: '55%',
        minHeight: '90vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        margin: '50px auto 0',
    },
    checkoutHeader: {
        width: '100%',
        padding: '10px 0',
        display: 'flex',
        justifyContent: 'space-between',
        borderBottom: '1px solid darkgrey',
    },

    headerBlock: {
        textTransform: 'capitalize',
        width: '23%',
        '&:last-child': {
        width: '8%',
        }
    },

    total: {
        marginTop: '30px',
        marginLeft: 'auto',
        fontSize: '36px',
    },

    button: {
        marginLeft: 'auto',
        marginTop: '50px',
    },

    testWarning: {
        textAlign: 'center',
        marginTop: '40px',
        fontSize: '24px',
        color: 'red',
    }
}));

export default ({ cartItems }) => {
    const classes = useStyles();
    const total = cartTotal(cartItems);
    return (
        <div>
            <StylesProvider generateClassName={generateClassName}>
                <div className={classes.checkoutPage}>
                    <div className={classes.checkoutHeader}>
                    <div className={classes.headerBlock}>
                        <span>Product</span>
                    </div>
                    <div className={classes.headerBlock}>
                        <span>Description</span>
                    </div>
                    <div className={classes.headerBlock}>
                        <span>Quantity</span>
                    </div>
                    <div className={classes.headerBlock}>
                        <span>Price</span>
                    </div>
                    <div className={classes.headerBlock}>
                        <span>Remove</span>
                    </div>
                    </div>
                    
                    {
                        cartItems.map(cartItem => (
                            <CheckoutItem key={cartItem.id} cartItem={cartItem} />
                        ))
                    }
                    
                    <div className={classes.total}>TOTAL: {total}</div>
                    <div className={classes.testWarning}>
                    *Please use the following test credit card for payments*
                    <br />
                    4242 4242 4242 4242 - Exp: 01/22 - CVV: 123
                    </div>
                    <StripeCheckoutButton price={total} />
                </div>
            </StylesProvider>
        </div>
    )
}
