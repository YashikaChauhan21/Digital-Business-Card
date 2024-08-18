import React from 'react'
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import photo from '../Images/profile.png';
import About from './About';
import Interests from './Interests';
import Footer from './Footer';
import '../src/index.css';

const Info = ()=>{
    return(
        
        <header className='info_container'>
            <img src={photo} alt="Photo" className='image'/>
            
            
            <div className='info_title'>
            <h3>Yashika Chauhan</h3>
            <h4>Frontend Developer</h4>
            <p>YashikaChauhan.website</p>
            </div>


            <div className='info_contact'>
                <button className='Email'>
                    <FontAwesomeIcon icon={faEnvelope}/>
                    <span>Email</span>
                </button>
                <button className='Linkedin'>
                    <FontAwesomeIcon icon={faLinkedin}/>
                    <span>LinkedIn</span>
                </button>
            </div>


            <About />
            <Interests />
            <Footer />

        </header>
    )
}
export default Info 