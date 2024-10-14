import linkedInIcon from '../assets/linkedin-icon.svg';
import emailIcon from '../assets/email-icon.svg';
export default function Contact() {
    return (
        <div className="contact">
            <a href="mailto:berremarte@gmail.com">
            <button className="email"><img src={emailIcon} className="button-icon"></img>Email</button>
            </a>
            <a href="https://www.linkedin.com/in/marte-lilleberre/" target="_blank">
            <button className="linkedIn"><img src={linkedInIcon} className="button-icon"></img>LinkedIn</button>
            </a>
        </div>
    )
}
          