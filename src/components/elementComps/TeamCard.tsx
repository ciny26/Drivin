type CardItem = {
    name: string;
    desc: string;
    image?:string
}

type TeamCardProps = {
    item: CardItem ;
}

const TeamCard = ({item} : TeamCardProps) => {
    return ( 
        <div className="card-container">
            <div className="person-img">
                <img src={item.image} alt="Team member" />
            </div>
            <div className="person-infos">
                <h1 className="person-name">{item.name}</h1>
                <p className="perosn-job">{item.desc}</p>
            </div>
        </div>
     );
}
 
export default TeamCard;