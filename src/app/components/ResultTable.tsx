import Image from "next/image"

export type MatchInfo = {
    id: string;
    team: string;
    rank: number | string;
    icon?: "gold" | "silver" | "bronze" | null;
};

interface ResultTableProps {
    matches: MatchInfo[];
}

export default function ResultTable({ matches }: ResultTableProps) {
    const matchCount = matches.length;

    // keep your logic, but make heights responsive to viewport
    const heightClass =
        matchCount === 1
            ? "h-[clamp(48px,5vw,70px)]"          // was 70px / 60px
            : "h-[clamp(96px,11vw,130px)]";         // was 130px / 120px

    return (
        <div
            className="flex-none w-[clamp(75px,28vw,402px)] border border-white rounded-lg lg:rounded-xl"
        >
            <table
                className={`
          w-full table-fixed
          bg-[#121139] text-white backdrop-blur-lg
          ${heightClass}                         
          rounded-lg lg:rounded-xl
        `}
            >
                <colgroup>
                    <col className="w-[15%]" />
                    <col className="w-[70%]" />
                    <col className="w-[15%]" />
                </colgroup>

                <tbody className="divide-y">
                    {matches.map((match, idx) => (
                        <tr key={idx} id={match.id} className="relative">
                            <td>
                                <div className="flex justify-center items-center">
                                    {/* star size responsive to viewport (class overrides rendered size) */}
                                    <Image
                                        src="/table/star.svg"
                                        alt="star icon"
                                        width={24}
                                        height={24}
                                        className="w-[clamp(14px,2.2vw,24px)] h-auto"
                                    />
                                </div>
                            </td>

                            <td>
                                <div className="flex justify-center items-center">
                                    {/* text scales with viewport */}
                                    <span className="text-[clamp(10px,1.8vw,20px)] text-center">
                                        {match.team}
                                    </span>
                                </div>
                            </td>

                            <td>
                                <div
                                    className={`flex justify-center items-center bg-white/22 text-[clamp(10px,1.8vw,20px)] ${idx === 0 ? 'rounded-tr-lg lg:rounded-tr-xl' : ''} ${idx === matches.length - 1 ? 'rounded-br-lg lg:rounded-br-xl' : ''} h-full`}
                                >
                                    {match.rank}
                                </div>
                            </td>
                            {match.icon && (
                                <div className={`absolute ${idx===0 ? "-right-[clamp(6px,1.5vw,25px)] -top-[clamp(6px,1.3vw,25px)] "
                                : "-right-[clamp(6px,1.5vw,25px)] -bottom-[clamp(6px,1.3vw,25px)] "} z-[9999]`}>
                                    {match.icon === "gold" && (
                                        <div className="relative w-4 h-4 min-[400px]:w-6 min-[400px]:h-6 md:w-8 md:h-8 lg:w-12 lg:h-12">
                                            <Image
                                                src="/table/gold_medal.svg"
                                                alt="trophy"
                                                fill
                                                className="drop-shadow-[0_0_4px_rgba(255,215,0,0.6)]"
                                            />
                                        </div>
                                    )}
                                    {match.icon === "silver" && (
                                        <div className="relative w-4 h-4 min-[400px]:w-6 min-[400px]:h-6 md:w-8 md:h-8 lg:w-12 lg:h-12">
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
                                        <div className="relative w-4 h-4 min-[400px]:w-6 min-[400px]:h-6 md:w-8 md:h-8 lg:w-12 lg:h-12">
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
                    ))}
                </tbody>
            </table>
        </div>
    );
}
