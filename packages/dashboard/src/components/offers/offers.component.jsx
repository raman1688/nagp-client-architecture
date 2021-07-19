import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Paper, Button } from '@material-ui/core';
import MenuItem from '../menu-item/menu-item.component.jsx';

const Offers = ({ history }) => {
    var items = [
      {
        title: 'Christmas Offers',
        imageUrl: 'https://image.freepik.com/free-vector/christmas-composition-paper-cut-style-sale-banner-background_255246-1232.jpg',
        linkUrl: 'shop',
        id: 'offer1'
      },
      {
        title: 'Hats for sale',
        imageUrl: 'https://image.freepik.com/free-photo/stylish-man-hat-sunglasses_136403-4135.jpg',
        linkUrl: 'shop/hats',
        id: 'offer2'
      },
      {
        title: 'Exclusive offers for women',
        imageUrl: 'https://image.freepik.com/free-photo/woman-yellow-jacket-copy-space-sale-concept_23-2148674144.jpg',
        linkUrl: 'shop/womens',
        id: 'offer3'
      },
      {
        title: 'Exclusive offers for men',
        imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
        linkUrl: 'shop/mens',
        id: 'offer4'
      }
    ];

    return (
        <Carousel
          swipe
          animation="slide"
          navButtonsAlwaysVisible
        >
            {
                items.map( ({ id, ...otherProps }, i) => <Item history={history} key={id} {...otherProps} /> )
            }
        </Carousel>
    );
}

const Item = (props) => (
    <MenuItem {...props} />
);

export default Offers;
