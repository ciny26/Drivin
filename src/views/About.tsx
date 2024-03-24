import ImgHeader from "../components/mainComponents/ImgHeader";
import AboutBck from "../assets/backgrounds/About_bckg.jpg";
import VerticalContainer from "../components/mainComponents/VerticalContainer";
import HorizontalContainer from "../components/mainComponents/HorizontalContainer";
import AboutInfos from "../components/AboutComps/AboutInfos";
import vMainImg from "../assets/vert_cont_imgs/About_imgs/v-main-img.jpg";
import TeamText from "../components/AboutComps/TeamTextCom";
import { teamArray } from "../DynamicData";
import TeamCard from "../components/elementComps/TeamCard";

const About = () => {
    return (
        <>
            <ImgHeader backImgURL={AboutBck}></ImgHeader>
            <VerticalContainer mainImgURL={vMainImg} sideImgURL={null}><AboutInfos/></VerticalContainer>
            <HorizontalContainer>
                <TeamText/>
                <div className="h-bottom-side">
                    {teamArray.map((person, index) => ( // Rename Person to person for consistency
                        <TeamCard key={index} person={person}/> // Use person instead of Person
                    ))}
                </div>
            </HorizontalContainer>
            this is about 
        </>
    );
}

export default About;
