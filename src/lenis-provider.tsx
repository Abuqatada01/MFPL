"use client";

import Lenis from "lenis";
import {
  useEffect,
  useRef,
  Suspense,
  type ReactNode,
  useCallback,
} from "react";
import { usePathname, useSearchParams } from "next/navigation";

declare global {
  interface Window {
    __lenis?: Lenis;
  }
}

type Props = {
  children: ReactNode;
};

/**
 * Watcher component to safely track searchParams changes in Next.js App Router
 * with a Suspense boundary.
 */
function SearchParamsWatcher({
  onParamsChange,
}: {
  onParamsChange: () => void;
}) {
  const searchParams = useSearchParams();
  const searchParamsString = searchParams ? searchParams.toString() : "";

  useEffect(() => {
    onParamsChange();
  }, [searchParamsString, onParamsChange]);

  return null;
}

export default function SmoothScroll({ children }: Props) {
  const lenisRef = useRef<Lenis | null>(null);
  const pathname = usePathname();
  const isPopStateRef = useRef<boolean>(false);
  const isFirstMountRef = useRef<boolean>(true);

  // Initialize Lenis smooth scroll
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.1,
      duration: 1.5,
      smoothWheel: true,
    });

    lenisRef.current = lenis;
    window.__lenis = lenis;

    let rafId: number;
    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };

    rafId = requestAnimationFrame(raf);

    // Track browser back/forward navigation (popstate)
    const handlePopState = () => {
      isPopStateRef.current = true;
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          if (lenisRef.current) {
            lenisRef.current.resize();
            lenisRef.current.scrollTo(window.scrollY, { immediate: true });
          }
          setTimeout(() => {
            isPopStateRef.current = false;
          }, 150);
        });
      });
    };

    window.addEventListener("popstate", handlePopState);

    // Handle in-page anchor clicks (preserve intentional in-page anchor scrolling)
    const handleAnchorClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest("a");
      if (!target) return;
      const href = target.getAttribute("href");
      if (href && href.startsWith("#") && href.length > 1) {
        const anchorEl = document.querySelector(href);
        if (anchorEl) {
          e.preventDefault();
          // Account for sticky header offset (~80px)
          lenis.scrollTo(anchorEl as HTMLElement, { offset: -80 });
          window.history.pushState(null, "", href);
        }
      }
    };

    document.addEventListener("click", handleAnchorClick, { capture: true });

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("popstate", handlePopState);
      document.removeEventListener("click", handleAnchorClick, { capture: true });
      delete window.__lenis;
      lenis.destroy();
    };
  }, []);

  // Centralized scroll-to-top handler on route / searchParams change
  const handleScrollReset = useCallback(() => {
    // If navigation was caused by browser back/forward, allow scroll restoration
    if (isPopStateRef.current) {
      return;
    }

    const lenis = lenisRef.current;

    // Check if an anchor hash is present in the URL (preserve intentional in-page anchor scrolling)
    if (typeof window !== "undefined" && window.location.hash) {
      const hash = window.location.hash;
      const targetElement = document.querySelector(hash);
      if (targetElement) {
        if (lenis) {
          lenis.resize();
          lenis.scrollTo(targetElement as HTMLElement, { immediate: true, offset: -80 });
        } else {
          (targetElement as HTMLElement).scrollIntoView({ behavior: "instant" });
        }
        return;
      }
    }

    // Standard navigation: Scroll immediately to top
    if (lenis) {
      lenis.scrollTo(0, { immediate: true });
    }
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;

    // Confirm scroll-to-top on subsequent animation frame after DOM renders
    requestAnimationFrame(() => {
      if (!isPopStateRef.current && !(window.location.hash && document.querySelector(window.location.hash))) {
        lenis?.resize();
        lenis?.scrollTo(0, { immediate: true });
        window.scrollTo(0, 0);
      }
    });

    // Additional safeguard after microtasks / font / image layout shifts
    setTimeout(() => {
      if (!isPopStateRef.current && !(window.location.hash && document.querySelector(window.location.hash))) {
        lenis?.resize();
      }
    }, 100);
  }, []);

  // Trigger on pathname changes (all page navigations)
  useEffect(() => {
    if (isFirstMountRef.current) {
      isFirstMountRef.current = false;
      return;
    }
    handleScrollReset();
  }, [pathname, handleScrollReset]);

  // Trigger on searchParams changes
  const handleSearchParamsChange = useCallback(() => {
    if (isFirstMountRef.current) {
      return;
    }
    handleScrollReset();
  }, [handleScrollReset]);

  return (
    <>
      <Suspense fallback={null}>
        <SearchParamsWatcher onParamsChange={handleSearchParamsChange} />
      </Suspense>
      {children}
    </>
  );
}
