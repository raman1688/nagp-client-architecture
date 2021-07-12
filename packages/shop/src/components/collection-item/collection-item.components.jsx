
import React from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  '@global': {
    a: {
      textDecoration: 'none',
    },
  },
  card: {
    // height: '100%',
    // display: 'flex',
    // flexDirection: 'column',
    maxWidth: 450,
  },
  cardMedia: {
    height: 400,
    // paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
}));

const CollectionItem = ({ item }) => {
  const classes = useStyles();
  const { name, price, imageUrl, id } = item;
  const handleAddToCartClick = () => {
    const event = new CustomEvent("AddItemToCart", { detail: item });
    window.dispatchEvent(event);
  }
  return (
    <Grid item key={id} xs={12} sm={6} md={3}>
      <Card className={classes.card}>
        <CardMedia
          className={classes.cardMedia}
          image={imageUrl}
          title={name}
        />
        <CardContent className={classes.cardContent}>
          <Typography gutterBottom variant="h5" component="h2">
            {name}
          </Typography>
          <Typography component="p">
            {`$ ${price}`}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" color="primary">
            View
          </Button>
          <Button size="small" color="primary" onClick={handleAddToCartClick}>
            Add to Cart
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default CollectionItem;