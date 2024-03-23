import ImgHeader from "../components/mainComponents/ImgHeader";
import AboutBck from "../assets/backgrounds/About_bckg.jpg"
import VerticalContainer from "../components/mainComponents/VerticalContainer";
import AboutInfos from "../components/AboutComps/AboutInfos";
import vMainImg from "../assets/vert_cont_imgs/About_imgs/v-main-img.jpg"
const About = () => {
    return ( 
        <>
           <ImgHeader backImgURL = {AboutBck}></ImgHeader>
           <VerticalContainer mainImgURL={vMainImg} sideImgURL={null}><AboutInfos/></VerticalContainer>
           this is about 
        </>
     );
}
 
export default About;
<>

</>