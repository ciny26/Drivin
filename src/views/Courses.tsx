import ImgHeader from "../components/mainComponents/ImgHeader";
import CoursesBck from "../assets/backgrounds/courses-bcg.jpg"
import HorizontalContainer from "../components/mainComponents/HorizontalContainer";
import { coursesArray } from "../DynamicData";
import TeamCard from "../components/elementComps/TeamCard";
import TeamText from "../components/AboutComps/TeamTextCom";
/* import "../styles/horizontalContainer.modules.css"
 */const Courses = () => {
    return ( 
        <>
           <ImgHeader backImgURL={CoursesBck} backgroundTitle="Courses"></ImgHeader>
           <HorizontalContainer  >
                <TeamText/>
                <div className="h-bottom-side ">
                    {coursesArray.map((it, index) => ( // Rename Person to person for consistency
                        <TeamCard key={index} item={it}/> // Use person instead of Person
                    ))}
                </div>
            </HorizontalContainer>
        </>
     );
}
 
export default Courses;