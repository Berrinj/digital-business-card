import profilePic from '../assets/profilbilde.png';

export default function ProfilePicture() {
    return (
        <div className="profile-picture">
            <img src={profilePic} alt="Profile Picture" className="profile-picture-img" />
        </div>
    )
}