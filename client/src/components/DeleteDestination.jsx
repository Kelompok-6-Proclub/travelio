import React from "react";
import Animation from "./Animation";
import warning from '../icon/warning.json';
import '../css/DeleteDestination.css';

const DeleteDestination = ({deletePopUp, handleDeleteSubmit, handleCardPopIn}) => {
    return (
        <div className={`delete ${deletePopUp && 'delete__popUp'}`}>
            <Animation data={warning} />
            <h1>Are you sure want to delete this content ?</h1>
            <div className="delete__box-btn">
                <button type='button' className="delete__btn" onClick={handleDeleteSubmit}>Delete</button>
                <button type='button' className="cancel__btn" onClick={handleCardPopIn}>Cancel</button>
            </div>
        </div>
    )
}

export default DeleteDestination