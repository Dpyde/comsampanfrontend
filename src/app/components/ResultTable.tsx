import Image from "next/image"

export type MatchInfo = {
  team: string;
  rank: number | string;
  icon?: "gold" | "silver" | "bronze" | null;
};

interface ResultTableProps {
  matches: MatchInfo[]; 
}
export default function ResultTable({ matches }: ResultTableProps) {
    const matchCount = matches.length;

    const heightClass =
    matchCount === 1
      ? "h-[70px] min-[1300px]:h-[60px]" 
      : "h-[130px] min-[1300px]:h-[120px]";

    // const mainIcon = matches[0]?.icon;

    return (
        <div className="w-3/12 min-w-[75px] max-[298]:h-[70px] max-[518px]:h-[55px]  min-[1300px]:w-[402px] border border-white rounded-lg lg:rounded-xl ">
            <table className= {` bg-[#121139] py-3 md:py-0 text-white backdrop-blur-lg h-full min-[1300px]:w-[400px] ${heightClass} rounded-lg lg:rounded-xl`}>
                <colgroup>
                    <col className="w-[15%] max-[518px]:w-[20%] " /> {/* rank */}
                    <col className="w-[70%]  max-[518px]:w-[65%]"  /> {/* star */}
                    <col className="w-[15%]  max-[518px]:w-[15%]" /> {/* team */}
                </colgroup>
                <tbody className="divide-y">
                    {matches.map((match,idx)=>(
                        <tr key={idx} className="relative">
                        <td>
                            <div className="flex justify-center items-center"><Image src="/table/star.svg" alt="star icon" width={60} height={60} /></div>
                        </td>
                        <td>
                            <div className="flex text-[7px] max-[545px]:mr-[3px] md:text-[10px]  lg:text-[20px] text-center justify-center items-center">{match.team}</div>
                        </td>
                        <td>
                            <div className={`flex text-[7px] md:text-[10px] lg:text-[20px] justify-center h-full items-center ${idx===0 ? 'rounded-tr-lg lg:rounded-tr-xl' : ''} ${idx===(matches.length-1) ? 'rounded-br-lg lg:rounded-br-xl' : ''} bg-white/22`}>{match.rank}</div>
                        </td>
                            {match.icon && (
                                <div className="absolute -right-6 top-[10px] -translate-y-1/2 z-[9999]">
                                    {match.icon === "gold" && (
                                        <div className="relative w-6 h-6 md:w-8 md:h-8 lg:w-12 lg:h-12">
                                            <Image
                                                src="/table/gold_medal.svg"
                                                alt="trophy"
                                                fill
                                                className="drop-shadow-[0_0_4px_rgba(255,215,0,0.6)]"
                                            />
                                        </div>
                                    )}
                                    {match.icon === "silver" && (
                                        <div className="relative w-6 h-6 md:w-8 md:h-8 lg:w-12 lg:h-12">
                                            <Image
                                                src="/table/silver_medal.svg"
                                                alt="silver medal"
                                                width={40}
                                                height={40}
                                                className="drop-shadow-[0_0_4px_rgba(180,180,255,0.6)]"
                                            />
                                        </div>
                                    )}
                                    {match.icon === "bronze" && (
                                        <div className="relative w-6 h-6 md:w-8 md:h-8 lg:w-12 lg:h-12">
                                            <Image
                                                src="/table/bronze_medal.svg"
                                                alt="bronze medal"
                                                width={40}
                                                height={40}
                                                className="drop-shadow-[0_0_4px_rgba(180,180,255,0.6)]"
                                            />
                                        </div>
                                    )}
                            </div>
                        )}
                    </tr>
                    ))
                    }
                </tbody>
            </table>

            
        </div>  
    )

}
