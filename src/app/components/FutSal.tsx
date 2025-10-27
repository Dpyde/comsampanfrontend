"use client";
import ResultTable from "./ResultTable";
import type { MatchInfo } from "./ResultTable";
import Xarrow, { Xwrapper } from "react-xarrows";
import Image from "next/image";
export default function FutSal(Props: any) {

    return (
        <Xwrapper>
            <div className="h-[500px] md:h-[636px] w-full grid grid-cols-3  gap-6 items-stretch">
                <div className="w-full h-full grid grid-rows-3 place-content-center gap-4 ">
                    <div id="f11" className="flex items-center">
                        <ResultTable matches={[
                            { id: "f11a", team: "ทีม A", rank: 5 }, { id: "f11b", team: "ทีม B", rank: 5 }]} />

                    </div>
                    <div id="f12" className="flex items-center">
                        <ResultTable matches={[
                            { id: "f12a", team: "ทีม E", rank: 5 }]} />

                    </div>
                    <div id="f13" className="flex items-center">
                        <ResultTable matches={[
                            { id: "f13a", team: "ทีม C", rank: 5 },
                            { id: "f13b", team: "ทีม D", rank: 5 },]} />

                    </div>

                </div>
                <div className="w-full h-full grid grid-rows-3 place-content-center gap-4 ">
                    <div id="f21" className="flex items-center row-span-2">
                        <ResultTable matches={[
                            { id: "f21a", team: "ทีม A/B", rank: 5 }, { id: "f21b", team: "ทีม E", rank: 5 }]} />

                    </div>


                </div>
                <div className=" w-full h-full flex flex-col items-center justify-center gap-4 ">
                    <div id="f31" className=" relative flex items-center row-span-3">
                        <ResultTable matches={[
                            { id: "f31a", team: "ทีม A/B/E", rank: 5,icon:"gold" }, { id: "f31b", team: "ทีม C/D", rank: 5,icon:"silver" }]} />
                        {/* <div className="absolute -right-6 top-[10px] -translate-y-1/2 z-[9999]">
                            <div className="relative w-6 h-6 md:w-8 md:h-8 lg:w-12 lg:h-12">
                                <Image
                                    src="/table/gold_medal.svg"
                                    alt="trophy"
                                    fill
                                    className="drop-shadow-[0_0_4px_rgba(255,215,0,0.6)]"
                                />
                            </div>
                        </div> */}
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