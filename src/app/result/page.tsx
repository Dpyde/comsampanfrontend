"use client";

import { useState } from "react";
import Image from "next/image";
import SelectSport from "../components/SelectSport";
import FutSal from "../components/FutSal";
import MaleBasketball from "../components/MaleBasketball";
// import FemaleBasketBall from "../components/FemaleBasketball";
import QuizResultTableFinal from "../components/QuizResultTableFinal";
import PromptResultTableFinal from "../components/PromptResultTableFinal";
// import { femaleBasketballTeams } from "../components/FemaleBasketball";
import { maleBasketballTeams } from "../components/MaleBasketball";
import { futsalTeams } from "../components/FutSal";
import { quizTeams } from "../components/QuizResultTableFinal";
import { promptTeams } from "../components/PromptResultTableFinal";
import Chip from "@mui/material/Chip";

export default function CompetitionResult() {
  const [sport, setSport] = useState("");
  const [team, setTeam] = useState(10);
  const teamMap: Record<string, number> = {
    ฟุตซอล: futsalTeams,
    บาสเกตบอลชาย: maleBasketballTeams,
    // "บาสเกตบอลหญิง": femaleBasketballTeams,
    "แข่งเกม prompt": promptTeams,
    แข่งเกมตอบคำถาม: quizTeams,
  };
  const handleSportChange = (value: string) => {
    setSport(value);
    setTeam(teamMap[value] ?? 0);
  };
  return (
    <div className="w-full min-h-screen overflow-x-auto flex justify-center pb-6 px-6" style={{backgroundImage: "url('background/Background.svg')"}}>
      <div className="w-full min-w-[200px] self-start min-[1024px]:mt-30 mt-24 max-w-[1400px] min-h-[75vh] p-6 backdrop-blur-xl rounded-2xl bg-white/5 border border-white ">
        {/* Title */}
        <h1 className="text-white text-3xl max-[300px]:text-xl  font-bold mb-8">
          ผลการแข่งขัน
        </h1>
        {/* Filters Row */}

        {/* Select Sport */}
        <div className="flex w-full mb-8 justify-center items-center">
          <SelectSport onSportChange={handleSportChange} />
        </div>

        {sport == "ฟุตซอล" ? (
          <div className="flex flex-col justify-center gap-8">
            <div className="text-xl font-bold text-white">
              ทีมทั้งหมด{" "}
              <Chip
                label={`${team} ทีม`}
                size="small"
                sx={{
                  backgroundColor: "#C8CDFF",
                  color: "#2A348C",
                  "& .MuiChip-label": {
                    fontFamily: "var(--font-prompt)",
                    fontSize: "14px",
                    fontWeight: 600,
                  },
                }}
              ></Chip>
            </div>
            <FutSal />
          </div>
        ) : sport == "บาสเกตบอลชาย" ? (
          <div className="flex flex-col justify-center gap-8">
            <div className="text-xl font-bold text-white">
              ทีมทั้งหมด{" "}
              <Chip
                label={`${team} ทีม`}
                size="small"
                sx={{
                  backgroundColor: "#C8CDFF",
                  color: "#2A348C",
                  "& .MuiChip-label": {
                    fontFamily: "var(--font-prompt)",
                    fontSize: "14px",
                    fontWeight: 600,
                  },
                }}
              ></Chip>
            </div>
            <div className="flex w-full justify-center items-center">
              <MaleBasketball />
            </div>
          </div>
        ) 
        // : sport == "บาสเกตบอลหญิง" ? (
        //   <div className="flex flex-col justify-center gap-8">
        //     <div className="text-xl font-bold text-white">
        //       ทีมทั้งหมด{" "}
        //       <Chip
        //         label={`${team} ทีม`}
        //         size="small"
        //         sx={{
        //           backgroundColor: "#C8CDFF",
        //           color: "#2A348C",
        //           "& .MuiChip-label": {
        //             fontFamily: "var(--font-prompt)",
        //             fontSize: "14px",
        //             fontWeight: 600,
        //           },
        //         }}
        //       ></Chip>
        //     </div>
        //     <div className="flex w-full justify-center items-center">
        //       <FemaleBasketBall />
        //     </div>
        //   </div>
        // ) 
        : sport == "แข่งเกม prompt" ? (
          <div className="flex flex-col justify-center gap-8">
            <div className="text-xl font-bold text-white">
              ทีมทั้งหมด{" "}
              <Chip
                label={`${team} ทีม`}
                size="small"
                sx={{
                  backgroundColor: "#C8CDFF",
                  color: "#2A348C",
                  "& .MuiChip-label": {
                    fontFamily: "var(--font-prompt)",
                    fontSize: "14px",
                    fontWeight: 600,
                  },
                }}
              ></Chip>
            </div>
            <div className="flex w-full justify-center items-center">
              <PromptResultTableFinal />
            </div>
          </div>
        ) : sport == "แข่งเกมตอบคำถาม" ? (
          <div className="flex flex-col justify-center gap-8">
            <div className="text-xl font-bold text-white">
              ทีมทั้งหมด{" "}
              <Chip
                label={`${team} ทีม`}
                size="small"
                sx={{
                  backgroundColor: "#C8CDFF",
                  color: "#2A348C",
                  "& .MuiChip-label": {
                    fontFamily: "var(--font-prompt)",
                    fontSize: "14px",
                    fontWeight: 600,
                  },
                }}
              ></Chip>
            </div>
            <div className="flex w-full justify-center items-center">
              <QuizResultTableFinal />
            </div>
          </div>
        ) : (
          <div className="w-full gap-8 min-h-[50vh] flex flex-row max-[360px]:flex-col justify-center items-center text-white/90 text-center">
            <Image
              src="/result/loading.png"
              width={90}
              height={55}
              alt="loading picture"
            />
            <div className="flex flex-col">
              <h2 className="text-xl font-semibold">ไม่พบผลการแข่งขัน</h2>
              <p className="opacity-70">กรุณาเลือกตัวกรองเพื่อดูผลการแข่งขัน</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
