import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import CollectionItem from './../collection-item/collection-item.components.jsx';

const useStyles = makeStyles((theme) => ({
  '@global': {
    a: {
      textDecoration: 'none',
    },
  },
}));

const Pricing = ({ collections, match }) => {
  const classes = useStyles();
  const collection = collections[match.params.collectionType];
  const { title, items } = collection;
  return (
    <div className={classes.root}>
        <h2 className='title'>{title}</h2>
        <Grid container spacing={4}>
          {items.map(item => (
            <CollectionItem key={item.id} item={item} />
          ))}
      </Grid>
    </div>
  );
}

export default Pricing;
