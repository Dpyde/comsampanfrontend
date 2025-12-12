import ResultTable from "./ResultTable";
import TableComponent from "./Table";
import { StandingRow } from "./Table";
const standings: StandingRow[]=[
    { id: "A", rank: 1, starred: true, team: "ทีม A", matchScore: "0 - 0" },
    { id: "B", rank: 2, starred: true, team: "ทีม B", matchScore: "0 - 0" },
    { id: "C", rank: 3, starred: false,team: "ทีม C", matchScore: "0 - 0" },
    
];
const femaleBasketballTeams=standings.length;
export default function FemaleBasketBall(){
    const dates:string="7 ตุลา 2024 - 14.00 น.";
    const group:string="บาสเกตบอลหญิง";
    return (
        <div className="overflow-x-auto">
            <div className="flex min-w-[637px] justify-center items-center">
            <TableComponent dates={dates} standings={standings} group={group} />
        </div>
        </div>
        
   );
}
export {femaleBasketballTeams};