import "./HeaderOne.scss"
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaMapMarker } from "react-icons/fa";
import { IoLogoFacebook } from "react-icons/io5";
import { FaTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

const HeaderOne = () => {
  return (
    <div className='headerOne'>
      <div className="header-one-icones">
        <div className="phone-icone icone">
            <a href=""><FaPhone className="phone"/> 010-020-0340</a>
        </div>
        <div className="email-icone icone">
            <a href=""><MdEmail className="phone"/> info@company.com</a>
        </div>
        <div className="map-icone icone">
            <a href=""><FaMapMarker className="phone"/> Sunny Isles Beach, FL 33160, USA</a>
        </div>

      </div>
      <div className="header-two-icones">
        <div className="icone">
        <IoLogoFacebook className="i"/>
        </div>
        <div className="icone">
        <FaTwitter className="i"/>
        </div>
        <div className="icone">
        <FaLinkedin className="i"/> 
        </div>
        <div className="icone">
        <FaInstagram className="i"/>
        </div>
      </div>
    </div>
  )
}

export default HeaderOne
