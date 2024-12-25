import { TbWorldDollar } from "react-icons/tb"
import "./SectionTwo.scss"

const SectionTwo = () => {
  return (
    <section className="sectionTwo">
      <div className="left-img">
        <img src="https://templatemo.com/templates/templatemo_582_tale_seo_agency/assets/images/services-left.jpg" alt="" />
      </div>
      <div className="right-img">
        <img src="https://templatemo.com/templates/templatemo_582_tale_seo_agency/assets/images/contact-left.jpg" alt="" />
      </div>

      <div className="sectiontwo-boxs">
        <div className="sectiomtwo-text-box">
        <h2>We Provide <span>Different Services</span> & <em>Features</em> For Your Agency</h2>
        <div className="line"></div>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doers eiusmod.</p>
        </div>
        <div className="sectionTwo-boxs">
            <div className="box">
                <div className="icone">
                    <img src="https://templatemo.com/templates/templatemo_582_tale_seo_agency/assets/images/services-01.jpg" alt="" />
                </div>
                <p>Discover More on current SEO Trends</p>
            </div>
            <div className="box">
                <div className="icone">
                    <img src="https://templatemo.com/templates/templatemo_582_tale_seo_agency/assets/images/services-02.jpg" alt="" />
                </div>
                <p>Real-Time Big Data Analysis</p>
            </div>
            <div className="box">
                <div className="icone">
                    <img src="https://templatemo.com/templates/templatemo_582_tale_seo_agency/assets/images/services-03.jpg" alt="" />
                </div>
                <p>Precise Data Analysis & Prediction</p>
            </div>
            <div className="box">
                <div className="icone">
                    <img src="https://templatemo.com/templates/templatemo_582_tale_seo_agency/assets/images/services-04.jpg" alt="" />
                </div>
                <p>SEO Marketing & Social Media</p>
            </div>
        </div>
      </div>
    </section>
  )
}

export default SectionTwo
