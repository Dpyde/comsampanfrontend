"use client";

import ResultTable from "./ResultTable";
import Xarrow, { Xwrapper } from "react-xarrows";

export default function QuizResultTableFinal() {
  return (
    <div className="relative flex justify-center gap-32 p-10 pl-80 min-h-screen overflow-x-auto">
      <Xwrapper>
        {/* first */}
        <div className="flex flex-col justify-around gap-12">
          <div>
            <ResultTable matches={[
              { team: "ทีม A", rank: 5, id:"r1a" }
            ]} />
            <ResultTable matches={[
              { team: "ทีม B", rank: 5, id:"r1b" }
            ]}/>
            <ResultTable matches={[
            { team: "ทีม C", rank: 5 , id:"r1c"}
          ]}/>
          </div>
        </div>

        {/* second */}
        <div className="flex flex-col justify-center gap-64">
          <div id="r2a">
            <ResultTable matches={[
              { team: "ทีม A", rank: 5 , id:"r2a" },
              { team: "ทีม B", rank: 5 , icon: "bronze", id:"r2a"}
            ]}/>
          </div>
        </div>

        {/* middle */}
        {/* <div className="relative">
          <div
            id="mergePoint"
            className="absolute left-0 top-1/2 -translate-y-1/2 w-[8px] h-[8px] bg-white rounded-full"
          />
        </div> */}

        {/* third */}
        <div className="flex flex-col justify-center">
            <ResultTable matches={[
              { team: "ทีม A", rank: 5, icon: "gold", id:"r3a" },
              { team: "ทีม C", rank: 5, icon: "silver", id:"r3b"}
            ]}/>
        </div>

        <Xarrow
          start="r1a"
          end="r2a"
          path="grid"      
          curveness={0}
          gridBreak="50%"
          color="rgba(255, 255, 255, 1)"
          strokeWidth={2}
          showHead={false}
          // endAnchor={{ position: "left", offset: { y: -30 } }}
          endAnchor={{ position: "left", offset: { y: 0 } }}
        />
        <Xarrow
          start="r1b"
          end="r2a"
          path="grid"
          curveness={0}
          gridBreak="50%"
          color="rgba(255, 255, 255, 1)"
          strokeWidth={2}
          showHead={false}
          endAnchor={{ position: "left", offset: { y: 0 } }}
        />
        <Xarrow
          start="r1c"
          end="r2a"
          path="grid"
          curveness={0}
          gridBreak="50%"
          color="rgba(255, 255, 255, 1)"
          strokeWidth={2}
          showHead={false}
          endAnchor={{ position: "left", offset: { y: 0 } }}
          startAnchor={{ position: "right", offset: { y: 20 } }}
        />
        <Xarrow
          start="r1c"
          end="r3b"
          path="grid"
          curveness={0}
          gridBreak="90%"
          color="rgba(255, 255, 255, 1)"
          strokeWidth={2}
          showHead={false}
          startAnchor={{ position: "right", offset: { y: 20 } }}
        />
        <Xarrow
          start="r2a"
          end="r3a"
          path="grid"
          curveness={0}
          gridBreak="50%"
          color="rgba(255, 255, 255, 1)"
          strokeWidth={2}
          showHead={false}
            
        />
      </Xwrapper>
    </div>
  );
}
