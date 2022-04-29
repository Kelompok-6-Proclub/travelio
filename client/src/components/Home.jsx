import React from 'react';
import compose from '../icon/compose.json';
import pin from '../icon/pin.json';
import Animation from './Animation';
import '../css/Home.css';

const Home = () => {
    return (
        <main className='home'>
            <section className="home__banner">
                <h1 className="home__banner--title">Find and Create Any Destinations You Want</h1>
                <a href="#feature" className="home__banner--cta">Get Started</a>
            </section>
            <section className="home__feature" id='feature'>
                <h2 className="home__feature--title">What you can do ?</h2>
                <div className="home__feature--box">
                    <div className="home__feature--find">
                        <Animation data={pin} />
                        <h1 className="home__feature--subTitle">Find Destinations</h1>
                        <p className="home__feature--desc">Find your recommended travel destination</p>
                        <a href="/destination" className="home__feature--cta">Find Some</a>
                    </div>
                    <h3 className="home__feature--divider">or</h3>
                    <div className="home__feature--create">
                        <Animation data={compose} />
                        <h1 className="home__feature--subTitle">Create Destinations</h1>
                        <p className="home__feature--desc">Make recommendations for tourist destinations</p>
                        <a href="/compose" className="home__feature--cta">Create Some</a>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Home