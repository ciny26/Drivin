import ImgHeader from "../components/mainComponents/ImgHeader";
import CoursesBck from "../assets/backgrounds/courses-bcg.jpg"
import HorizontalContainer from "../components/mainComponents/HorizontalContainer";
import { coursesArray } from "../DynamicData";
import TeamCard from "../components/elementComps/TeamCard";
import CardsTitles from "../components/CoursesComps/CoursesCardsTitles";
import { ReadMoreBtn } from "../components/elementComps/ReadMoreBtn..styles";
/* import "../styles/horizontalContainer.modules.css"
 */const Courses = () => {
    return ( 
        <>
           <ImgHeader backImgURL={CoursesBck} backgroundTitle="Courses"></ImgHeader>
           <HorizontalContainer  >
                <CardsTitles/>
                <div className="h-bottom-side ">
                    {coursesArray.map((it, index) => ( // Rename Person to person for consistency
                        <TeamCard key={index} item={it}><ReadMoreBtn>Read More</ReadMoreBtn></TeamCard> // Use person instead of Person
                    ))}
                </div>
            </HorizontalContainer>
        </>
     );
}
 
export default Courses;