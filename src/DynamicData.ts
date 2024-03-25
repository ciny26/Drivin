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

const Pimages = {
    flen,
    didine,
    zedk,
    lotfi
};

const getInTouchImages = {
    email,
    location,
    phone
}

const socialMediaImages={
    facebook,
    instagram,
    linkedin
}

export const DataPrincipes :string[] =
 ["Safety Priority" , "Tailored Learning" , "Uncompromised Excellence" , "Community-Centered Approach"]

 export interface TeamMember {
    Pname: string;
    Poccup: string;
    pImage : string
}

export const teamArray: TeamMember[] = [
    {
        Pname: "Flen dz",
        Poccup: "Driver",
        pImage: Pimages.flen
    },
    {
        Pname: "Zed k",
        Poccup: "Trainer",
        pImage: Pimages.zedk
    },
    {
        Pname: "Didine",
        Poccup: "Teacher",
        pImage: Pimages.didine
    },
    {
        Pname: "Lotfi DC",
        Poccup: "Owner",
        pImage: Pimages.lotfi
    }
];

type imagedItem = {info:string , imgURL?:string}[]
//footer infos
//get in touch
export const getInTouchData :imagedItem=[
    {
        info:"Exemple123@gmail.com",
        imgURL:getInTouchImages.email
    },
    {
        info:"Street123 , NewYork , Usa",
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

