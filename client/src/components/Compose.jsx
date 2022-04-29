import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import checklist from '../icon/checklist.json';
import SweetAlert from './SweetAlert';
import '../css/Compose.css';
import '../css/Form.css';

const Compose = () => {
    let navigate = useNavigate();
    const [messageAlert, setMessageAlert] = useState('')
    const [alertPopUp, setAlertPopUp] = useState(false)
    const [formValue, setFormValue] = useState({place: '', city: '', description: ''})
    const {place, city, description} = formValue

    const handleAlert = (message) => {
        setMessageAlert(message)
        setAlertPopUp(true)
    }

    const alertButton = () => {
        navigate('/destination')
    }

    const handleInputChange = e => {
        setFormValue(preValue => {
            return {
                ...preValue,
                [e.target.name]: e.target.value
            }
        })
    }

    const handleSubmit = e => {
        e.preventDefault()
        fetch('http://127.0.0.1:8000/destinations/create/', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json',  'Accept': 'application/json'},
                body: JSON.stringify({
                    place,
                    city,
                    description
                })
            }).then(response => {
                return response.json();
            }).then(res => {
                handleAlert(res);
                console.log(res);
            });
        setFormValue({place: '', city: '', description: ''})
    }

    return (
        <div className='compose'>
            <h1 className="compose__title">Recommendation Form</h1>
            <div className="compose__input-box">
                <form onSubmit={handleSubmit} action=''>
                    <div>
                        <label htmlFor="place" className="compose__label">Destination</label>
                        <input type="text" id='place' value={place} name='place' className="compose__input" placeholder='Destination Name' onChange={handleInputChange} required autoFocus='on' autoComplete='off' />
                    </div>
                    <div>
                        <label htmlFor="city" className="compose__label">City</label>
                        <input type="text" id='city' value={city} name='city' className="compose__input" placeholder='City Name' onChange={handleInputChange} required autoComplete='off' />
                    </div>
                    <div>
                        <label htmlFor="desc" className="compose__label">Description</label>
                        <textarea id='desc' value={description} name='description' className="compose__input" cols="30" rows="5" placeholder='Description . . .' onChange={handleInputChange} required autoComplete='off'></textarea>
                    </div>
                    <div>
                        <button type='submit'>Submit</button>
                        <a href="/">Cancel</a>
                    </div>
                </form>
            </div>
            <SweetAlert alertPopUp={alertPopUp} messageAlert={messageAlert} alertButton={alertButton} dataLottie={checklist} />
            <div className={`overlay ${alertPopUp && 'overlay-alertPopUp overlayPopUp'}`}></div>
        </div>
    )
}

export default Compose