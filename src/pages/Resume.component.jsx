import React from 'react';
import profile from '../assets/images/profile.jpg'
import './Resume.styles.css';

const Resume = () => {
    return (
        <div className='container-fluid'>
            <div className='row'>
                {/* Left section */}
            <div className='col-md-4 left'>
            <img className='img-fluid' src={profile} alt="profileImage"/>
            <div className='card'>

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