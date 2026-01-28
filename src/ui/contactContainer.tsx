import '../css/global.css'
import '../css/containers.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faMapPin } from '@fortawesome/free-solid-svg-icons';


function ContactContainer() {
    return (
    <>
            <div className="contact-container hidden">
                <div className="title-row">
                    <p className="dev-name">Keoni Han</p>
                    <div className="button-grid">
                        <a href="https://github.com/KeoniHan" target='_blank' aria-label='Github'>
                            <button className="contact-button">
                                <FontAwesomeIcon icon={faGithub} size='2xl'/>
                            </button>
                        </a>
                        <a href="mailto:keonihan@gmail.com" aria-label="Email">
                            <button className="contact-button">
                                <FontAwesomeIcon icon={faEnvelope} size='2xl'/>
                            </button>
                        </a>
                        <a href="https://www.instagram.com/keoni.han/" target='_blank' aria-label='Instagram'>
                            <button className="contact-button">
                                <FontAwesomeIcon icon={faInstagram} size='2xl'/>
                            </button>
                        </a>
                        <a href="https://www.youtube.com/c/KeoniHan" target='_blank' aria-label='Youtube'>
                            <button className="contact-button">
                                <FontAwesomeIcon icon={faYoutube} size='2xl'/>
                            </button>
                        </a>
                    </div>
                </div>
                <div className="location-row">
                    <p className="location-text"><FontAwesomeIcon icon={faMapPin} size='lg' style={{ verticalAlign: 'bottom', paddingRight:'5px'}}/>
                    Honolulu, HI, United States
                    </p>
                </div>
                <div className="bio-row">
                    <p className='bio-text'>
                        I'm a software developer from Honolulu with about 5 years of experience. 
                        I enjoy building thoughtful, efficient software and constantly learning new tools. 
                        Outside of coding, I love playing the guitar, golfing, cooking, watching basketball and football.
                    </p>
                </div>
            </div>
    </>
    )
}


export default ContactContainer;

