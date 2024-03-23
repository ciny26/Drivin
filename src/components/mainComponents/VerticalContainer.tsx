import "../../styles/verticalContainer.modules.css"

type containerComponentsProps = {
    mainImgURL : string ,
    sideImgURL : string | null ,
    children : React.ReactNode
}

const VerticalContainer = (props : containerComponentsProps) => {
    return ( 
        <div className="container">
            <section className="v-left-side">
                <div className="img-holder">
                    <img className="main-image" src={props.mainImgURL} alt="main_img" />
                    {props.sideImgURL ?  <img className="side-image" src="" alt="" /> : ""}
                </div>
            </section>

            <section className="v-right-side">
                {props.children}
            </section>
        </div>
     );
}
 
export default VerticalContainer;