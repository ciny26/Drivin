import flen from "./assets/team_images/flenn.jpg";
import didine from "./assets/team_images/didine.jpg";
import zedk from "./assets/team_images/zedk.jpg";
import lotfi from "./assets/team_images/lotfi.jpg";

const Pimages = {
    flen,
    didine,
    zedk,
    lotfi
};

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