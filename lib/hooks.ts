import { useEffect } from "react";

import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from "@/context/active-section-context";
import type { SectionName } from "./types";


export function useSectionVisibility( sectionName : SectionName, threshold = 0.75) {
  const { ref, inView } = useInView({
    threshold
  });
  const { setActiveSection, timePassedClick } = useActiveSectionContext();

  useEffect(() => {
    if (inView && Date.now() - timePassedClick > 1000) {
      setActiveSection(sectionName);
    }
  }, [inView, setActiveSection, timePassedClick, sectionName]);

  return {
    ref,
  };
}
