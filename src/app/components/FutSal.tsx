"use client";
import ResultTable from "./ResultTable";
import type { MatchInfo } from "./ResultTable";
import Xarrow, { Xwrapper } from "react-xarrows";
import Image from "next/image";
let futsalTeams = 4;
export default function FutSal(Props: any) {
  return (
    <div className="overflow-x-auto pl-10 max-[445px]:pl-5 max-[410px]:pl-0">
      <div className="relative flex min-w-[500px] justify-start ">
        <Xwrapper>
          <div className="h-[500px] md:h-[636px] w-full grid grid-cols-3  gap-6 items-stretch">
            <div className="w-full h-full flex flex-col justify-center gap-4 items-end">
              <div id="f11" className="flex items-center">
                <ResultTable
                  matches={[
                    { id: "f11a", team: "ทีม CU", rank: 4 },
                    { id: "f11b", team: "ทีม KMITL", rank: 7 },
                  ]}
                />
              </div>
              <div id="f13" className="flex items-center mt-auto">
                <ResultTable
                  matches={[
                    { id: "f13a", team: "ทีม KU", rank: 3 },
                    { id: "f13b", team: "ทีม KMUTT", rank: 2 },
                  ]}
                />
              </div>
            </div>

            <div className=" w-full h-full flex flex-col items-center justify-center gap-4 ">
              <div id="f31" className=" relative flex items-center row-span-3">
                <ResultTable
                  matches={[
                    { id: "f31a", team: "ทีม KMITL", rank: 0, 
                        // icon: "gold"
                    },
                    { id: "f31b", team: "ทีม KU", rank: 0, 
                        // icon: "silver" 
                    },
                  ]}
                />
                
              </div>
            </div>
          </div>
          <Xarrow
            start="f11"
            end="f31"
            path="grid"
            gridBreak="50%"
            color="rgba(255, 255, 255, 1)"
            strokeWidth={2}
            showHead={false}
          />
          <Xarrow
            start="f13"
            end="f31"
            path="grid"
            gridBreak="50%"
            color="rgba(255, 255, 255, 1)"
            strokeWidth={2}
            showHead={false}
          />
        </Xwrapper>
      </div>
    </div>
  );
}
export { futsalTeams };