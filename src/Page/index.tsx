import React from 'react';

import Footer from '../Components/Footer';
import Header from '../Components/Header';
import PrincipalCard from '../Components/PrincipalCard';

import {Container} from './styles';

const Home: React.FC = () => {
    return (
        <Container>
            <Header />
            <PrincipalCard />
            <Footer />
        </Container>
    );
};

export default Home;