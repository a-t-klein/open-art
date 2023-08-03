import Navbar from "./containers/Navbar";
import "tailwindcss/tailwind.css";

export default function Home() {
  return (
    <main
      className={`
      bg-background
      text-white
    `}
    >
      <Navbar />
      <div>open-art</div>
      <div>coming soon</div>
    </main>
  );
}
