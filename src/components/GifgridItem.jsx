import React from 'react'
//import PropTypes from 'prop-types';
//import 'animate.css';

export const GifGridItem = ({
        title,
        url
    }) => {

    return (
        <div className='card animate__animated animate__fadeInDown animate__delay-1s'>
            <img src={url} alt={title}/>
            <p className='titileimg'>{title}</p>
        </div>
    )


}

// GifGridItem.propTypes = {
//     title: PropTypes.string.isRequired,
//     url: PropTypes.string.isRequired
// }

