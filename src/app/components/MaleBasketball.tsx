import TableComponent from "./Table";
import { StandingRow } from "./Table";
export default function MaleBasketball() {
    const standings1: StandingRow[] = [
        { id: "A", rank: 1, starred: true, team: "ทีม A", matchScore: "0 - 0", gameScore: "0 - 0" },
        { id: "B", rank: 2, starred: true, team: "ทีม B", matchScore: "0 - 0", gameScore: "0 - 0" },
        { id: "C", rank: 3, starred: false, team: "ทีม C", matchScore: "0 - 0", gameScore: "0 - 0" },
        { id: "D", rank: 4, starred: false, team: "ทีม D", matchScore: "0 - 0", gameScore: "0 - 0" },
        { id: "E", rank: 5, starred: false, team: "ทีม E", matchScore: "0 - 0", gameScore: "0 - 0" },
    ];
    const dates1: string = "7 ตุลา 2024 - 14.00 น.";
    // const dates2: string = "7 ตุลา 2024 - 14.00 น.";
    // const standings2: StandingRow[] = [
    //     { id: "A", rank: 1, starred: true, team: "ทีม A", matchScore: "0 - 0", gameScore: "0 - 0" },
    //     { id: "B", rank: 2, starred: true, team: "ทีม B", matchScore: "0 - 0", gameScore: "0 - 0" },
    // ];
    const groupA="บาสเกตบอลชาย";
    //const groupB="กลุ่ม B";

    return (<div className="flex min-[1200px]:flex-row flex-col gap-5 items-start">
        <TableComponent standings={standings1} dates={dates1} group={groupA} />
        {/* <TableComponent standings={standings2} dates={dates2} group={groupB} /> */}


    </div>)
}