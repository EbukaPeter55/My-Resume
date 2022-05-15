import React from 'react';
import profile from '../assets/images/profile.jpg'
import './Resume.styles.css';

const Resume = () => {
    return (
        <div className='container-fluid'>
            <div className='card top d-flex flex-row'>
            <img className='img-fluid' src={profile} alt="profileImage"/>
            <div className='card-right'>
                <h1>Ebuka <span>Peter</span></h1>
                <h6>Senior Frontend engineer</h6>
                <hr/>
            </div>
            </div>
            <div className='row'>
                {/* Left section */}
            <div className='col-md-4 left'>
            <div className='card'>
            <h6>About me</h6>
            <hr/>
            <p>
            I am a Senior Frontend engineer,
            UX designer and Tech writer
            </p>
            <h6>Skills</h6>
            <hr/>
            </div>
            </div>
                {/* End of left section */}

            {/* Right section */}
            <div className='col-md-8'>
            <h2>Right</h2>
            
            </div>
            </div>
        </div>
    )
}


export default Resume;