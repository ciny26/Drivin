import React, { useState } from 'react';
import { StyledBtn } from "../elementComps/StyledBtn.styles";
import { CloseBtn } from "../elementComps/StyledBtn.styles";
import "../../styles/form.modules.css";
import "../../styles/verticalContainer.modules.css";
import { useForm } from "react-hook-form";

const errorStyle: React.CSSProperties = {
  color: "red",
  fontSize: "1.2rem",
  padding: "4px",
  margin: "3px 0",
  backgroundColor: "#f0bcbc",
  borderRadius: "8px"
};

type FormData = {
  username: string;
  email: string;
  course: string;
  carType: string;
  message: string;
};

interface ChildProps {
  sendDataToParent: (data: boolean) => void; // Define callback function type
}

const HomeForm: React.FC<ChildProps> = ({ sendDataToParent }) => {
  const { register, handleSubmit, formState: { errors }, getValues } = useForm<FormData>();
  const [messageBoxOn, setMessageBoxOn] = useState<boolean>(false);

  // Define an array of valid car types
  const validCarTypes: string[] = ['Toyota', 'Honda', 'Ford', 'Chevrolet', 'Nissan'];

  const onSubmit = (data: FormData) => {
    setMessageBoxOn(true);
    sendDataToParent(true); // Sending true to parent to indicate message box is on
  };

  const closeMessageBox = () => {
    setMessageBoxOn(false);
    sendDataToParent(false); // Sending false to parent to indicate message box is closed
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        
        <h1> Make an appointment</h1>
        <div className="personData">
          <label htmlFor="username">Your Name</label>
          <input type="text" id="username" {...register("username", { required: "Username is required", pattern: { value: /^[a-zA-Z ]{2,30}$/, message: "Invalid name" } })} />
          {errors.username && <p style={errorStyle}>{errors.username.message}</p>}
          {/* Display validation error message */}

          <label htmlFor="email">Your Email</label>
          <input type="email" id="email" {...register("email", { required: "Email is required", pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: "Invalid email address" } })} />
          {errors.email && <p style={errorStyle}>{errors.email.message}</p>}
          {/* Display validation error message */}
        </div>

        <div className="courseData">
          <label htmlFor="course">Course</label>
          <input type="text" id="course" {...register("course", { required: "Course is required" })} />
          {errors.course && <p style={errorStyle}>{errors.course.message}</p>}
          {/* Display validation error message */}

          <label htmlFor="carType">Car Type</label>
          <select id="carType" {...register("carType", { required: "Car Type is required", validate: value => validCarTypes.includes(value) || "We don't have this type of car " })}>
            <option value="">Select Car Type</option>
            {validCarTypes.map(carType => (
              <option key={carType} value={carType}>{carType}</option>
            ))}
          </select>
          {errors.carType && <p style={errorStyle}>{errors.carType.message}</p>}
          {/* Display validation error message */}
        </div>

        <div className="message">
          <label htmlFor="message">Message</label>
          <textarea id="message" {...register("message", { required: "Message is required" })}></textarea>
          {errors.message && <p style={errorStyle}>{errors.message.message}</p>}
          {/* Display validation error message */}
        </div>

        <StyledBtn type="submit">Send Message</StyledBtn>
      </form>
      {messageBoxOn && (
        <div className="message-box">
          <h1>Great Job</h1>
          {getValues("username")} you made an appointemet <br />
          You will find convinient time and email you on the adress that you provided
          <CloseBtn onClick={closeMessageBox}>Close</CloseBtn>
        </div>
      )}
    </>
  );
};

export default HomeForm;
