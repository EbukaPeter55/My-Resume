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
                <h6>Senior Frontend engineer & UI/UX Designer</h6>
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
            <div className='card left_card'>
            <h6>About me</h6>
            <hr className='left_card--line'/>
            <p>
            I am a Senior Frontend engineer,
            UX designer and Tech writer
            </p>
            <h6 className='about_me'>Skills</h6>
            <hr className='about_me-line'/>
            </div>
            </div>
                {/* End of left section */}

            {/* Right section */}
            <div className='col-md-8'>
            <div className='education'>
            <h3>Education and Qualification</h3>
            <hr className='education_line'/>
            <div className='education_wrapper'>
            <div class="resume-item">
              <h5>React Nanodegree</h5>
              <h6>September 2021 - December 2021</h6>
              <p className='school'><em>Udacity</em></p>
              <p>A hands on  and immersive training on React, Redux and React Native</p>
              <p><em>Certificate credentials</em>: <a 
                target="_blank" rel="noreferrer" href="https://graduation.udacity.com/confirm/32AXPDM9">
                See credentials
              </a></p>
            </div>
            <div class="resume-item">
              <h5>Complete Web and Mobile UI/UX designer</h5>
              <h6>September 2020 - December 2020</h6>
              <p className='school'><em>Zero to mastery academy (ZTM)</em></p>
              <p>A hands on and immersive online course on Web and Mobile UX design</p>
              <p><em>Certificate </em>: <a 
                target="_blank" rel="noreferrer" href="https://drive.google.com/file/d/17sLLxhoJBxIMlIypJypk0v9qRH2TOX6V/view?usp=sharing">
                click to view certificate
              </a></p>
            </div>
            <div class="resume-item">
              <h5>Diploma in Computer hardware engineering</h5>
              <h6>2016 - 2017</h6>
              <p className='school'><em>Unival Institute Of Technology, Benin City, Nigeria.</em></p>
              <p>A hands on  and immersive practical traianing on computer hardwares, maintainance and repairs</p>
            </div>
            <div class="resume-item">
              <h5>Bachelor of Science (Bsc.) Biochemistry.</h5>
              <h6>2011 - 2016</h6>
              <p className='school'><em>University Of Benin- Uniben.</em></p>
              <p>Benin City, Edo state, Nigeria</p>
            </div>
            </div>
            </div>

             {/* WORK EXPERIENCE */}
            <div className='education'>
            <h3>Professional experience</h3>
            <hr className='education_line'/>
            <div className='education_wrapper'>
            <div class="resume-item">
              <h5>Senior software developer</h5>
              <h6>March 2022 - Present</h6>
              <p className='school'><em>Canary Point Corporate Services-Fintech </em></p>
              <ul>
                <li>Contribute to the company's Fintech products, using Reactjs and Redux.</li>
              </ul>
            </div>
            <div class="resume-item">
              <h5>UIUX designer/Frontend engineer (Full time)</h5>
              <h6>February 2020 - March 2022</h6>
              <p className='school'><em>ICS Outsourcing, Lagos Nigeria </em></p>
              <ul>
                <li>Conduct UX and Product research. </li>
                <li>Wireframing, High fidelity mockup design and prototyping with Figma</li>
                <li>UI Implementation of mockup design to code</li>
                <li>API Integration to the backend</li>
                <li>Technical documentation and writing</li>
                <li>Scrum master</li>
                <li>Helped the company to win a huge Bank project worth several millions of naira, by designing an enterprise 
                  feedback monitory application for both desktop backend and mobile frontend </li>
              </ul>
            </div>
            <div class="resume-item">
              <h5>UIUX design/Frontend mentor</h5>
              <h6>April 2021 - June 2021 </h6>
              <p className='school'><em>Zuri Internship (HNG interhsip)</em></p>
              <ul>
                <li> Provide mentorship to interns. Help review their designs and code.</li>
              </ul>
            </div>
            <div class="resume-item">
              <h5>Tech author/writer</h5>
              <h6>December 2020 - present</h6>
              <p className='school'><em>Userinterfacecabal</em>: <a
              target="_blank" rel="noreferrer" href="https://userinterfacecabal.com/">click to visit blog</a></p>
              <ul>
                <li> Create design and Frontend technologies tech content.</li>
              </ul>
            </div>
            <div class="resume-item">
              <h5>Frontend engineer and Team lead (Part time)</h5>
              <h6>November 2019 - present</h6>
              <p className='school'><em>Gudlife technology</em></p>
              <ul>
                <li>Organize, Lead product designers and engineers, to accompany project tasks.</li>
                <li>Frontend implementation of mockup designs to code.</li>
                <li>API integration with backend servers.</li>
                <li> Deployment of application to test and hosting servers.</li>
              </ul>
            </div>
            <div class="resume-item">
              <h5>Fullstack web developer intern (Full time)</h5>
              <h6>July 2019 - October 2019</h6>
              <p className='school'><em>Linuxjobber-U.S.A. Lagos Nigeria office (Full time)</em></p>
              <ul>
                <li>Worked with product designers to implement mockup designs to code, using Angular</li>
                <li>API integration with backend servers.</li>
              </ul>
            </div>
            <div class="resume-item">
              <h5>Frontend engineer intern (Remote full time).</h5>
              <h6>April 1st 2019 - May 31st 2019</h6>
              <p className='school'><em>Hotels.ng(HNG Internship)</em></p>
              <ul>
                <li>Worked with product designers to implement mockup designs to code, using HTML, vanilla js, Bootstrap and handlebars(Nodejs template engine).</li>
                <li>Collaborated with a remote team using Git and Github</li>
              </ul>
            </div>
            <div class="resume-item">
              <h5>Volunteer Lead Organizer- Kotlin Benin Developer community(Koltin User group).</h5>
              <h6>November 2018 - till date</h6>
              <p className='school'><em>Kotlin User group (Jetbrains)</em></p>
              <ul>
                <li>Worked with my co-organizers to organize monthly meetup events for the community</li>
                <li>Lead and organize mentorship activities that aid the community members to learn Kotlin.</li>
              </ul>
            </div>
            <div class="resume-item">
              <h5>Volunteer Lead Organizer/mentor and Learning Community Ambassador - Andela Learning Community (ALC Edo state).</h5>
              <h6> June 2018 - August 2019</h6>
              <p className='school'><em>Andela Learning Community (ALC).</em></p>
              <ul>
                <li>Mentor Google Africa scholarship recipients in the Android track</li>
                <li>Organize and facilitate offline meetup events.</li>
              </ul>
            </div>
            <div class="resume-item">
              <h5>Professional Freelance Computer hardware engineer</h5>
              <h6> January 2017 - August 2018</h6>
              <p className='school'>Pedon technologies.</p>
              <ul>
                <li>Basic and advance troubleshooting of computer hardware issues for clients</li>
                <li>Upgrade, repair, maintenance of computer hardware and software for clients.</li>
              </ul>
            </div>
            </div>
            </div>
            {/* END OF WORK EXPERIENCE */}
            </div>
            </div>
        </div>
    )
}


export default Resume;