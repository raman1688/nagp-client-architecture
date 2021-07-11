import React from 'react';

import Grid from '@material-ui/core/Grid';

import CollectionItem from '../collection-item/collection-item.components.jsx';

const CollectionPreview = ({ title, items }) => (
    <div className='collection-preview'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <Grid container spacing={4}>
            {
                items.filter((_,index) => index < 4).map((item) => (
                    <CollectionItem key={item.id} item={item} />
                ))
            }
        </Grid>
    </div>
)

export default CollectionPreview;