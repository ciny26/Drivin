import  {StyledBtn}  from "../elementComps/StyledBtn.styles";
import { DataPrincipes } from "../../DynamicData";
import ImagedItem from "../elementComps/imagedItem.tsx";
import rightSymb from "../../assets/svgs/rightSymb.svg"
import { ReadMoreBtn } from "../elementComps/ReadMoreBtn..styles.ts";
const AboutInfos = () => {
    return ( 
        <>
            <h1>We Help Students To Pass Test & Get A License On The First Try</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque quae voluptatibus vero necessitatibus magnam temporibus saepe? Deserunt, eius porro impedit quia, ipsam excepturi adipisci rem ducimus perferendis, aspernatur amet dolores?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem omnis accusantium odit hic distinctio, nostrum consequatur! Dolorem quo, voluptatem corporis atque, tenetur qui similique velit quod veniam delectus ducimus nostrum!</p>
            <StyledBtn>See More</StyledBtn>
            <ReadMoreBtn>+123 456 789</ReadMoreBtn>
            <div className="principe-container">
                {DataPrincipes.map((item , index) => (
                     <ImagedItem key={index} data={item}  itemImg={rightSymb}/> 
                   
                ))}
            </div>
            
            
        </>
     );
}
 
export default AboutInfos;