import facebookIcon from "../assets/facebook-icon.svg";
import instagramIcon from "../assets/instagram-icon.svg";
import githubIcon from "../assets/github-icon.svg";
import blueskyIcon from "../assets/bluesky-icon.svg";

export default function SocialMedia() {
  return (
    <div className="social-media">
      <a href="https://bsky.app/profile/berremarte.bsky.social" target="_blank">
        <img className="social-media--icon" src={blueskyIcon}></img>
      </a>
      <a href="https://www.facebook.com/marte.lilleberre" target="_blank">
        <img className="social-media--icon" src={facebookIcon}></img>
      </a>
      <a href="https://www.instagram.com/berremarte" target="_blank">
        <img className="social-media--icon" src={instagramIcon}></img>
      </a>
      <a href="https://github.com/Berrinj" target="_blank">
        <img className="social-media--icon" src={githubIcon}></img>
      </a>
    </div>
  );
}
