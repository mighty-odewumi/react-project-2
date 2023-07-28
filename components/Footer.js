import fbIcon from "../assets/icon-facebook.svg";
import twIcon from "../assets/icon-twitter.svg";
import instaIcon from "../assets/icon-instagram.svg";
import pinIcon from "../assets/icon-pinterest.svg";


export default function Footer() {
  return (
    <div id="footer">
      <ul id="footer-icons">
        <li>
          <img src={fbIcon} alt="facebook-icon" />
        </li>

        <li>
          <img src={twIcon} alt="twitter-icon" />
        </li>

        <li>
          <img src={instaIcon} alt="instagram-icon" />
        </li>

        <li>
          <img src={pinIcon} alt="pinIcon-icon" />
        </li>
      </ul>
    </div>
  )
}
