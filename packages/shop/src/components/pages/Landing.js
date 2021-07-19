import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import CollectionPreview from './../collection-preview/collection-preview.component.jsx';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

const Album = ({ collectionsMap, history, ...otherProps }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {
        collectionsMap.map(({id, ...otherCollectionProps}) => (
            <CollectionPreview history={history} key={id} {...otherCollectionProps} />
        ))
      }
    </div>
  );
}

export default Album;
