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
        <div className="max-w-full min-w-full w-full md:max-w-[550px] md:min-w-[450px] md:w-4/12 backdrop-blur-xl backdrop-saturate-150
                bg-[#E5E8EB]/24 rounded-xl overflow-x-auto border border-[#E5E8EB] ">
            <table className="table-fixed w-full border-collapse">
                <colgroup>

                    <col className="w-[11%]" /> {/* rank */}
                    <col className="w-[11%]" /> {/* star */}
                    <col className="w-[60%]" /> {/* team */}
                    <col className="w-[18%]" /> {/* match */}
                </colgroup>
                <thead>
                    <tr className="divide-y divide-[#E5E8EB] bg-[#E5E8EB] h-[56px]">
                        <th colSpan={4}><p className="text-[#4C5FFF] text-lg md:text-[24px]">{group}</p></th>
                    </tr>

                </thead>
                <tbody className="divide-y divide-[#E5E8EB]">
                    <tr className=" bg-[#65F1CF33]/20 h-[52px]">
                        <th colSpan={4}><p className="text-white text-base md:text-[20px]">{dates}</p></th>
                    </tr>
                    {standings.map(({ id, rank, starred, team, matchScore }) => (
                        <tr key={id} className={`${(rank===1||rank===2) ? 'bg-[#65F1CF66]/40' : 'bg-[#4C5FFF4D]/30'} h-[62px]`}>
                            <td className="px-2 md:px-4 py-[5px] text-white text-xs md:text-[14px]">{rank}.</td>
                            <td className=" py-[5px] "><Image src="/table/star.svg" alt="star icon" width={40} height={40} className="md:w-[60px] md:h-[60px]"/></td>
                            <td className="px-2 md:px-4 py-[5px] text-white text-xs md:text-[14px] underline">{team}</td>
                            <td className="px-2 md:px-4 py-[5px] text-white text-xs md:text-[14px] text-center">{matchScore}</td>
                        </tr>
                    ))}

                </tbody>
            </table>
        </div>



    );
}
