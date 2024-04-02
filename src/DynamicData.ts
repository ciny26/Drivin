import flen from "./assets/team_images/flenn.jpg";
import didine from "./assets/team_images/didine.jpg";
import zedk from "./assets/team_images/zedk.jpg";
import lotfi from "./assets/team_images/lotfi.jpg";
import phone from "./assets/svgs/phone.svg"
import email from "./assets/svgs/email.svg"
import location from "./assets/svgs/location.svg"
import facebook from "./assets/svgs/facebook.svg"
import instagram from "./assets/svgs/instagram.svg"
import linkedin from "./assets/svgs/linkedin.svg"
import automatic from "./assets/courses_images/automatic_course.jpg"
import highWay from "./assets/courses_images/highway_course.jpg"
import parking from "./assets/courses_images/parking_course.jpg"
import YellowFb from "./assets/svgs/yellowFb.svg"
import YellowInsta from "./assets/svgs/yellowInsta.svg"
//Team members images
const Pimages = {
    flen,
    didine,
    zedk,
    lotfi
};

//contact SVGs
const getInTouchImages = {
    email,
    location,
    phone
}
//social meadia SVGs

const socialMediaImages={
    facebook,
    instagram,
    linkedin
}
//principes
export const DataPrincipes :string[] =
 ["Safety " , " Learning" , " Excellence"]
//Team members
 export interface TeamMember {
    name: string;
    desc: string;
    image : string
}

export const teamArray: TeamMember[] = [
    {
        name: "Flen dz",
        desc: "Driver",
        image: Pimages.flen
    },
    {
        name: "Zed k",
        desc: "Trainer",
        image: Pimages.zedk
    },
    {
        name: "Didine",
        desc: "Teacher",
        image: Pimages.didine
    },
    {
        name: "Lotfi DC",
        desc: "Owner",
        image: Pimages.lotfi
    }
];

type imagedItem = {info:string , imgURL?:string}[]
//**footer infos
//get in touch
export const getInTouchData :imagedItem=[
    {
        info:"Exemple123@gmail.com",
        imgURL:getInTouchImages.email
    },
    {
        info:"Street123 NewYork Usa",
        imgURL:getInTouchImages.location
    },
    {
        info:"+123456789",
        imgURL:getInTouchImages.phone
    }
]
//quick links 

export const quickLinksData :imagedItem=[
    {
        info:"About Us",
        imgURL:""
    },
    {
        info:"Contact Us",
        imgURL:""
    },
    {
        info:"Terms & Conditions",
        imgURL:""
    }
]
//folow us

export const followUsData :imagedItem=[
    {
        info:"Facebook",
        imgURL:socialMediaImages.facebook
    },
    {
        info:"Instagram",
        imgURL:socialMediaImages.instagram
    },
    {
        info:"LinkedIn",
        imgURL:socialMediaImages.linkedin
    }
]



//**Courses

const coursesImgs = {
    automatic , 
    highWay , 
    parking
}

const coursesDescs={
    autoCar:"Master the art of driving with ease. Our automatic cars lessons offer tailored instruction to help you navigate the road confidently. Join us and discover the simplicity and convenience of automatic driving.",
    highWay:"Gain the skills and confidence to navigate highways safely and effectively. Our lessons cover merging, lane changes, and highway etiquette. Join us and conquer the open road with ease.",
    parking:"Unlock the secrets to stress-free parking with our expert-led lessons. Gain confidence in parallel parking, reverse parking, and more. Join us and conquer the challenges of parking like a pro."

}
//Courses obj


export interface Course {
    name: string;
    desc: string;
    image : string
}



export const coursesArray :Course[] =[
    {
        name:"Automatic Cars Lessons",
        desc:coursesDescs.autoCar,
        image: coursesImgs.automatic
    },
    {
        name:"Highway Driving Lessons",
        desc:coursesDescs.highWay,
        image:coursesImgs.highWay
    },
    {
        name:"Parking Lessons",
        desc:coursesDescs.parking,
        image:coursesImgs.parking
    },
    
] 

//carditem overlay imgs

export const overlayImg = [
    YellowFb , YellowInsta 
]
//scroll animation
// scrollAnimation.ts
import { useState, useEffect } from 'react';

export const handleScroll = (compRef: React.RefObject<HTMLDivElement | HTMLFormElement> ) => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasBeenScrolledIntoView, setHasBeenScrolledIntoView] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!hasBeenScrolledIntoView && compRef.current) {
        const componentPosition = compRef.current.getBoundingClientRect().top;
        const scrollPosition = window.scrollY;
        const windowHeight = window.innerHeight;
        const threshold = windowHeight / 2;

        if (scrollPosition > componentPosition - windowHeight + threshold) {
          setIsVisible(true);
          setHasBeenScrolledIntoView(true);
        }
      }
    };

    // Check visibility on component mount
    handleScroll();

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [compRef, hasBeenScrolledIntoView]);

  return isVisible;
};

