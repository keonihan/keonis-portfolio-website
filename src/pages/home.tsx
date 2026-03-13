import { useEffect, useState } from "react";
import DesktopPage from "../pages/DesktopHome";
import MobilePage from "../pages/MobileHome";

export default function Home() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isMobile ? <MobilePage /> : <DesktopPage />;
}

// export default function Home() {
//   const [isMobile, setIsMobile] = useState(
//     window.matchMedia("(pointer: coarse)").matches
//   );

//   useEffect(() => {
//     const media = window.matchMedia("(pointer: coarse)");
//     const listener = () => setIsMobile(media.matches);

//     media.addEventListener("change", listener);
//     return () => media.removeEventListener("change", listener);
//   }, []);

//   return isMobile ? <MobilePage /> : <DesktopPage />;
// }