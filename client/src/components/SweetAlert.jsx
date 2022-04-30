import React from "react";
import Animation from "./Animation";
import '../css/SweetAlert.css';

const SweetAlert = ({messageAlert, alertPopUp, alertButton, dataLottie}) => {
    return (
        <div className={`alert ${alertPopUp && 'alertPopUp'}`}>
            <Animation data={dataLottie} />
            <h1>{messageAlert} !</h1>
            <button type="button" onClick={alertButton}>OK</button>
        </div>
    )
}

export default SweetAlert