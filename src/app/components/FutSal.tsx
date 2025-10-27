"use client";
import ResultTable from "./ResultTable";
import type { MatchInfo } from "./ResultTable";
import Xarrow, { Xwrapper } from "react-xarrows";
export default function FutSal(Props: any) {

    return (
        <Xwrapper>
            <div className="h-[500px] md:h-[636px] w-full grid grid-cols-3  gap-6 items-stretch">
                <div className="w-full h-full grid grid-rows-3 place-content-center gap-4 ">
                    <div id="f11" className="flex items-center">
                        <ResultTable matches={[
                            { id:"f11a",team: "ทีม ABCDEFG", rank: 5 }, { id:"f11b" ,team: "ทีม ABCDEFG", rank: 5 }]} />

                    </div>
                    <div id="f12" className="flex items-center">
                        <ResultTable matches={[
                            { id:"f12a", team: "ทีม ABCDEFG", rank: 5 }]} />

                    </div>
                    <div id="f13" className="flex items-center">
                        <ResultTable matches={[
                            {id:"f13a" ,team: "ทีม ABCDEFG", rank: 5 },
                            {id:"f13b", team: "ทีม ABCDEFG", rank: 5 },]} />

                    </div>

                </div>
                <div className="w-full h-full grid grid-rows-3 place-content-center gap-4 ">
                    <div id="f21" className="flex items-center row-span-2">
                        <ResultTable matches={[
                            {id:"f21a", team: "ทีม A/B", rank: 5 }, {id:"f21b", team: "ทีม E", rank: 5 }]} />

                    </div>


                </div>
                <div className="w-full h-full grid grid-rows-3 place-content-center gap-4 ">
                    <div id="f31" className="flex items-center row-span-3">
                        <ResultTable matches={[
                            {id:"f31a", team: "ทีม A/B/E", rank: 5 }, {id:"f31b", team: "ทีม C/D", rank: 5 }]} />

                    </div>


                </div>
            </div>
            <Xarrow
                start="f11"
                end="f21a"
                path="grid"

                gridBreak="50%"
                color="rgba(255, 255, 255, 1)"
                strokeWidth={2}
                showHead={false}
            />
            <Xarrow
                start="f12"
                end="f21b"
                path="grid"

                gridBreak="50%"
                color="rgba(255, 255, 255, 1)"
                strokeWidth={2}
                showHead={false}
            />
            <Xarrow
                start="f21"
                end="f31a"
                path="grid"

                gridBreak="50%"
                color="rgba(255, 255, 255, 1)"
                strokeWidth={2}
                showHead={false}
            />
            <Xarrow
                start="f13"
                end="f31b"
                path="grid"

                gridBreak="50%"
                color="rgba(255, 255, 255, 1)"
                strokeWidth={2}
                showHead={false}
            />
           
        </Xwrapper>

    );
}