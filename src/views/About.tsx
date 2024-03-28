import ImgHeader from "../components/mainComponents/ImgHeader";
import AboutBck from "../assets/backgrounds/About_bckg.jpg";
import VerticalContainer from "../components/mainComponents/VerticalContainer";
import HorizontalContainer from "../components/mainComponents/HorizontalContainer";
import AboutInfos from "../components/AboutComps/AboutInfos";
import vMainImg from "../assets/vert_cont_imgs/About_imgs/v-main-img.jpg";
import TeamText from "../components/AboutComps/TeamTextCom";
import { teamArray } from "../DynamicData";
import TeamCard from "../components/elementComps/TeamCard";
import { overlayImg } from "../DynamicData";

const About = () => {
    return (
        <>
            <ImgHeader backImgURL={AboutBck} backgroundTitle="About Us"></ImgHeader>
            <VerticalContainer mainImgURL={vMainImg} sideImgURL={null}><AboutInfos/></VerticalContainer>
            <HorizontalContainer>
                <TeamText/>
                <div className="h-bottom-side">
                    {teamArray.map((it, index) => ( // Rename Person to person for consistency
                        <TeamCard key={index} item={it} overLayImg={overlayImg}/> // Use person instead of Person
                    ))}
                </div>
            </HorizontalContainer>
        </>
    );
}

export default About;
