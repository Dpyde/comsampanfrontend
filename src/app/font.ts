// app/fonts.ts
import localFont from "next/font/local";

export const zfPixel = localFont({
  src: [{ path: "./fonts/ZF-2ndPixelus.ttf", weight: "400", style: "normal" }],
  variable: "--font-zf",
  display: "block", // avoid flash of fallback
});
