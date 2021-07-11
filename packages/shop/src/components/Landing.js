import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import CollectionPreview from './collection-preview/collection-preview.component.jsx';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

export default function Album({ collectionsMap  }) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {
        collectionsMap.map(({id, ...otherCollectionProps}) => (
            <CollectionPreview key={id} {...otherCollectionProps} />
        ))
      }
    </div>
  );
}
