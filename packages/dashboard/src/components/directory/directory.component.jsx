import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import MenuItem from '../menu-item/menu-item.component.jsx';
import Offers from './../offers/offers.component.jsx';

const sections = [
  {
    title: 'hats',
    imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
    linkUrl: 'shop/hats',
    id: 'hat'
  },
  {
    title: 'jackets',
    imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
    linkUrl: 'shop/jackets',
    id: 'jacket'
  },
  {
    title: 'sneakers',
    imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
    linkUrl: 'shop/sneakers',
    id: 'sneakers'
  },
  {
    title: 'women',
    imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
    linkUrl: 'shop/womens',
    id: 'women'
  },
  {
    title: 'men',
    imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
    linkUrl: 'shop/mens',
    id: 'men'
  }
];

const Directory = ({ history }) => (
  <div style={{ flexGrow: 1 }}>
    <Grid container spacing={3}>
            <Grid
              item
              xs={12}
            >
              <Offers history={history} />
            </Grid>
      </Grid>
      <Typography variant="h3" gutterBottom>
        Categories to Bag
    </Typography>
      <Grid container spacing={3}>
          {sections.map(({id, ...restProps}) => (
            <Grid
              key={id}
              item
              { ...(id < 4 ? {xs: 12, sm: 4} : {xs: 12, sm: 6}) }
            >
              <MenuItem history={history} {...restProps} />
            </Grid>
          ))}
      </Grid>
  </div>
);

export default Directory;