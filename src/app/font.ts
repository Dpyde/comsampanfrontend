import localFont from "next/font/local";
import { Prompt } from "next/font/google";

export const zfPixel = localFont({
  src: "./fonts/ZF-2ndPixelus.ttf",   // or .woff2 if you have it
  variable: "--font-zf",
  display: "block",
});

export const prompt = Prompt({
  subsets: ["latin", "thai"],
  weight: ["300","400","500","600","700"], // pick what you need
  variable: "--font-prompt",
  display: "swap",
});