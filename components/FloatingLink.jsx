import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import {  Camera, WandSparkles } from "lucide-react";
import HouseComparison from "./HouseComparison"; // Adjust the path if needed

export default function FloatingLink() {
  const targetRef = useRef(null);
  // const [isTargetVisible, setIsTargetVisible] = useState(false);
  // const [buttonState, setButtonState] = useState("corner"); // "corner" or "center"

  // On intersection change, control animation steps
  // useEffect(() => {
  //   if (isTargetVisible) {
  //     setButtonState("center");
  //   } else {
  //     setButtonState("corner");
  //   }
  // }, [isTargetVisible]);

  // // Intersection observer
  // useEffect(() => {
  //   const observer = new IntersectionObserver(
  //     ([entry]) => {
  //       setIsTargetVisible(entry.isIntersecting);
  //     },
  //     { threshold: 0 }
  //   );

  //   if (targetRef.current) observer.observe(targetRef.current);

  //   return () => {
  //     if (targetRef.current) observer.unobserve(targetRef.current);
  //   };
  // }, []);

  // // Positioning classes
  // let baseClasses = "transition-all duration-1000 ease-in-out fixed z-50";
  let baseClasses = "";
  let positionClasses = "";
  let positionClasses2 = "";
  // let maxwidth ="max-content"
  let maxwidth =""

  // if (buttonState === "center") {
  //   // positionClasses =
  //   //   "left-1/2 bottom-1/2 translate-x-[-50%] translate-y-[50%]";
  //   positionClasses = ""
  //   positionClasses2 = ""
  //   maxwidth =""
  //   baseClasses = "transition-all duration-1000 ease-in-out";
  // } else if (buttonState === "corner") {
  //   baseClasses = "transition-all duration-1000 ease-in-out fixed z-50";
  //   positionClasses =
  //     "left-[75%] sm:left-[85%] lg:left-[90%] 2xl:left-[93%] bottom-[1rem] translate-x-[-50%] translate-y-0";
  //   positionClasses2 =
  //     "left-[75%] sm:left-[85%] lg:left-[90%] 2xl:left-[93%] bottom-[100rem] translate-x-[-50%] translate-y-0";
  // }

  return (
    <section className="bg-gradient-to-br from-slate-50 to-slate-100 py-8 md:py-16 border-t border-amber-200">
      <div className="max-w-4xl mx-auto text-center px-4">
        <h2 className="text-2xl sm:text-4xl font-bold bg-gradient-to-r from-slate-800 to-slate-900 bg-clip-text text-transparent mb-6">
          AI Gate Visualizer
        </h2>

        <HouseComparison />

        <div className="flex flex-col gap-4 items-center w-full px-2">
          {/* Target Area with a ref */}
          <div
            ref={targetRef}
            className="flex items-center justify-center w-full h-1"
          ></div>

          {/* Animated Link/Button */}
          <Link
            href="/visualizer"
            className={`w-full sm:max-w-md flex justify-center items-center gap-2 bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-600 text-slate-900 px-4 py-2 sm:px-6 sm:py-3 rounded-lg text-sm sm:text-base md:text-lg font-bold shadow-2xl pulse-glow text-center hover:from-blue-400 hover:via-purple-400 hover:to-indigo-500 ${baseClasses} ${positionClasses}`}
            style={{ width: `${maxwidth}` }}
          >
            {/* <Eye className="w-4 h-4" /> */}
					<Camera className="w-4 h-4 sm:w-auto sm:h-auto" />
            Try AI Gate Visualizer
						<WandSparkles className="w-4 h-4 sm:w-auto sm:h-auto"/>
          </Link>

          {/* Call & WhatsApp Buttons */}
          <div className="flex flex-row gap-4 w-full sm:w-auto justify-center">
            <a
              href="tel:+918319962297"
              className="w-full sm:w-auto bg-gradient-to-r from-amber-500 to-yellow-600 text-slate-900 py-2 sm:px-6 sm:py-3 rounded-lg text-sm sm:text-base md:text-lg font-bold hover:from-amber-400 hover:to-yellow-500 transition-all shadow-lg flex items-center justify-center gap-2"
            >
              📞 Call: 8319962297
            </a>

            <a
              href="https://wa.me/918319962297"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto border-2 border-amber-500 text-amber-600 py-2 sm:px-6 sm:py-3 rounded-lg text-sm sm:text-base md:text-lg font-semibold hover:bg-amber-500 hover:text-slate-900 transition-all shadow-lg flex items-center justify-center gap-2"
            >
              💬 WhatsApp Us
            </a>
          </div>

          {/* View Products Button */}
          <Link
            href="/products"
            className={`w-full sm:max-w-md flex justify-center items-center gap-2 bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-600 text-slate-900 px-4 py-2 sm:px-6 sm:py-3 rounded-lg text-sm sm:text-base md:text-lg font-bold shadow-2xl pulse-glow text-center hover:from-blue-400 hover:via-purple-400 hover:to-indigo-500 ${baseClasses} ${positionClasses2}`}
            style={{ width: `${maxwidth}` }}
          >
            View Modern Gate Designs
          </Link>
        </div>
      </div>
    </section>
  );
}
