import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Scroll3D() {
  const containerRef = useRef(null);

  useEffect(() => {
    gsap.to(containerRef.current, {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "bottom bottom",
        scrub: true,
      },
      rotateY: 360,
      scale: 1.5,
    });
  }, []);

  return (
    <div className="h-[200vh] bg-gray-900 flex items-center justify-center">
      <div ref={containerRef} className="text-white text-4xl">
        Scroll to See 3D Effect
      </div>
    </div>
  );
}
