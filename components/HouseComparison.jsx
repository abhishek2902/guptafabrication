import { ArrowRight, Home, Shield } from "lucide-react"; // icons

export default function HouseComparison() {
  return (
    <div className="max-w-6xl mx-auto px- pb-8">

      <p className="text-base md:text-lg text-slate-600 mb-4 max-w-3xl mx-auto leading-relaxed 
          text-center bg-clip-text">
        <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 
                        text-transparent bg-clip-text font-semibold animate-gradient">
          Let our AI analyze your house
        </span> 
        &nbsp;and suggest the 
        <span className="font-bold"> perfect gate designs </span>
        that will enhance your property&apos;s
        <span className="text-blue-300 font-semibold"> beauty </span> 
        and 
        <span className="text-purple-300 font-semibold"> security</span>.
      </p>

      <div className="hidden md:flex gap-8">
        {/* Without Gate */}
        <div className="rounded-2xl shadow-lg overflow-hidden bg-white">
          <img
            src="/miscel/homenogate.jpeg"
            alt="House without gate"
            className="w-full h-64 md:h-80 object-"
          />
          <div className="p-4 flex items-center gap-3">
            <Home className="w-6 h-6 text-red-500" />
            <div>
              <h3 className="font-semibold text-lg">Without Gate</h3>
              <p className="text-gray-600 text-sm">
                An open front design without any boundary gate.  
                Provides easy access but less privacy & security.
              </p>
            </div>
          </div>
        </div>
        <div className="flex items-center space-x-1">
          <p className=" rounded-full p-2 bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-600">
            <ArrowRight className="w-8 h-8 text-white strokeWidth={3}" />
          </p>
        </div>

        {/* With Gate */}
        <div className="rounded-2xl shadow-lg overflow-hidden bg-white">
          <img
            src="/miscel/homewithgate.jpeg"
            alt="House with gate"
            className="w-full h-64 md:h-80 object-"
          />
          <div className="p-4 flex items-center gap-3">
            <Home className="w-6 h-6 text-green-600" />
            <div>
              <h3 className="font-semibold text-lg">With Gate</h3>
              <p className="text-gray-600 text-sm">
                A secured front design with a gate.  
                Enhances safety, privacy, and adds a stylish entrance.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex md:hidden items-center justify-center gap-4">
        {/* Without Gate */}
        <div className="flex flex-col items-center text-center w-40">
          <img
            src="/miscel/homenogate.jpeg"
            alt="House without gate"
            className="w-40 h-auto rounded-xl shadow-md"
          />
          <Home className="w-5 h-5 text-red-500 mt-2" />
          <p className="text-sm font-medium">Without Gate</p>
        </div>

        {/* Arrow in between */}
        <div className="flex items-center space-x-1">
          <p className=" rounded-full p-2 bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-600">
            <ArrowRight className="w-6 h-6 text-white" />
          </p>
        </div>

        {/* With Gate */}
        <div className="flex flex-col items-center text-center w-40">
          <img
            src="/miscel/homewithgate.jpeg"
            alt="House with gate"
            className="w-40 h-auto rounded-xl shadow-md"
          />
          <Shield className="w-5 h-5 text-green-600 mt-2" />
          <p className="text-sm font-medium">With Gate</p>
        </div>
      </div>

    </div>
  );
}
