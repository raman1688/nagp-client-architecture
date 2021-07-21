import React, { useState, useEffect } from 'react';
import { Switch, Route, Router } from 'react-router-dom';
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';

import { firestore, convertCollectionsSnapshotToMap } from './firebase/firebase.utils';
import ShopCollections from './components/pages/shop.collections.page';
import ShopCategory from './components/pages/shop.category.page';
import Progress from './components/Progress';

const generateClassName = createGenerateClassName({
    productionPrefix: 'ma',
});

export default ({ history }) => {
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
                            {isLoading ? <Progress /> : ((routeProps) => <ShopCategory collections={collections} {...routeProps} />)}
                        </Route>
                        <Route exact path="/shop">
                            {isLoading ? <Progress /> : ((routeProps) => <ShopCollections collectionsMap={Object.keys(collections).map(key => collections[key])} {...routeProps} />)}
                        </Route>
                        {/* <Route path="/">
                            {isLoading ? <Progress /> : <Landing collectionsMap={Object.keys(collections).map(key => collections[key])} />}
                        </Route> */}
                    </Switch>
                </Router>
            </StylesProvider>
        </div>
    )
}
