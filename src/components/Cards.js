import React from 'react'
import CardItem from './CardItem'
import './Cards.css'

function Cards() {
    return (
        <div className='cards'>
            <h1>Check out these EPIC destinations!</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItem 
                        src="images/img-1.jpg"
                        text="Explore NGC 613, a galaxy in the southern constellation of Sculptor 67"
                        label="Galaxy"
                        path='/services'
                        />
                        <CardItem 
                        src="images/img-2.png"
                        text="Travel through the life and death of a Star"
                        label="Nebula"
                        path='/services'
                        />
                    </ul>
                    <ul className='cards__items'>
                        <CardItem 
                        src="images/img-3.png"
                        text="New Horizons: opening our eyes to Pluto"
                        label="Technology"
                        path='/services'
                        />
                        <CardItem 
                        src="images/img-4.jpg"
                        text="The Hubble Space Telescope, taking us back through time and space"
                        label="Technology"
                        path='/services'
                        />
                        <CardItem 
                        src="images/img-5.jpg"
                        text="Cool Pic of the day: the galaxy cluster ACO S 295"
                        label="Galaxy"
                        path='/services'
                        />
                    </ul>
                </div>
            </div>

        </div>
    )
}

export default Cards
