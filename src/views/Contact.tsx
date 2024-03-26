import ContactBck from "../assets/backgrounds/contact-bckg.jpg"
import ImgHeader from "../components/mainComponents/ImgHeader";
import VerticalContainer from "../components/mainComponents/VerticalContainer";
import ContactForm from "../components/ContactComps/ContactForm";
import NewYorkImg from "../assets/vert_cont_imgs/Contact_imgs/newyork_map.png"
const Contact = () => {
    return ( 
        <>
            <ImgHeader backImgURL={ContactBck} backgroundTitle="Contact"></ImgHeader>
            <VerticalContainer mainImgURL={NewYorkImg} sideImgURL={null}>
                <ContactForm></ContactForm>
            </VerticalContainer>

        </>
     );
}
 
export default Contact;