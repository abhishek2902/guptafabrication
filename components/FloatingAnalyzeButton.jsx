import { BrainCircuit } from "lucide-react";
import Link from "next/link";

export default function FloatingAnalyzeButton() {
  return (
    <Link
      href="/visualizer"
      className="fixed bottom-5 right-5 z-50 
                 flex items-center gap-2
                 bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-600 
                 text-white px-4 py-2 rounded-full shadow-lg
                 text-sm font-bold
                 hover:from-blue-400 hover:via-purple-400 hover:to-indigo-500 
                 transition-all duration-300 hover:shadow-2xl
                 animate-pulse-glow"
    >
      <BrainCircuit className="w-4 h-4" />
      AI Gate Visualizer
    </Link>
  );
}
