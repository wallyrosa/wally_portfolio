import ExpandLessRoundedIcon from "@mui/icons-material/ExpandLessRounded";
import { useEffect, useState } from "react";

export function BackToTop() {
  const [showButton, setShowButton] = useState(false);
  const [displayNone, setDisplayNone] = useState('flex');
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 200) {
        setShowButton(true)
        return
      } else if (window.scrollY < 200) {
        setShowButton(false)
      }
      if (window.scrollY < 150) {
        setDisplayNone("none");
        return;
      } else {
        setDisplayNone("flex");
      }
      
    })
  }, []);

  const scrollTop = () => {
    window.scrollTo({
      top: 0
    })
  }
  
  return (
    <div
      style={{ display: `${displayNone}` }}
      className={`backToTop ${showButton ? "show" : "hidden"}`}
      onClick={scrollTop}
    >
      <ExpandLessRoundedIcon sx={{ fontSize: "75px" }} />
    </div>
  );
}
