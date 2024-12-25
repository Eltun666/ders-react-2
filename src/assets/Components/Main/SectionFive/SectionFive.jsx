import { FaPhone } from "react-icons/fa6"
import "./SectionFive.scss"
import { MdEmail } from "react-icons/md"
import { FaMapMarker } from "react-icons/fa"

const SectionFive = () => {
  return (
    <section className='SectionFive'>
        <div className="img-left">
            <img src="https://templatemo.com/templates/templatemo_582_tale_seo_agency/assets/images/contact-left.jpg" alt="" />
        </div>
        <div className="img-right">
            <img src="https://templatemo.com/templates/templatemo_582_tale_seo_agency/assets/images/contact-left.jpg" alt="" />
        </div>

        <div className="boxs-fivesec">
            <div className="irframe-box">
            <iframe
                        allowFullScreen={true}
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3038.544618951696!2d49.8315564762873!3d40.39678427144272!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307d8bf9bc7b13%3A0x314313e3411891a8!2sHamburg%20Academy%20Alman%20dili%20Merkezi!5e0!3m2!1sen!2saz!4v1735134237983!5m2!1sen!2saz"
                        width="350"
                        height="700"

            />
            </div>

            <div className="secfive-text-box">
                <div className="text-box">
                    <h3><span>Contact Us</span> & Get In <em>Touch</em></h3>

                    <form action="">
                        <div className="inp-box">
                            <input type="text" placeholder="Your Name..."/>
                            <input type="text" placeholder="Your Surname..." />
                        </div>
                        <div className="inp-box">
                            <input type="email" placeholder="Your E-mail..." />
                            <input type="text" placeholder="Subject..." />
                        </div>
                        <textarea placeholder="Your Message"></textarea>
                        <button>Sen Message Now</button>
                    </form>
                    
                </div>
                <div className="icones-box">
                    <div className="icone-box">
                    <FaPhone />
                    <span>010-020-0340</span>
                    </div>
                    <div className="icone-box">
                    <MdEmail />
                    <span>info@company.com</span>
                    </div>
                    <div className="icone-box">
                    <FaMapMarker />
                    <span>Sunny Isles Beach, FL 33160, United States</span>
                    </div>


                </div>
            </div>
        </div>
      
    </section>
  )
}

export default SectionFive
