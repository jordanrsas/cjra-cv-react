import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn, faGithubAlt, faTwitter, faTumblr } from '@fortawesome/free-brands-svg-icons'
import { faLocationArrow, faEnvelope } from '@fortawesome/free-solid-svg-icons'

const About = styled.div`
display: inline-block;
vertical-align: top;
padding: 30px;
overflow: hidden;
`
const Divider = styled.div`
padding: 10px 20px 0 20px;
border-bottom: 1px solid #f0f0f0;
margin-bottom: 20px;
box-sizing: border-box;
display: block;
line-height: 1.42857;
color: #333;
`

const Parrafo = styled.p`
text-align:justify;
`

const H1 = styled.h1`
text-align: center;
color:black;
`

const H2 = styled.h2`
text-align:center;
font-size:2rem;
color: #ff9e40;
`
const Image = styled.img`
display: block;
margin-left: auto;
margin-right: auto;
border-radius: 50%;
vertical-align: middle;
border: 1px;
box-sizing: border-box;
width: 200px;
`

const Profile = ({ profileData }) => {
    return <About>
        <div>
            <Image role="presentation" src={profileData.picture} width="200" />
        </div>
        <H1>{profileData.name}</H1>
        <H2>{profileData.label}</H2>
        <hr />
        <ul className="list-unstyled contact-links text-center">
            <li>
                <FontAwesomeIcon icon={faLocationArrow} color="#ff9e40" /><a> {profileData.location.city}, {profileData.location.countryCode}</a>
            </li>
            <li>
                <FontAwesomeIcon icon={faEnvelope} color="#ff9e40" /><a href={`mailto:${profileData.email}`}> {profileData.email}</a>
            </li>
        </ul>
        <hr />
        <ul className="profileLinks text-center">
            <li><a href={profileData.profiles[0].url} target="_blank"><FontAwesomeIcon icon={faLinkedinIn} size="2x" color="#0A66C2" /></a></li>
            <li><a href={'https://github.com/' + profileData.profiles[1].username} target="_blank"><FontAwesomeIcon icon={faGithubAlt} size="2x" /></a></li>
            <li><a href={profileData.profiles[3].url} target="_blank"><FontAwesomeIcon icon={faTwitter} size="2x" color="#1DA1F2"/></a></li>
            <li><a href={profileData.profiles[4].url} target="_blank"><FontAwesomeIcon icon={faTumblr} size="2x" color="#001935"/></a></li>
            
        </ul>
        <hr />
        <Parrafo>Construí este sitio web con <a href="https://facebook.github.io/react/" target="_blank">React</a> e implementé el <a href="https://jsonresume.org/schema/" target="_blank">JSON Resume Schema</a>.
        Puedes encontrar este proyecto en mi perfil de <a href="https://github.com/jordanrsas/cjra-cv-react" target="_blank">GitHub</a>.
        </Parrafo>
    </About>
};

export default Profile;