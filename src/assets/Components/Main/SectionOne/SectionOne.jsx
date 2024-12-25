import "./SectionOne.scss"

const SectionOne = () => {
  return (
    <section className='sectionOne'>
      <div className="leftImg">
        <img src="https://templatemo.com/templates/templatemo_582_tale_seo_agency/assets/images/banner-left.png" alt="" />
      </div>
      <div className="rightImg">
        <img src="https://templatemo.com/templates/templatemo_582_tale_seo_agency/assets/images/banner-right.png" alt="" />
      </div>

      <div className="sectionOne-text-box">
        <h6>SEO DIGITAL AGENCY</h6>

        <h1>Dive <span className="oneSpan">Into The SEO</span> World <span className="Twospan">With Tale</span></h1>

        <p>Tale is the best SEO agency website template using Bootstrap v5.2.2 CSS for your company. It is a free download provided by TemplateMo. There are 3 HTML pages, <span>Home</span>, <span>About</span>, and <span>FAQ</span>.</p>

        <h3><a className="Onebtn btn" href="">Discover More</a> or <a className="Twobtn btn" href="">Check our FAQs</a></h3>
      </div>
    </section>
  )
}

export default SectionOne
