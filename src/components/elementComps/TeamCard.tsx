import { useState } from "react";

type CardItem = {
    name: string;
    desc: string;
    image?:string
    
    
}

type TeamCardProps = {
    item: CardItem ;
    overLayImg?:string[] | undefined
    children?:React.ReactNode | undefined
}


const imgHeaderStyle: React.CSSProperties = {
    position: 'relative',
    display:'flex'
  };

const overlayStyle: React.CSSProperties = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent gray color
  };

const overlayImgContStyle: React.CSSProperties = {
    display: "flex",
    justifyContent:"center",
    position:"absolute",
    top: "50%",
    left: 0,
    width: '100%',
    height: '50px',
  };


const overlayImgStyle: React.CSSProperties = {
    margin:" 0 4px",
    padding:"4px 4px ",
    border: "2px yellow solid"

  };

const overlayBtnContStyle: React.CSSProperties = {
    
    position:"absolute",
    top:"50%",
    left:"50%",
    transform:"translate(-50% , -50%)"

  };

  

const overlayHide: React.CSSProperties = {
    display:"none"
  };




 
const TeamCard = ({item , overLayImg , children} : TeamCardProps) => {

    const [showOverLay , setShowOverLay] = useState<boolean>(false)
    const hoverOnCard = ()=>{
          setShowOverLay(true)
    }
  
    const hoverOffCard = ()=>{
      setShowOverLay(false)
  }


    return ( 
        <div className="card-container" onMouseEnter={hoverOnCard} onMouseLeave={hoverOffCard}>
            <div className="person-img" style={imgHeaderStyle}>
                <img src={item.image} alt="Team member"/>
                <div style={showOverLay ? overlayStyle : overlayHide} >
                    <div className="overlay-imgs-cont" style={overlayBtnContStyle}>{children}</div>
                    <div className="overlay-imgs-cont" style={overlayImgContStyle}>
                            {overLayImg && overLayImg.map((img , index)=>(
                            <img src={img} key={index} style={showOverLay ? overlayImgStyle : undefined}/>
                        ))}
                        
                    </div>
                
                </div>
                
            </div>
            <div className="person-infos">
                <h1 className="person-name">{item.name}</h1>
                <p className="perosn-job">{item.desc}</p>
            </div>
        </div>
     );
}
 
export default TeamCard;