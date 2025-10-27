"use client";

import ResultTable from "./ResultTable";
import Xarrow, { Xwrapper } from "react-xarrows";

export default function PromptResultTableFinal() {
  return (
  <div className="overflow-x-auto">
    <div className="relative flex justify-center gap-32 p-10 pl-80 min-h-screen">
      <Xwrapper>
        {/* first */}
        <div className="flex flex-col justify-around gap-8">
          <div id="p1a">
            <ResultTable matches={[
              { team: "ทีม A", rank: 5, id:"p1a" }
            ]} />
          </div>
          <div id="p1b">
            <ResultTable matches={[
              { team: "ทีม B", rank: 5, id:"p1b" }
            ]}/>
          </div>
          <div id="p1c">
            <ResultTable matches={[
            { team: "ทีม C", rank: 5, id:"p1c" }
          ]}/>
          </div>
          <div id="p1d">
            <ResultTable matches={[
            { team: "ทีม D", rank: 5, id:"p1d" }
          ]}/>
          </div>
          <div id="p1e">
            <ResultTable matches={[
            { team: "ทีม E", rank: 5, id:"p1e" }
          ]}/>
          </div>
          <div id="p1f">
            <ResultTable matches={[
            { team: "ทีม F", rank: 5, id:"p1f" }
          ]}/>
          </div>
        </div>

        {/* second */}
        <div className="flex flex-col justify-center gap-64">
          <div id="p2a">
            <ResultTable matches={[
              { team: "ทีม A", rank: 5, id:"p2a_a" }]}/>
            <ResultTable matches={[
              { team: "ทีม B", rank: 5, id:"p2a_b" }]}/>
            <ResultTable matches={[
              { team: "ทีม C", rank: 5, id:"p2a_c" }]}/>
            <ResultTable matches={[
              { team: "ทีม D", rank: 5, id:"p2a_d" }]}/>
            <ResultTable matches={[
              { team: "ทีม E", rank: 5, id:"p2a_e", icon:"bronze" }]}/>
          </div>
        </div>

        {/* third */}
        <div className="flex flex-col justify-center">
            <ResultTable matches={[
              { team: "ทีม A", rank: 5, id:"p3a", icon:"gold" },
              { team: "ทีม F", rank: 5, id:"p3b", icon:"silver" }
            ]}/>
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
          endAnchor={{ position: "left", offset: { y: 0 } }}
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
          endAnchor={{ position: "left", offset: { y: 0 } }}
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
          endAnchor={{ position: "left", offset: { y: 0 } }}
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
          endAnchor={{ position: "left", offset: { y: 0 } }}
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
          endAnchor={{ position: "left", offset: { y: 0 } }}
        />
        <Xarrow
          start="p1f"
          end="p2a"
          path="grid"
          curveness={0}
          gridBreak="50%"
          color="rgba(255, 255, 255, 1)"
          strokeWidth={2}
          showHead={false}
          endAnchor={{ position: "left", offset: { y: 0 } }}
        />
        <Xarrow
          start="p1f"
          end="p3b"
          path="grid"
          curveness={0}
          gridBreak="90%"
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
      </Xwrapper>
    </div>
  </div>
  );
}
