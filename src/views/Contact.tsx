import { useState } from "react";
import ContactForm from "../components/ContactComps/ContactForm";
import ContactBck from "../assets/backgrounds/contact-bckg.jpg";
import ImgHeader from "../components/mainComponents/ImgHeader";
import VerticalContainer from "../components/mainComponents/VerticalContainer";
import NewYorkImg from "../assets/vert_cont_imgs/Contact_imgs/newyork_map.png";


const Contact = () => {
 /*  const [isMessageBoxOn, setIsMessageBoxOn] = useState<boolean>(false); */

  const handleMessageBoxStatus = (status: boolean) => {
    /* setIsMessageBoxOn(status); */
  };

  return (
    <>
      {/* {isMessageBoxOn && (
              <div className= "covers">
              </div>        
      )} */}
      <ImgHeader backImgURL={ContactBck} backgroundTitle="Contact" />
      <VerticalContainer mainImgURL={NewYorkImg} sideImgURL={null}>
        
        <ContactForm sendDataToParent={handleMessageBoxStatus} />
      </VerticalContainer>
    </>
  );
};

export default Contact;
