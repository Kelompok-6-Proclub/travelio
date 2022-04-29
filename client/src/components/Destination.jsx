import React, { useState, useEffect } from 'react';
import SweetAlert from './SweetAlert';
import DestinationDetail from './DestinationDetail';
import UpdateDestination from './UpdateDestination';
import DeleteDestination from './DeleteDestination';
import location from '../icon/location.svg';
import LoaderAnimation from './LoaderAnimation';
import '../css/Destination.css';

const Destination = () => {
    const [dataFetched, setDataFetched] = useState([])
    const [messageAlert, setMessageAlert] = useState('')
    const [alertPopUp, setAlertPopUp] = useState(false)
    const [isLoad, setIsLoad] = useState(false)
    const [popUp, setPopUp] = useState(false)
    const [content, setContent] = useState({id: '', place: '', city: '', description: ''})
    const [clicked, setClicked] = useState(false)
    const [updatePopUp, setUpdatePopUp] = useState(false)
    const [deletePopUp, setDeletePopUp] = useState(false)
    const [deletedId, setDeletedId] = useState('')
    const [updateValue, setUpdateValue] = useState({id: '', placeUpdate: '', cityUpdate: '', descriptionUpdate: ''})
    const {placeUpdate, cityUpdate, descriptionUpdate} = updateValue

    const handleAlert = (message) => {
        setMessageAlert(message)
        setAlertPopUp(true)
    }

    const alertButton = () => {
        window.location.reload()
    }

    const handleUpdatePopUp = (id, place, city, description) => {
        setUpdatePopUp(true)
        setUpdateValue({
            id, 
            placeUpdate: place, 
            cityUpdate: city, 
            descriptionUpdate: description
        })
    }

    const handleUpdateChange = e => {
        setUpdateValue(preValue => {
            return {
                ...preValue,
                [e.target.name] : e.target.value
            }
        })
    }

    const handleUpdateSubmit = e => {
        e.preventDefault()
        fetch(`http://127.0.0.1:8000/destinations/edit/${updateValue.id}`, 
        { 
            method: 'PUT', 
            headers: {'Content-Type': 'application/json',  'Accept': 'application/json'},
            body: JSON.stringify({
                    place: placeUpdate,
                    city: cityUpdate,
                    description: descriptionUpdate
                })
        })
        .then(res => res.json())
        .then(res => handleAlert(res))
    }

    const handleDeletePopUp = (id) => {
        setDeletePopUp(true)
        setDeletedId(id)
    }

    const handleDeleteSubmit = () => {
        console.log(deletedId);
        fetch(`http://127.0.0.1:8000/destinations/delete/${deletedId}`, {
            method: 'DELETE',
        })
        .then(res => res.json())
        .then(res => handleAlert(res))
    }

    const handleMenu = () => {
        setClicked(!clicked)
    }

    const handleCardPopUp = (value) => {
        setContent(value)
        setPopUp(true)
        document.body.classList.toggle('fixBody')
    }

    const handleCardPopIn = () => {
        if(popUp && updatePopUp) {
            setUpdatePopUp(false)
        } else if(popUp && deletePopUp) {
            setDeletePopUp(false)
        } else {
            setPopUp(false)
            setClicked(false)
            document.body.classList.toggle('fixBody')
        }
    }

    useEffect(() => {
        setIsLoad(true)
        fetch("http://127.0.0.1:8000/destinations/")
        .then(response => response.json())
        .then(data => setDataFetched(data))
        .finally(() => {
            setTimeout(() => setIsLoad(false),
            1200)
        })
      },[])

    // const fetchData = () => {
    //     return fetch(`http://127.0.0.1:8000/destinations/`)
    //         .then(res => {
    //             return res.json()
    //         })
    //         .then(response => {
    //             return response
    //         })
    // }

    return (
        <div className='destination'>
            {isLoad ? <div className='loader'><LoaderAnimation /></div> : 
                <div className="destination__box">
                    {dataFetched.map(item => {
                        const {id, place, city, description} = item
                        return (
                            <div key={id} className="destination__card" onClick={() => handleCardPopUp(item)}>
                                <div className='destination__card-title'>{place}</div>
                                <h2><img src={location} alt="" /> {city}</h2>
                                <div>{description}</div>
                            </div>
                        )
                    })}
                </div>
            }

            <SweetAlert alertPopUp={alertPopUp} messageAlert={messageAlert} alertButton={alertButton}  />
            <UpdateDestination updateValue={updateValue} updatePopUp={updatePopUp} handleCardPopIn={handleCardPopIn} 
            handleUpdateChange={handleUpdateChange} handleUpdateSubmit={handleUpdateSubmit} />

            <DeleteDestination deletePopUp={deletePopUp} handleDeletePopUp={handleDeletePopUp} 
            handleDeleteSubmit={handleDeleteSubmit} handleCardPopIn={handleCardPopIn}/>

            <DestinationDetail popUp={popUp} content={content} handleMenu={handleMenu} clicked={clicked} 
            handleUpdatePopUp={handleUpdatePopUp} handleDeletePopUp={handleDeletePopUp}/>

            <div className={`overlay-delete ${deletePopUp && 'overlay-deletePopUp'}`} onClick={handleCardPopIn} ></div>
            <div className={`overlay ${popUp && 'overlayPopUp'}`} onClick={handleCardPopIn}></div>
        </div>
    )
}

export default Destination