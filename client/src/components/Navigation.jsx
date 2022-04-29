import React from 'react';
import { NavLink } from "react-router-dom";
import '../css/Navigation.css';

const Navigation = () => {
    return (
        <nav className="navigation">
            <a href="/" className="navigation__logo">travelio</a>
            <div className="navigation__tab">
                <NavLink to='/' activeClassName="active" className="navigation__link" exact>Home</NavLink>
                <NavLink to='/destination' activeClassName="active" className="navigation__link">Destination</NavLink>
                <NavLink to='/compose' activeClassName="active" className="navigation__link">Compose</NavLink>
                {/* <a href="/" className="navigation__link">Home</a>
                <a href="/destination" className="navigation__link">Destination</a>
                <a href="/compose" className="navigation__link">Compose</a> */}
            </div>
        </nav>
    )
} 

export default Navigation