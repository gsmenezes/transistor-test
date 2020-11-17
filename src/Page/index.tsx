import React from 'react';
import CarouselCards from '../Components/CarouselCards';

import Footer from '../Components/Footer';
import ContactForm from '../Components/Form';
import Header from '../Components/Header';
import PrincipalCard from '../Components/PrincipalCard';

import {Container} from './styles';

const Home: React.FC = () => {
    return (
        <Container>
            <Header />
            <PrincipalCard />
            <CarouselCards />
            <ContactForm />
            <Footer />
        </Container>
    );
};

export default Home;