import Navbar from "./containers/Navbar";
import "tailwindcss/tailwind.css";

export default function Home() {
  return (
    <main>
      <Navbar />
      <div className="text-red-500 font-bold">open-art</div>
      <div>coming soon</div>
    </main>
  );
}
