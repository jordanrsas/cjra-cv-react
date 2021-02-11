import React from 'react';
import Parrafo from './Parrafo'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAddressCard } from "@fortawesome/free-solid-svg-icons"

const About = ({aboutData}) => {
    return (
        <section className="about">
            <h1 className="text-uppercase"><FontAwesomeIcon icon={faAddressCard}/> Un poco sobre mi</h1>
            <div><Parrafo texto={aboutData}/></div>
        </section>
    );
};

export default About;