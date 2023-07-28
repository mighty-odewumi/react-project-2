import myPic from "../assets/my-pic3.jpg";
import emailIcon from "../assets/email-icon.svg";
import linkedInIcon from "../assets/linkedin-icon.svg";

export default function Info() {
  return (
    <div id="author-info">
      <img
        src={myPic}
        alt="hero pic"
        className="author--img"
      />

      <h1 className="author--name">
        Mighty Odewumi
      </h1>

      <p className="author--title">
        Frontend Developer
      </p>

      <p className="author--location">
        Osun, Nigeria
      </p>

      <div className="buttons">
        <button className="email-btn">
          <img src={emailIcon} alt="email-icon" className="email-icon info-icon" />
          Email
        </button>

        <button className="linkedin-btn">
          <img src={linkedInIcon} alt="linkedin-icon" className="linkedin-icon info-icon" />
          LinkedIn
        </button>
      </div>
    </div>
  )
}
