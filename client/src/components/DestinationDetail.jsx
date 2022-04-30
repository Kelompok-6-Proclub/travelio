import React, { useState } from 'react';
import location from '../icon/location.svg';
import kebabMenu from '../icon/kebab-icon.svg';
import '../css/DestinationDetail.css';

const DestinationDetail = ({content: {id, place, city, description}, popUp, handleMenu, clicked, handleUpdatePopUp, handleDeletePopUp}) => {

    return (
        <div className={`destination-detail ${popUp && 'destination-detailPopUp'}`}>
            <div className="detail-menu">
                <img src={kebabMenu} alt="" onClick={handleMenu} />
                <div className={`detail-menu__cta ${clicked && 'detail-menu__ctaClicked'}`}>
                    <span onClick={() => handleUpdatePopUp(id, place, city, description)}>Update</span>
                    <span onClick={() => handleDeletePopUp(id)}>Delete</span>
                </div>
            </div>
            <div className="destination-detail__header">
                <h1>{place}</h1>
                <h2><img src={location} alt="" /> {city}</h2>
            </div>
            <p>{description}</p>
        </div>
    )
}

export default DestinationDetail