import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode } from "@fortawesome/free-solid-svg-icons"


const Skills = props => {

  var color;

  const colores = [ 
    '#E6A00B', '#17E68A', '#E66300', 
    '#1761E6', '#E62A0B', '#FF00AB' 
  ]; 
  
  const colors = function()  {
    return colores[Math.floor( 
    Math.random() * colores.length)]; 
  }
  
  const Button = styled.button`
  background-color: ${colors};
  border: none;
  color: #000;
  padding: 4px 8px;
  display: inline-block;
  border-radius: 4px;
  cursor: not-allowed;
  margin: 4px 4px;
  font-size: 16px;
  `

    const getSkills = props.skillsData[0].keywords.map(function(item, index) {
      return (<li key={index} ><Button className="skill">{item}</Button></li>)
    });

  	return (
  	  <section className="skills">
        <h1 className="text-uppercase"><FontAwesomeIcon icon={faCode} color="#000"/> Habilidades</h1>
        <ul className="skills-list">{getSkills}</ul>
      </section>
  	)
};

export default Skills;