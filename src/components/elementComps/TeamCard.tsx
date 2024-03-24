type Person = {
    Pname: string;
    Poccup: string;
    pImage?:string
}

type TeamCardProps = {
    person: Person;
}

const TeamCard = ({person} : TeamCardProps) => {
    return ( 
        <div className="card-container">
            <div className="person-img">
                <img src={person.pImage} alt="Team member" />
            </div>
            <div className="person-infos">
                <h1 className="person-name">{person.Pname}</h1>
                <p className="perosn-job">{person.Poccup}</p>
            </div>
        </div>
     );
}
 
export default TeamCard;