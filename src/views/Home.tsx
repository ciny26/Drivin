import React, { useState } from 'react';
import ImgHeader from '../components/mainComponents/ImgHeader';
import VerticalContainer from "../components/mainComponents/VerticalContainer";
import HorizontalContainer from "../components/mainComponents/HorizontalContainer";
import { coursesArray } from "../DynamicData";
import TeamCard from "../components/elementComps/TeamCard";
import CardsTitles from "../components/CoursesComps/CoursesCardsTitles";
import { ReadMoreBtn } from "../components/elementComps/ReadMoreBtn..styles";
import AboutInfos from "../components/AboutComps/AboutInfos";
import vMainImg from "../assets/vert_cont_imgs/About_imgs/v-main-img.jpg";
import HeaderImg1 from '../assets/Home_imgs/headerImg1.jpg';
import HeaderImg2 from '../assets/Home_imgs/headerImg2.jpg';
import HomeForm from '../components/HomeComps/AppointementForm';
const Home = () => {


    const handleMessageBoxStatus = (status: boolean) => {
        /* setIsMessageBoxOn(status); */
      };
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [HeaderImg1, HeaderImg2];
  const titles = ['Enjoy Driving with us', 'MotherFucker'];

  const goToNextSlide = () => {
    const newIndex = (currentIndex + 1) % images.length;
    setCurrentIndex(newIndex);
  };

  return (
    <>
      <ImgHeader backImgURL={images[currentIndex]} backgroundTitle={titles[currentIndex]} />
      <button onClick={goToNextSlide}>Next</button>
      <VerticalContainer mainImgURL={vMainImg} sideImgURL={null}><AboutInfos/></VerticalContainer>
      <HorizontalContainer  >
                <CardsTitles/>
                <div className="bottom-cont ">
                    {coursesArray.map((it, index) => ( // Rename Person to person for consistency
                        <TeamCard key={index} item={it}><ReadMoreBtn>Read More</ReadMoreBtn></TeamCard> // Use person instead of Person
                    ))}
                </div>
    </HorizontalContainer>
    <HomeForm sendDataToParent={handleMessageBoxStatus}></HomeForm>
    </>
  );
};

export default Home;
