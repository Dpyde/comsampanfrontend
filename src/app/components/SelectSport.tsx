import { useState } from "react";

export default function SelectSport({ onSportChange }: { onSportChange?: (value: string) => void; }) {
  const [open, setOpen] = useState(false);
  const [sport, setSport] = useState("");

  const isFloating = sport !== "" || open;

  return (
    <div className="relative w-full">

      {/* Outline */}
      <div
        className="
          absolute inset-0 rounded border border-white pointer-events-none
        "
        style={{
          clipPath: isFloating
            ? "polygon(0 0, 8px 0, 8px 12px, 85px 12px, 85px 0, 100% 0, 100% 100%, 0 100%)"
            : "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
        }}
      />

      {/* Floating Label */}
      <label
        className={`
          absolute transition-all text-white px-1
          ${isFloating ? "text-xs -top-2 left-2" : "text-base top-4 left-4 opacity-70"}
        `}
      >
        เลือกชนิดกีฬา
      </label>

      {/* Input Area */}
      <div
        onClick={() => setOpen(!open)}
        className="relative h-14 flex items-center px-4 text-white cursor-pointer"
      >
        {sport || ""}
      </div>

      {/* Dropdown */}
      {open && (
        <div className="absolute top-[110%] left-0 w-full bg-white text-black rounded shadow-lg z-50">
          {[
            "ฟุตซอล",
            "บาสเกตบอลชาย",
            // "บาสเกตบอลหญิง",
            "แข่งเกม prompt",
            "แข่งเกมตอบคำถาม",
          ].map((item) => (
            <div
              key={item}
              onClick={() => {
                setSport(item);
                onSportChange?.(item);
                setOpen(false);
              }}
              className="px-4 py-3 hover:bg-gray-200 cursor-pointer"
            >
              {item}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
