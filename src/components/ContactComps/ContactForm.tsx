import { StyledBtn } from "../elementComps/StyledBtn.styles";
import  {CloseBtn}  from "../elementComps/StyledBtn.styles";
import "../../styles/form.modules.css"
import "../../styles/verticalContainer.modules.css"
import { useForm } from "react-hook-form";
import { useState } from "react";

const errorStyle : React.CSSProperties = {
    color:"red",
    fontSize:"1.2rem",
    padding:"4px",
    margin:"3px 0",
    backgroundColor:"#f0bcbc",
    borderRadius:"8px"
}

type FormData = {
    username: string;
    email: string;
    subject: string;
    message: string;
}

const ContactForm = () => {
    const { register, handleSubmit, formState: { errors } , getValues } = useForm<FormData>();
    const [messageBoxOn , setMessageBoxOn] = useState<boolean>(false)
    const onSubmit = (data: FormData) => {
        setMessageBoxOn(true)
    };

    const closeMessageBox = ()=>{
        setMessageBoxOn(false)
    }
    return ( 
        <>
            <form onSubmit={handleSubmit(onSubmit)} noValidate>
                <p>CONTACT US</p>
                <h1> If You Have Any Query, Please Contact Us</h1>
                <div className="personData">
                    <label htmlFor="username">Your Name</label>
                    <input type="text" id="username" {...register("username", { required: "Username is required", pattern : {value:/^[a-zA-Z ]{2,30}$/ , message:"Invalid name"} }  )} />
                    {errors.username && <p style={errorStyle}>{errors.username.message}</p>} {/* Display validation error message */}
                    
                    <label htmlFor="email">Your Email</label>
                    <input type="email" id="email" {...register("email", { required: "Email is required", pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: "Invalid email address" } })} />
                    {errors.email && <p style={errorStyle}>{errors.email.message}</p>} {/* Display validation error message */}
                </div>

                <div className="subject">
                    <label htmlFor="subject">Subject</label>
                    <input type="text" id="subject" {...register("subject", { required: "Subject is required" })} />
                    {errors.subject && <p style={errorStyle}>{errors.subject.message}</p>} {/* Display validation error message */}
                </div>

                <div className="message">
                    <label htmlFor="message">Message</label>
                    <textarea id="message" {...register("message", { required: "Message is required" })}></textarea>
                    {errors.message && <p style={errorStyle}>{errors.message.message}</p>} {/* Display validation error message */}
                </div>

                <StyledBtn type="submit">Send Message</StyledBtn>
            </form>
            {messageBoxOn && <div className="message-box">
                <h1>Great Job</h1>
                 {getValues("username")} your message was sended successfully <br />
                your will find the answer in {getValues("email")}
                <CloseBtn onClick={closeMessageBox}>Close</CloseBtn>
            </div>}
        </>
     );
}
 
export default ContactForm;
