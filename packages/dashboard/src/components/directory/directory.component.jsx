import React from 'react';
import MenuItem from '../menu-item/menu-item.component.jsx';

const sections = [
  {
    title: 'hats',
    imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
    linkUrl: 'shop/hats',
    id: 1
  },
  {
    title: 'jackets',
    imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
    linkUrl: 'shop/jackets',
    id: 2
  },
  {
    title: 'sneakers',
    imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
    linkUrl: 'shop/sneakers',
    id: 3
  },
  {
    title: 'women',
    imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
    linkUrl: 'shop/womens',
    size: 'large',
    id: 4
  },
  {
    title: 'men',
    imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
    linkUrl: 'shop/mens',
    size: 'large',
    id: 5
  }
];

const Directory = ({ history }) => (
    <div>
        {sections.map(({id, ...restProps}) => <MenuItem key={id} history={history} {...restProps} />)}
    </div>
);

export default Directory;