import TableComponent from "./Table";
import { StandingRow } from "./Table";

export default function QuizResultTable(){
    const standings: StandingRow[]=[
    { id: "A", rank: 1, starred: true, team: "ทีม A", matchScore: null, gameScore: "0" },
    { id: "B", rank: 2, starred: true, team: "ทีม B", matchScore: null, gameScore: "0" },
    { id: "C", rank: 3, starred: false,team: "ทีม C", matchScore: null, gameScore: "0" },
];
    const dates:string="14.00 น. - 14.30 น.";
    const group:string="รอบคัดเลือก";
    return (
        <TableComponent dates={dates} standings={standings} group={group} />
   );

}