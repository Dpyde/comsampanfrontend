import Image from "next/image";
export type StandingRow = {
    id: string;
    rank: number;
    starred: boolean;
    team: string;
    matchScore: string; // e.g. "2 - 0"
    gameScore: string;  // e.g. "2 - 0"
};
export const standings: StandingRow[] = [
    { id: "A1", rank: 1, starred: true, team: "ทีม ABCDEFG 1234567890", matchScore: "2 - 0", gameScore: "2 - 0" },
    { id: "A2", rank: 2, starred: true, team: "ทีม ฟ้าคราม 001", matchScore: "2 - 0", gameScore: "2 - 1" },
    { id: "A3", rank: 3, starred: false, team: "ทีม ByteBusters", matchScore: "2 - 0", gameScore: "2 - 0" },
    { id: "A4", rank: 4, starred: false, team: "ทีม โค๊ดดีบัก", matchScore: "2 - 0", gameScore: "2 - 0" },
    { id: "A5", rank: 5, starred: false, team: "ทีม Quantum 42", matchScore: "2 - 0", gameScore: "2 - 0" },

];
export default function TableComponent() {

    return (
        <div className="max-w-[660px] min-w-[550px]  backdrop-blur-xl  backdrop-saturate-150
                bg-[#E5E8EB]/24 rounded-xl w-6/12 overflow-hidden border border-[#E5E8EB]">
            <table className="table-fixed w-full border-collapse ">
                <colgroup>

                    <col className="w-[11%]" /> {/* rank */}
                    <col className="w-[11%]" /> {/* star */}
                    <col className="w-[42%]" /> {/* team */}
                    <col className="w-[18%]" /> {/* match */}
                    <col className="w-[18%]" /> {/* game */}
                </colgroup>
                <thead>
                    <tr className="divide-y divide-[#E5E8EB] bg-[#E5E8EB] h-[56px]">
                        <th colSpan={5}><p className="text-[#4C5FFF] text-[24px]">กลุ่ม A</p></th>
                    </tr>

                </thead>
                <tbody className="divide-y divide-[#E5E8EB]">
                    <tr className=" bg-[#65F1CF33]/20 h-[52px]">
                        <th colSpan={5}><p className="text-white text-[20px]">7 ตุลา 2024 - 18.00 น.</p></th>
                    </tr>
                    {standings.map(({ id, rank, starred, team, matchScore, gameScore }) => (
                        <tr key={id} className={`${(rank===1||rank===2) ? 'bg-[#65F1CF66]/40' : 'bg-[#4C5FFF4D]/30'} h-[62px]`}>
                            <td className="px-4 py-[5px] text-white text-[14px]">{rank}.</td>
                            <td className=" py-[5px] "><Image src="/table/star.svg" alt="star icon" width={60} height={60}/></td>
                            <td className="px-4 py-[5px] text-white text-[14px] underline">{team}</td>
                            <td className="px-4 py-[5px] text-white text-[14px] text-center">{matchScore}</td>
                            <td className="px-4 py-[5px] text-white text-[14px] text-center">{gameScore}</td>
                        </tr>
                    ))}

                </tbody>
            </table>
        </div>



    );
}
