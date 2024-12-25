import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md"
import "./SectionTheree.scss"
import { GiCrossedChains } from "react-icons/gi"
import { useEffect, useState } from "react";
import axios from "axios";

const SecuionTheree = () => {


  const [datas, setdatas] = useState([])

  const visibility = async () => {
    let res  = await axios.get("https://fakestoreapi.com/products")
    setdatas(res.data);
    console.log(res.data); 

  }

  useEffect(() => {
    visibility()
  }, [])





  return (
    <section className="sectionTheree">
      <div className="sectionTheree-text">
        <div className="text">
          <h3 className="h3">Discover Our <span>Work</span> & <em>Projects</em></h3>
          <div className="line"></div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doers eiusmod.</p>
        </div>
        <div className="icones">
          <div className="icone">
            <MdKeyboardArrowLeft />
          </div>
          <div className="icone">
            <MdKeyboardArrowRight />
          </div>
        </div>
      </div>

      <div className="axios-boxs">
        
        {
          datas.map((item) => (
            <div className="axios-box" key={item.id}>
          <div className="img-box">
            <img src={item.image} alt={item.title} />
          </div>
          <div className="text-box">
            <p>{item.title}</p>
            <div className="icone-box">
              <GiCrossedChains />
            </div>
          </div>
        </div>
          ))
        }

      </div>

    </section>
  )
}

export default SecuionTheree
