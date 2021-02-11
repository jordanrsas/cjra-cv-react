import React from 'react';
import WorkItem from './WorkItem';
import Parrafo from './Parrafo'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBuilding } from "@fortawesome/free-solid-svg-icons"

const Work = props => {
    const getWorkExperience = () => {
        const workItems = [];
        props.workData.forEach((val, index) => {
          workItems.push(<WorkItem key={index} workItemData={val}/>);
        })
        return workItems;
    }

    return (
      <section className="work">
        <h1 className="text-uppercase"><FontAwesomeIcon icon={faBuilding}/> Experiencia Laboral</h1>
        <div><Parrafo texto={getWorkExperience()}/></div>
      </section>
    );
};

export default Work;