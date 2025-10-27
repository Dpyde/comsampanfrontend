"use client";

import ResultTable from "./ResultTable";
import Xarrow, { Xwrapper } from "react-xarrows";

export default function PromptResultTableFinal() {
  return (
  <Xwrapper>
    <div className="relative flex justify-center gap-32 p-10 min-h-screen overflow-x-auto">
        {/* first */}
        <div className="flex flex-col justify-around gap-24">
          <div id="p1a">
            <ResultTable matches={[
              { team: "ทีม A", rank: 5 }
            ]} />
          </div>
          <div id="p1b">
            <ResultTable matches={[
              { team: "ทีม B", rank: 5 }
            ]}/>
          </div>
          <div id="p1c">
            <ResultTable matches={[
            { team: "ทีม C", rank: 5 }
          ]}/>
          </div>
          <div id="p1d">
            <ResultTable matches={[
            { team: "ทีม D", rank: 5 }
          ]}/>
          </div>
          <div id="p1e">
            <ResultTable matches={[
            { team: "ทีม E", rank: 5 }
          ]}/>
          </div>
          <div id="p1f">
            <ResultTable matches={[
            { team: "ทีม F", rank: 5 }
          ]}/>
          </div>
        </div>

        {/* second */}
        <div className="flex flex-col justify-center gap-64">
          <div id="p2a">
            <ResultTable matches={[
              { team: "ทีม A", rank: 5 },
              { team: "ทีม B", rank: 5 },
              { team: "ทีม C", rank: 5 },
              { team: "ทีม D", rank: 5 },
              { team: "ทีม E", rank: 5 },
            ]}/>
          </div>
          <div id="p2b">
            <ResultTable matches={[
              { team: "ทีม F", rank: 5 }
            ]}/>
          </div>
        </div>

        {/* third */}
        <div className="flex flex-col justify-center">
          <div id="p3a">
            <ResultTable matches={[
              { team: "ทีม A", rank: 5 }
            ]}/>
          </div>
        </div>

        <Xarrow
          start="p1a"
          end="p2a"
          path="grid"      
          curveness={0}
          gridBreak="50%"
          color="rgba(255, 255, 255, 1)"
          strokeWidth={2}
          showHead={false}
          // endAnchor={{ position: "left", offset: { y: -30 } }}
        />
        <Xarrow
          start="p1b"
          end="p2a"
          path="grid"
          curveness={0}
          gridBreak="50%"
          color="rgba(255, 255, 255, 1)"
          strokeWidth={2}
          showHead={false}
        />
        <Xarrow
          start="p1c"
          end="p2b"
          path="grid"
          curveness={0}
          gridBreak="50%"
          color="rgba(255, 255, 255, 1)"
          strokeWidth={2}
          showHead={false}
        />
        <Xarrow
          start="p1c"
          end="p2a"
          path="grid"
          curveness={0}
          gridBreak="50%"
          color="rgba(255, 255, 255, 1)"
          strokeWidth={2}
          showHead={false}
        />
        <Xarrow
          start="p1d"
          end="p2a"
          path="grid"
          curveness={0}
          gridBreak="50%"
          color="rgba(255, 255, 255, 1)"
          strokeWidth={2}
          showHead={false}
        />
        <Xarrow
          start="p1e"
          end="p2a"
          path="grid"
          curveness={0}
          gridBreak="50%"
          color="rgba(255, 255, 255, 1)"
          strokeWidth={2}
          showHead={false}
        />
        <Xarrow
          start="p1f"
          end="p2b"
          path="grid"
          curveness={0}
          gridBreak="50%"
          color="rgba(255, 255, 255, 1)"
          strokeWidth={2}
          showHead={false}
        />
        <Xarrow
          start="p2a"
          end="p3a"
          path="grid"
          curveness={0}
          gridBreak="50%"
          color="rgba(255, 255, 255, 1)"
          strokeWidth={2}
          showHead={false}
        />
        <Xarrow
          start="p2b"
          end="p3a"
          path="grid"
          curveness={0}
          gridBreak="50%"
          color="rgba(255, 255, 255, 1)"
          strokeWidth={2}
          showHead={false}
        />
    </div>
  </Xwrapper>
  );
}
