"use client";

import ResultTable from "./ResultTable";
import Xarrow, { Xwrapper } from "react-xarrows";

export default function QuizResultTableFinal() {
  return (
    <div className="relative flex justify-center gap-32 p-10 min-h-screen overflow-x-auto">
      <Xwrapper>
        {/* first */}
        <div className="flex flex-col justify-around gap-24">
          <div id="r1a">
            <ResultTable matches={[
              { team: "ทีม A", rank: 5 }
            ]} />
          </div>
          <div id="r1b">
            <ResultTable matches={[
              { team: "ทีม B", rank: 5 }
            ]}/>
          </div>
          <div id="r1c">
            <ResultTable matches={[
            { team: "ทีม C", rank: 5 }
          ]}/>
          </div>
        </div>

        {/* second */}
        <div className="flex flex-col justify-center gap-64">
          <div id="r2a">
            <ResultTable matches={[
              { team: "ทีม A", rank: 5 },
              { team: "ทีม B", rank: 5 }
            ]}/>
          </div>
          <div id="r2b">
            <ResultTable matches={[
              { team: "ทีม C", rank: 5 }
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
          <div id="r3a">
            <ResultTable matches={[
              { team: "ทีม A", rank: 5 }
            ]}/>
          </div>
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
        />
        <Xarrow
          start="r1c"
          end="r2b"
          path="grid"
          curveness={0}
          gridBreak="50%"
          color="rgba(255, 255, 255, 1)"
          strokeWidth={2}
          showHead={false}
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
        <Xarrow
          start="r2b"
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
