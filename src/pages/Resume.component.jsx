import React from 'react';
import profile from '../assets/images/profile.jpg'
import './Resume.styles.css';
import { FaLinkedin, FaTwitter, FaEnvelope, FaPhone, FaMapMarkerAlt} from "react-icons/fa";


const Resume = () => {
    return (
        <div className='container-fluid'>
            <div className='card top d-flex flex-row'>
            <img className='img-fluid' src={profile} alt="profileImage"/>
            <div className='card-right'>
                <h1>Ebuka <span>Peter</span></h1>
                <h6>Senior Frontend engineer</h6>
                <hr/>
                <div className='d-flex flex-row top_wrapper'>
                <div className='d-flex flex-row align-items-baseline address'>
                <FaEnvelope style={{color: "blue"}}/>
                <p>
                ebukapeter143@gmail.com
                </p>
                </div>
                <div className='d-flex flex-row align-items-baseline address'>
               <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/onyebinamma-ebuka-peter-002aa8136/">
               <FaLinkedin style={{color: "blue"}}/>
               </a>
                <p>
                Linkedin
                </p>
                </div>
                </div>
                <div className='d-flex flex-row align-items-baseline'>
                <div className='d-flex flex-row align-items-baseline address'>
               <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/peterdbrainy5">
                <FaTwitter style={{color: "blue"}}/>
                </a>
                <p>
                peterdbrainy5
                </p>
                </div>
                <div className='d-flex flex-row align-items-baseline address'>
                <FaPhone style={{color: "blue"}}/>
                <p>
                +2348164633970
                </p>
                </div>
                </div>
                <div className='d-flex flex-row address align-items-baseline'>
                <FaMapMarkerAlt style={{color: "blue"}}/>
                <p>
                16, Arobadade Street, Bariga Somolu, Lagos State. Nigeria
                </p>
                </div>
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