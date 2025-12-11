// app/fonts.ts
import localFont from "next/font/local";
import { Prompt } from "next/font/google";
export const zfPixel = localFont({
  src: [{ path: "./fonts/ZF-2ndPixelus.ttf", weight: "400", style: "normal" }],
  variable: "--font-zf",
  display: "block", // avoid flash of fallback
});
export const prompt = Prompt({
  subsets: ["latin", "thai"],
  weight: ["300","400","500","600","700"], // pick what you need
  variable: "--font-prompt",
  display: "swap",
});
