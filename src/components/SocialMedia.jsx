import xIcon from '../assets/x-icon.svg';
import facebookIcon from '../assets/facebook-icon.svg';
import instagramIcon from '../assets/instagram-icon.svg';
import githubIcon from '../assets/github-icon.svg';


export default function SocialMedia() {
    return(
        <div className="social-media">
            <a href="https://www.x.com/martelilleberre" target="_blank"><img className="social-media--icon" src={xIcon}></img></a>
            <a href="https://www.facebook.com/marte.lilleberre" target="_blank"><img className="social-media--icon" src={facebookIcon}></img></a>
            <a href="https://www.instagram.com/berremarte" target="_blank"><img className="social-media--icon" src={instagramIcon}></img></a>
            <a href="https://github.com/Berrinj" target="_blank"><img className="social-media--icon" src={githubIcon}></img></a>
        </div>
    )
}