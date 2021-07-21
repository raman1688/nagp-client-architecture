import React from 'react';
import Grid from '@material-ui/core/Grid';
import CollectionItem from '../collection-item/collection-item.components.jsx';

const ShopCategory = ({ collections, match }) => {
  const collection = collections[match.params.collectionType];
  const { title, items } = collection;
  return (
    <div>
        <h2>{title}</h2>
        <Grid container spacing={4}>
          {items.map(item => (
            <CollectionItem key={item.id} item={item} />
          ))}
      </Grid>
    </div>
  );
}

export default ShopCategory;
