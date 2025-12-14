"use client";

import ResultTable from "./ResultTable";
import Xarrow, { Xwrapper } from "react-xarrows";
const quizTeams = 5;
export default function QuizResultTableFinal() {
  return (
    <div className="overflow-x-auto">
      <div className="relative flex justify-center gap-32 p-10 pl-80">
        <Xwrapper>
          {/* first */}
          <div className="flex flex-col justify-around gap-12">
            <div>
              <ResultTable
                matches={[{ team: "6.7% winrate", rank: 90, id: "r1a" }]}
              />
              <ResultTable
                matches={[{ team: "ติ๋มอย่าทิ้งเค้า", rank: 70, id: "r1b" }]}
              />
              <ResultTable
                matches={[{ team: "KUJETH", rank: 80, id: "r1c" }]}
              />
              <ResultTable
                matches={[{ team: "sudo win siit", rank: 60, id: "r1d" }]}
              />
              <ResultTable
                matches={[{ team: "อิหยัง", rank: 80, id: "r1e" }]}
              />
            </div>
          </div>

          {/* second */}
          <div className="flex flex-col justify-center gap-64">
            <div id="r2a">
              <ResultTable matches={[{ team: "ทีม A", rank: 0, id: "r2b" }]} />
              <ResultTable matches={[{ team: "ทีม B", rank: 0, id: "r2c" }]} />
              <ResultTable
                matches={[
                  {
                    team: "ทีม C",
                    rank: 0,
                    //  icon: "bronze",
                    id: "r2d",
                  },
                ]}
              />
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
          <div className="flex flex-col justify-center " id="r3a">
            <ResultTable
              matches={[
                { team: "ทีม D", rank: 0, icon: "gold", id: "r3b" },
                { team: "ทีม E", rank: 0, icon: "silver", id: "r3c" },
              ]}
            />
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
          />
          <Xarrow
            start="r1d"
            end="r2a"
            path="grid"
            curveness={0}
            gridBreak="50%"
            color="rgba(255, 255, 255, 1)"
            strokeWidth={2}
            showHead={false}
          />
          <Xarrow
            start="r1e"
            end="r2a"
            path="grid"
            curveness={0}
            gridBreak="50%"
            color="rgba(255, 255, 255, 1)"
            strokeWidth={2}
            showHead={false}
          />
          <Xarrow
            start="r2d"
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
          <Xarrow
            start="r2c"
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
    </div>
  );
}

export { quizTeams };
