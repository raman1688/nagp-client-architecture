import React, { useState, useEffect } from 'react';
import { Switch, Route, Router } from 'react-router-dom';
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';

import { firestore, convertCollectionsSnapshotToMap } from './firebase/firebase.utils';
import Landing from './components/Landing';
import Pricing from './components/Pricing';
import Progress from './components/Progress';

const generateClassName = createGenerateClassName({
    productionPrefix: 'ma',
});

export default ({ history, cartMethods, cartItems }) => {
    const [collections, setCollections] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    useEffect(async () => {
        const collectionRef = firestore.collection('collections');
        const snapshot = await collectionRef.get();
        const collections = await convertCollectionsSnapshotToMap(snapshot);
        setCollections(collections);
        setIsLoading(false);
    }, []);
    return (
        <div>
            <StylesProvider generateClassName={generateClassName}>
                <Router history={history}>
                    <Switch>
                        <Route exact path="/shop/:collectionType">
                            {isLoading ? <Progress /> : ((routeProps) => <Pricing cartItems={cartItems} cartMethods={cartMethods} collections={collections} {...routeProps} />)}
                        </Route>
                        <Route path="/shop">
                            {isLoading ? <Progress /> : <Landing cartItems={cartItems} cartMethods={cartMethods} collectionsMap={Object.keys(collections).map(key => collections[key])} />}
                        </Route>
                        <Route path="/">
                            {isLoading ? <Progress /> : <Landing cartItems={cartItems} cartMethods={cartMethods} collectionsMap={Object.keys(collections).map(key => collections[key])} />}
                        </Route>
                    </Switch>
                </Router>
            </StylesProvider>
        </div>
    )
}
