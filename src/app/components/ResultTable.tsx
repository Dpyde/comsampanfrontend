import Image from "next/image"
export default function ResultTable() {
    const matches=[
        {team:"ทีม ABCDEFG 1234567890",rank:5},{team:"ทีม ABCDEFG 1234567890",rank:5}
    ]
    return (
            <div className="border border-white rounded-xl">
                <table className=" bg-[#121139] text-white backdrop-blur-lg w-[400px] h-[120px] rounded-xl">
                <colgroup>
                    <col className="w-[15%]" /> {/* rank */}
                    <col className="w-[70%]" /> {/* star */}
                    <col className="w-[15%]" /> {/* team */}
                </colgroup>
                <tbody className="divide-y">
                    {matches.map((match,idx)=>(
                        <tr>
                        <td>
                            <div className="flex justify-center items-center"><Image src="/table/star.svg" alt="star icon" width={60} height={60} /></div>
                        </td>
                        <td>
                            <div className="flex text-[20px] justify-center items-center">{match.team}</div>
                        </td>
                        <td>
                            <div className={`flex text-[20px] justify-center h-full items-center ${idx===0 ? 'rounded-tr-xl' : 'rounded-br-xl'} bg-white/22`}>{match.rank}</div>
                        </td>
                    </tr>
                    ))
                    }
                   
                </tbody>
            </table>
            </div>
            
       
    )

}