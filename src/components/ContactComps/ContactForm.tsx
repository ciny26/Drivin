import { StyledBtn } from "../elementComps/StyledBtn.styles";
import "../../styles/form.modules.css"
import "../../styles/verticalContainer.modules.css"
const ContactForm = () => {
    return ( 
        <>
            <form>
            <p>CONTACT US</p>
            <h1> If You Have Any Query, Please Contact Us</h1>
            <div className="personData">
                <label htmlFor="">Your Name</label>
                <input type="text" />
                <label htmlFor="">Your Email</label>
                <input type="email" />
            </div>

            <div className="subject">
                <label htmlFor="">Subject</label>
                <input type="text" />
            </div>

            <div className="message">
                <label htmlFor="">Message</label>
                <textarea name="" id=""></textarea>
            </div>

            <StyledBtn>Send Message</StyledBtn>
        </form>
        </>
        
     );
}
 
export default ContactForm;