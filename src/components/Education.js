import React from 'react';
import moment from 'moment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons"

const Education = props => {
    const getEducation = props.educationData.map(function(item, index) {
  		const startdate = moment(item.startDate).format('MMMM/YYYY');
  		const enddate = moment(item.endDate).format('MMMM/YYYY');
  		return (
          <div key={index}>
            <h3>{item.studyType} {item.area}</h3>
  				  <h4>{item.institution}</h4>
  				  <span className='startdate'>Estancia: {startdate} - {enddate}</span>
  				</div>
        )
  	});

  	return (
  	  <section className="education">
        <h1 className="text-uppercase"><FontAwesomeIcon icon={faGraduationCap}/> Educación</h1>
        {getEducation}
      </section>
  	)
};

export default Education;