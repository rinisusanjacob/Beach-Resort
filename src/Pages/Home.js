import React from 'react'
import Hero from '../Components/Hero'
import Banner from '../Components/Banner'
import {Link} from 'react-router-dom'
import Services from '../Components/Services'
import FeaturedRooms from '../Components/FeaturedRooms'

function Home() {
    return (
        <>
        <Hero hero="defaultHero">
            <Banner title="Luxurious Rooms" subtitle="Deluxe Rooms starting at $299">
                <Link to='/rooms' className="btn-primary">Our Rooms</Link>

                </Banner> 
        </Hero>
        <Services></Services>
        <FeaturedRooms/>
        

        </>
    )
}
Hero.defaultProps ={
    hero:'defaultHero'
}

export default Home
