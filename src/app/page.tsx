"use client";

import Navbar from "./home/Navbar";
import "tailwindcss/tailwind.css";
import { ThemeProvider} from "@material-tailwind/react";

export default function Home() {
  return (
    <ThemeProvider>
      <Navbar />
      <div>open-art</div>
      <div>coming soon</div>
    </ThemeProvider>
  );
}
