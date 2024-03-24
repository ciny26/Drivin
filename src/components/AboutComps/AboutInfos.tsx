import  {StyledBtn}  from "../elementComps/StyledBtn.styles";
import { DataPrincipes } from "../../DynamicData";
import PrincipeItem from "../elementComps/PrincipeItem";
const AboutInfos = () => {
    return ( 
        <>
            <h1>We Help Students To Pass Test & Get A License On The First Try</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque quae voluptatibus vero necessitatibus magnam temporibus saepe? Deserunt, eius porro impedit quia, ipsam excepturi adipisci rem ducimus perferendis, aspernatur amet dolores?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem omnis accusantium odit hic distinctio, nostrum consequatur! Dolorem quo, voluptatem corporis atque, tenetur qui similique velit quod veniam delectus ducimus nostrum!</p>
            <StyledBtn>Click Me</StyledBtn>
            <div className="principe-container">
                {DataPrincipes.map((item , index) => (
                    <PrincipeItem key={index} principe={item}/>
                ))}
            </div>
            
            
        </>
     );
}
 
export default AboutInfos;