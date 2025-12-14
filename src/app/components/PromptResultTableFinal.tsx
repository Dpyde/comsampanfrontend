"use client";

import { quizTeams } from "./QuizResultTableFinal";
import ResultTable from "./ResultTable";
import Xarrow, { Xwrapper } from "react-xarrows";
const promptTeams=5;
export default function PromptResultTableFinal() {
  return (
  <div className="overflow-x-auto">
    <div className="relative flex justify-center gap-32 p-10 pl-40">
      <Xwrapper>
        {/* first */}
        <div className="flex flex-col justify-around gap-12">
            <div>
            <ResultTable matches={[{ team: "pun", rank: 0, id:"p1a" }]} />
            <ResultTable matches={[{ team: "สมองจักรกล", rank: 0, id:"p1b" }]} />
            <ResultTable matches={[{ team: "Orca Orclanker", rank: 0, id:"p1c" }]} />
            <ResultTable matches={[{ team: "เจมินิ", rank: 0, id:"p1d" }]} />
            <ResultTable matches={[{ team: "กระตุ่ย", rank: 0, id:"p1e" }]} />
            </div>
        </div>

        {/* second */}
        

        {/* third */}
        <div className="flex flex-col justify-center">
            <ResultTable matches={[
              { team: "เจมินิ", rank: 0,icon:"gold", id:"p3a",
                //  icon:"gold"
                 },
              
            ]}/>
        </div>

        <Xarrow
          start="p1a"
          end="p3a"
          path="grid"      
          curveness={0}
          gridBreak="50%"
          color="rgba(255, 255, 255, 1)"
          strokeWidth={2}
          showHead={false}
          endAnchor={{ position: "left", offset: { y: 0 } }}
        />
        <Xarrow
          start="p1b"
          end="p3a"
          path="grid"
          curveness={0}
          gridBreak="50%"
          color="rgba(255, 255, 255, 1)"
          strokeWidth={2}
          showHead={false}
          endAnchor={{ position: "left", offset: { y: 0 } }}
        />
        <Xarrow
          start="p1c"
          end="p3a"
          path="grid"
          curveness={0}
          gridBreak="50%"
          color="rgba(255, 255, 255, 1)"
          strokeWidth={2}
          showHead={false}
          endAnchor={{ position: "left", offset: { y: 0 } }}
        />
        <Xarrow
          start="p1d"
          end="p3a"
          path="grid"
          curveness={0}
          gridBreak="50%"
          color="rgba(255, 255, 255, 1)"
          strokeWidth={2}
          showHead={false}
          endAnchor={{ position: "left", offset: { y: 0 } }}
        />
        <Xarrow
          start="p1e"
          end="p3a"
          path="grid"
          curveness={0}
          gridBreak="50%"
          color="rgba(255, 255, 255, 1)"
          strokeWidth={2}
          showHead={false}
          endAnchor={{ position: "left", offset: { y: 0 } }}
        />
        
        
        
      </Xwrapper>
    </div>
  </div>
  );
}
export {promptTeams};