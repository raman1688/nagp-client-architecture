import React from 'react';

import CollectionPreview from '../collection-preview/collection-preview.component.jsx';

const ShopCollections = ({ collectionsMap, history, ...otherProps }) => {
  return (
    <div>
      {
        collectionsMap.map(({id, ...otherCollectionProps}) => (
            <CollectionPreview history={history} key={id} {...otherCollectionProps} />
        ))
      }
    </div>
  );
}

export default ShopCollections;
