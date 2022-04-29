import React from "react";

const SweetAlert = ({message, alertPopUp, alertButton}) => {
    return (
        <div className={`alert ${alertPopUp && 'alertPopUp'}`}>
            <h1>{message}</h1>
            <button type="button" onClick={alertButton}>Ok</button>
        </div>
    )
}

export default SweetAlert