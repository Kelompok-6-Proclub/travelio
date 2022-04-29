import React from "react";
import '../css/Form.css';
import '../css/UpdateDestination.css';

const UpdateDestination = ({updateValue, updatePopUp, handleCardPopIn, handleUpdateChange, handleUpdateSubmit}) => {
    const {placeUpdate, cityUpdate, descriptionUpdate} = updateValue

    return (
        <div className={`update__input-box ${updatePopUp && 'update__input-boxPopUp'}`}>
            <h1>Update Form</h1>
            <form onSubmit={handleUpdateSubmit} action=''>
                <div>
                    <label htmlFor="place" className="update__label">Destination</label>
                    <input type="text" id='place' value={placeUpdate} name='placeUpdate' className="update__input" placeholder='Destination Name' onChange={handleUpdateChange} required autoFocus='on' autoComplete='off' />
                </div>
                <div>
                    <label htmlFor="city" className="update__label">City</label>
                    <input type="text" id='city' value={cityUpdate} name='cityUpdate' className="update__input" placeholder='City Name' onChange={handleUpdateChange} required autoComplete='off' />
                </div>
                <div>
                    <label htmlFor="desc" className="update__label">Description</label>
                    <textarea id='desc' value={descriptionUpdate} name='descriptionUpdate' className="update__input" cols="30" rows="5" placeholder='Description . . .' onChange={handleUpdateChange} required autoComplete='off'></textarea>
                </div>
                <div>
                    <button type='submit' className="update__btn">Update</button>
                    <button type='button' className="cancel__btn" onClick={handleCardPopIn}>Cancel</button>
                </div>
            </form>
        </div>
    )
}

export default UpdateDestination