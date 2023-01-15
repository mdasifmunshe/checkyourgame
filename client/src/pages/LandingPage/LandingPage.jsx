import React from 'react';

import { Footer, Header, Loading } from '../../components';
import { CarouselMain } from '../../components/LandingPageComponents'

const LandingPage = () => {
    return (
        <div id='landing'>
            <Header />
            <CarouselMain />
            <Footer />
        </div>
    )
}

export default LandingPage