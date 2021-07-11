import React from 'react';

const MenuItem = ({title, imageUrl, size, linkUrl, history}) => (
    <div className={`${size} menu-item`}>
        <div className='background-image' style={{
            backgroundImage: `url(${imageUrl})`
        }} ></div>
        <div className='content' onClick={() => history.push(`${linkUrl}`)}>
            <h1 className='title'>{title.toUpperCase()}</h1>
            <span className='subtitle'>SHOP NOW</span>
        </div>
    </div>
)

export default MenuItem;