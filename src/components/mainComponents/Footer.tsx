import React, { useState } from "react";
import ImagedItem from "../elementComps/imagedItem";
import { getInTouchData, quickLinksData, followUsData } from "../../DynamicData";
import rightArrow from "../../assets/svgs/rightArrow.svg";
import "../../styles/footer.modules.css"

const Footer = () => {
    const [isHighlighted, setIsHighlighted]   = useState<boolean>(false);

    const svgHighlited = () => {
        setIsHighlighted(true);
    };

    const svgUnhighlighted = () => {
        setIsHighlighted(false);
    };

    return (
        <footer className="footer-container">
            <div className="info-wrapper primary-conatct-infos">
                <h1>Get In Touch</h1>
                {getInTouchData.map((item, index) => (
                    <ImagedItem key={index} data={item.info} itemImg={item.imgURL} onMouseEnter={svgHighlited} onMouseLeave={svgUnhighlighted} />
                ))}
            </div>
            <div className="info-wrapper quick-links">
                <h1>Quick Links</h1>
                {quickLinksData.map((item, index) => (
                    <ImagedItem key={index} data={item.info} itemImg={rightArrow} isHighlited = {isHighlighted}
                     onMouseEnter={svgHighlited} onMouseLeave={svgUnhighlighted} />
                ))}
            </div>
            <div className="info-wrapper social-media-infos">
                <h1>Follow Us</h1>
                {followUsData.map((item, index) => (
                    <ImagedItem key={index} data={item.info} itemImg={item.imgURL} isHighlited = {isHighlighted}
                     onMouseEnter={svgHighlited} onMouseLeave={svgUnhighlighted} />
                ))}
            </div>
        </footer>
    );
};

export default Footer;
