import { useEffect, useState } from "react";
import TeamCard from "../TeamCard/TeamCard";

const Teams = () => {
    const [teams,setTeams] = useState([]);
    useEffect(() => {
        fetch('/team.json')
        .then(res => res.json())
        .then(data => setTeams(data))
    },[])
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {
                teams.map(team => <TeamCard key={team._id} team={team}></TeamCard>)
            }
        </div>
    );
};

export default Teams;