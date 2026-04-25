import { useState, useEffect } from "react";

export function useScrollSpy(sectionIds: string[], offset: string = "-20% 0px -70% 0px") {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const observerOptions: IntersectionObserverInit = {
      root: null,
      rootMargin: offset,
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveId(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, [sectionIds, offset]);

  return activeId;
}
