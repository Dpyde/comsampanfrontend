import Image from "next/image";
export type StandingRow = {
    id: string;
    rank: number;
    starred: boolean;
    team: string;
    matchScore: string; // e.g. "2 - 0"
    // gameScore: string;  // e.g. "2 - 0"
};
type Props = {
  standings: StandingRow[];
  dates: string;
  group: string;
};

export default function TableComponent({ standings, dates, group }: Props) {
   

    return (
        <div className="flex max-w-[660px] min-w-[200px] backdrop-blur-xl  backdrop-saturate-150
                bg-[#E5E8EB]/24 rounded-xl w-6/12 max-[860px]:w-9/12 max-[610px]:w-12/12 overflow-hidden border border-[#E5E8EB] ">
            <table className="table-fixed w-full border-collapse">
                <colgroup>

                    <col className="w-[11%]" /> {/* rank */}
                    <col className="w-[11%]" /> {/* star */}
                    <col className="w-[42%] max-[500px]:w-[32%] max-[335px]:w-[32%]" /> {/* team */}
                    <col className="w-[36%] max-[500px]:w-[40%] max-[335px]:w-[46%]" /> {/* match */}
                </colgroup>
                <thead>
                    <tr className="divide-y divide-[#E5E8EB] bg-[#E5E8EB] h-[56px]">
                        <th colSpan={4}><p className="text-[#4C5FFF] text-[24px] max-[380px]:text-[20px]">{group}</p></th>
                    </tr>

                </thead>
                <tbody className="divide-y divide-[#E5E8EB]">
                    <tr className=" bg-[#65F1CF33]/20 h-[52px]">
                        <th colSpan={4}><p className="text-white text-[20px] max-[550px]:text-[16px] max-[440px]:text-[12px] max-[380px]:text-[12px]">{dates}</p></th>
                    </tr>
                    {standings.map(({ id, rank, starred, team, matchScore }) => (
                        <tr key={id} className={`${(rank===1||rank===2) ? 'bg-[#65F1CF66]/40' : 'bg-[#4C5FFF4D]/30'} h-[62px]`}>
                            <td className="px-4 py-[5px] text-white text-[14px] max-[380px]:text-[10px]">{rank}.</td>
                            <td className=" py-[5px] "><Image src="/table/star.svg" alt="star icon" width={60} height={60}/></td>
                            <td className="px-4 py-[5px] text-white text-[14px] max-[380px]:text-[10px] underline">{team}</td>
                            <td className="px-4 py-[5px] text-white text-[14px] max-[380px]:text-[10px] text-center">{matchScore}</td>
                        </tr>
                    ))}

                </tbody>
            </table>
        </div>



    );
}
