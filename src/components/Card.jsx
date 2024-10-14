import ProfilePicture from "./ProfilePicture"
import Introduction from "./Introduction"
import Contact from "./Contact"
import About from "./About"
import Interests from "./Interests"
import SocialMedia from "./SocialMedia"

export default function Card() {
  return (
    <div className="card">
        <ProfilePicture />
        <Introduction />
        <Contact />
        <About />
        <Interests />
        <SocialMedia />
    </div>
  )
}