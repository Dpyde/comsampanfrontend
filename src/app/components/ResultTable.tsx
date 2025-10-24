import Image from "next/image"
export default function ResultTable() {
    const matches=[
        {team:"ทีม ABCDEFG 1234567890",rank:5},{team:"ทีม ABCDEFG 1234567890",rank:5}
    ]
    return (
            <div className="w-3/12 min-w-[75px] max-[298]:h-[70px] max-[518px]:h-[55px]  min-[1300px]:w-[402px] border border-white rounded-lg lg:rounded-xl">
                <table className=" bg-[#121139] py-3 md:py-0 text-white backdrop-blur-lg h-full min-[1300px]:w-[400px] min-[1024px]:h-[130px] min-[1350px]:h-[120px] rounded-lg lg:rounded-xl">
                <colgroup>
                    <col className="w-[15%] max-[518px]:w-[20%] " /> {/* rank */}
                    <col className="w-[70%]  max-[518px]:w-[65%]"  /> {/* star */}
                    <col className="w-[15%]  max-[518px]:w-[15%]" /> {/* team */}
                </colgroup>
                <tbody className="divide-y">
                    {matches.map((match,idx)=>(
                        <tr>
                        <td>
                            <div className="flex justify-center items-center"><Image src="/table/star.svg" alt="star icon" width={60} height={60} /></div>
                        </td>
                        <td>
                            <div className="flex text-[7px] max-[545px]:mr-[3px] md:text-[10px]  lg:text-[20px] text-center justify-center items-center">{match.team}</div>
                        </td>
                        <td>
                            <div className={`flex text-[7px] md:text-[10px] lg:text-[20px] justify-center h-full items-center ${idx===0 ? 'rounded-tr-lg lg:rounded-tr-xl' : ''} ${idx===(matches.length-1) ? 'rounded-br-lg lg:rounded-br-xl' : ''} bg-white/22`}>{match.rank}</div>
                        </td>
                    </tr>
                    ))
                    }
                </tbody>
            </table>
            </div>
            
       
    )

}
