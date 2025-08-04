import { Award, Hammer, Handshake, Users } from "lucide-react";
import { useEffect, useState } from "react";

export function HeroSection() {
  return (
    <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-20 pt-40 relative overflow-hidden hero-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-in-left">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              About <span className="text-orange-400">Gupta Fabrication</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              For over two decades, we&apos;ve been crafting excellence in metal fabrication. From humble beginnings to a trusted name in the industry, our journey is built on quality, innovation, and unwavering commitment to our clients.
            </p>
            <div className="flex flex-wrap gap-6">
              <CounterCard number={25} label="Years Experience" />
              <CounterCard number={1500} label="Projects Completed" />
              <CounterCard number={98} label="Client Satisfaction" />
            </div>
          </div>

          <div className="animate-slide-in-right relative">
            <div className="animate-floating bg-gradient-to-r from-orange-500 to-red-500 rounded-3xl p-8 shadow-2xl">
              <div className="grid grid-cols-2 gap-6 text-center">
                <InfoCard icon={<Award size={32} />} title="ISO Certified" subtitle="Quality Assured" />
                <InfoCard icon={<Users size={32} />} title="Expert Team" subtitle="Skilled Professionals" />
                <InfoCard icon={<Hammer size={32} />} title="Modern Equipment" subtitle="Latest Technology" />
                <InfoCard icon={<Handshake size={32} />} title="Trusted Service" subtitle="Reliable Partner" />
              </div>
            </div>
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-orange-400 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-red-400 rounded-full opacity-20 animate-pulse animation-delay-1000"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CounterCard({ number, label }: { number: number; label: string }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let start = 0;
    const end = number;
    const increment = Math.ceil(end / 100);
    const interval = setInterval(() => {
      start += increment;
      if (start >= end) {
        start = end;
        clearInterval(interval);
      }
      setCount(start);
    }, 20);
    return () => clearInterval(interval);
  }, [number]);

  return (
    <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-4 border border-white border-opacity-20 w-40">
      <div className="text-3xl font-bold text-orange-400 tabular-nums">{count}</div>
      <div className="text-sm text-gray-300">{label}</div>
    </div>
  );
}

function InfoCard({ icon, title, subtitle }: { icon: React.ReactNode; title: string; subtitle: string }) {
  return (
    <div className="bg-white bg-opacity-20 rounded-2xl p-6 shadow-lg text-white">
      <div className="mb-3">{icon}</div>
      <h4 className="text-lg font-bold mb-1">{title}</h4>
      <p className="text-orange-100 text-sm">{subtitle}</p>
    </div>
  );
}