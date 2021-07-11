import React, { lazy, Suspense, useState, useEffect } from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';
import { createBrowserHistory } from 'history';

import Header from './components/Header';
import Progress from './components/Progress';

const ShopLazy = lazy(() => import ('./components/ShopApp'));
const AuthLazy = lazy(() => import('./components/AuthApp'));
const DashboardLazy = lazy(() => import('./components/DashboardApp'));

import { addItemToCart, removeItemFromCart, removeCartItem } from './utils/cart.utils';

const generateClassName = createGenerateClassName({
    productionPrefix: 'co',
});

const history = createBrowserHistory();

export default () => {
    const [isSignedIn, setIsSignedIn] = useState(false);
    const [displayName, setDisplayName] = useState('');
    const [cartItems, setCartItems] = useState([]);
    useEffect(() => {
        if (isSignedIn) {
            history.push('/');
        }
    }, [isSignedIn]);



    const addItem = (item) => {
        setCartItems(addItemToCart(cartItems, item));
    }
    const removeCartItem = (id) => {
        setCartItems(cartItems.filter(cartItem => cartItem.id !== id));
    }

    const removeItem = (item) => {
        setCartItems(removeItemFromCart(cartItems, item));
    }

    window.addEventListener("AddItemToCart", function(event) {
        debugger;
        addItem(event.detail);
    }, false);
    return (
        <Router history={history}>
            <StylesProvider generateClassName={generateClassName}>
                <div>
                    <Header
                        cartItems={cartItems}
                        displayName={displayName}
                        isSignedIn={isSignedIn}
                        onSignOut={() => {
                            setDisplayName('');
                            setIsSignedIn(false);
                        }} 
                    />
                    <Suspense fallback={<Progress />}>
                        <Switch>
                            <Route path="/auth">
                                <AuthLazy onSignIn={({ displayName }) => {
                                        setDisplayName(displayName);
                                        setIsSignedIn(true);
                                    }}
                                />
                            </Route>
                            <Route path="/shop">
                                <ShopLazy
                                    cartItems={cartItems}
                                    cartMethods={{ 
                                        addItem,
                                        removeCartItem,
                                        removeItem
                                    }}
                                />
                            </Route>
                            <Route path="/" component={DashboardLazy} />
                        </Switch>
                    </Suspense>
                </div>
            </StylesProvider>
        </Router>
    );
};
