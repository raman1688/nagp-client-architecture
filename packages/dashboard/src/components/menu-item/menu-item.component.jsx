import React from 'react';
import {MenuItemContainer, BackgroundImageContainer, ContentContainer, ContentTitle, ContentSubtitle} from './menu-item.styles.jsx';

const MenuItem = ({title, imageUrl, linkUrl, history}) => (
    <MenuItemContainer
        onClick={() => history.push(`${linkUrl}`)}
    >
        <BackgroundImageContainer
            className='background-image'
            imageUrl={imageUrl}
        />
        <ContentContainer className='content'>
            <ContentTitle>{title.toUpperCase()}</ContentTitle>
            <ContentSubtitle>SHOP NOW</ContentSubtitle>
        </ContentContainer>
    </MenuItemContainer>
)

export default MenuItem;