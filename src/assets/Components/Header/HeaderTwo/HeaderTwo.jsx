import "./HeaderTwo.scss"
import {MdOutlineKeyboardArrowDown } from "react-icons/md"


const HeaderTwo = () => {
  return (
    <div className="headertwo">
        <div className="header-boxs">
        <div className="img">
            <img src="https://templatemo.com/templates/templatemo_582_tale_seo_agency/assets/images/logo.png" alt="" />
        </div>        

        <nav className="nav">
            <ul className="ul">
                <li><a className="a" href="">HOME</a></li>
                <li><a className="a" href="">SERVICES</a></li>
                <li><a className="a" href="">PROJECTS</a></li>
                <li className="hover-li"><a className="a" href="">PAGES <MdOutlineKeyboardArrowDown /></a>
                <div className="hover-box">
                    <ul>
                        <li><a href="">ABOUT US</a></li>
                        <li><a href="">FAQS</a></li>
                    </ul>
                </div>
                </li>
                <li><a className="a" href="">INFOS</a></li>
                <li><a className="a" href="">CONTACT</a></li>
            </ul>
        </nav>  
        </div>   
    </div>
  )
}

export default HeaderTwo
