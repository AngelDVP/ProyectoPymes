"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const isDark = resolvedTheme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={`relative flex items-center w-[4.5rem] h-9 rounded-full p-1 transition-colors duration-300 ${
        isDark ? "bg-black border border-gray-700" : "bg-[#fbbd05]"
      }`}
      aria-label="Toggle Theme"
    >
      <div
        className={`absolute w-7 h-7 bg-white rounded-full shadow-md transform transition-transform duration-300 ease-in-out ${
          isDark ? "translate-x-0" : "translate-x-[1.75rem]"
        }`}
      ></div>

      <div className="flex justify-between items-center w-full px-1.5 z-10 pointer-events-none">
        {isDark ? (
          <>
            <div className="w-5 h-5" />
            <Moon className="w-[1.125rem] h-[1.125rem] text-white stroke-[2.5]" />
          </>
        ) : (
          <>
            <Sun className="w-[1.125rem] h-[1.125rem] text-white stroke-[2.5]" />
            <div className="w-5 h-5" />
          </>
        )}
      </div>
    </button>
  );
}
