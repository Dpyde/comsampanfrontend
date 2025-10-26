import TableComponent from "./Table";
import { StandingRow } from "./Table";

export default function PromptResultTableFirst(){
    const standings: StandingRow[]=[
    { id: "A", rank: 1, starred: true, team: "ทีม A", matchScore: null, gameScore: "0" },
    { id: "B", rank: 2, starred: true, team: "ทีม B", matchScore: null, gameScore: "0" },
    { id: "C", rank: 3, starred: false,team: "ทีม C", matchScore: null, gameScore: "0" },
    { id: "..", rank: 4, starred: false,team: "..", matchScore: null, gameScore: "0" },
];
    const dates:string="15.00 น. - 15.10 น.";
    const group:string="รอบคัดเลือก รอบที่ 1";
    return (
        <TableComponent dates={dates} standings={standings} group={group} />
   );

}