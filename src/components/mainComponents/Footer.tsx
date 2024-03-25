import "../../styles/footer.modules.css"
import ImagedItem from "../elementComps/imagedItem";
import { getInTouchData , quickLinksData , followUsData } from "../../DynamicData";
import rightArrow from "../../assets/svgs/rightArrow.svg"
const Footer = () => {
  return (
   
   <footer className="footer-container">
      <div className="info-wrapper primary-conatct-infos">
        <h1>Get In Touch</h1>
        {getInTouchData.map((item , index)=>(
            <ImagedItem key={index} data={item.info} itemImg={item.imgURL}/>
        ))}
      </div>
      <div className="info-wrapper quick-links">
            <h1>Quick Links</h1>
            {quickLinksData.map((item , index)=>(
            <ImagedItem key={index} data={item.info} itemImg={rightArrow}/>
        ))}
      </div>
      <div className="info-wrapper social-media-infos">
              <h1>Follow Us</h1>
              {followUsData.map((item , index)=>(
            <ImagedItem key={index} data={item.info} itemImg={item.imgURL}/>
        ))}
      </div>
      {/* <div className="copyright-section">
        All Right Are reserved &copy;
      </div> */}
   </footer>
  );
};

export default Footer;
