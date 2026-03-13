import FixtureCellHeader from "./fixtureCellHeader";
import { TEAMS } from "../../constants/teams";
import { classifyTeamName } from "../../utils/utils";

export default function TeamComparisonHeader({ comparisonMode, teams }) {
    const { team1, team2} = teams

    const team1Short = TEAMS.find(t => t.id === team1)?.short;
    const team2Short = TEAMS.find(t => t.id === team2)?.short;

    const team1Name = TEAMS.find(t => t.id === team1)?.name;
    const team2Name = TEAMS.find(t => t.id === team2)?.name;

    const totalHeader = comparisonMode === "generic" ? "Pts" : "+/-";
    const metaHeader = comparisonMode === "generic" ? "(Pts)" : "+/-";

    return (
        <div className="teamComparisonHeader">
            <div className="comparisonHeaderTotal t1TotalHeader">{totalHeader}</div>
            <div className={`t1Header ${classifyTeamName(team1Name)}`}>{team1Short}</div>
            <FixtureCellHeader
                venue="H"
                metaHeader={metaHeader} 
                className="t1HomeHeader"           
            />
            <FixtureCellHeader
                venue="A"
                metaHeader={metaHeader}  
                className="t1AwayHeader"           
            />
            <div className="oppoHeader">Vs</div>
            <div className={`t2Header ${classifyTeamName(team2Name)}`}>{team2Short}</div>
            <FixtureCellHeader
                venue="H"
                metaHeader={metaHeader} 
                className="t2HomeHeader"            
            /><FixtureCellHeader
                venue="A"
                metaHeader={metaHeader} 
                className="t2AwayHeader"            
            />
            <div className="comparisonHeaderTotal t2TotalHeader">{totalHeader}</div>
        </div>
    )
}