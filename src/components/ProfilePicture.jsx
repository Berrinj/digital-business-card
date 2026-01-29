import portrett from "../assets/portrett.png";

export default function ProfilePicture() {
  return (
    <div className="profile-picture">
      <img
        src={portrett}
        alt="Profile Picture"
        className="profile-picture-img"
      />
    </div>
  );
}
