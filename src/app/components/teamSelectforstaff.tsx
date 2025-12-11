"use client";

import * as React from "react";
import {
  Box,
  Radio,
  RadioGroup,
  FormControlLabel,
  TextField,
  Typography,
} from "@mui/material";
import { prompt } from "@/app/font";

export default function TeamScoreSelector() {
  const [selectedTeam, setSelectedTeam] = React.useState("");
  const [scores, setScores] = React.useState({
    A: "",
    B: "",
    C: "",
    D: "",
    E: "",
  });

  const handleScoreChange = (team: string, value: string) => {
    setScores((prev) => ({ ...prev, [team]: value }));
  };

  return (
    <Box
      sx={{
        display: "flex",
        padding: 2,
        borderRadius: 3,
        color: "white",
        width: "fit-content",
      }}
    >
      <RadioGroup
        value={selectedTeam}
        onChange={(e) => setSelectedTeam(e.target.value)}
      >
        {["A", "B", "C", "D", "E"].map((team) => (
          <Box
            key={team}
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 2,
              mb: 2,
              
              
            }}
          >
            <FormControlLabel className={prompt.variable}
              value={team}
              control={<Radio sx={{ color: "white" }} />}
              label={<Typography sx={{ color: "white", fontSize: "1.2rem", fontFamily: "var(--font-prompt)" }}>ทีม {team}</Typography>}
            />

            <TextField
              value={scores[team as keyof typeof scores]}
              onChange={(e) => handleScoreChange(team, e.target.value)}
              variant="outlined"
              inputProps={{
                style: {
                  textAlign: "center",
                  fontWeight: "bold",
                  fontSize: "1.2rem",
                  width: "20px",
                  height: '10px',
                  color: "black",
                },
              }}
              sx={{
                backgroundColor: "white",
                borderRadius: 1,
              }}
            />

            <Typography sx={{ fontSize: "1.2rem", ml: 1, fontFamily: "var(--font-prompt)" }}>คะแนน</Typography>
          </Box>
        ))}
      </RadioGroup>
    </Box>
  );
}
