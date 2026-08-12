"use client";
import { useDarkMode } from "@/lib/useDarkMode";
import { Moon, Sun } from "lucide-react";

export default function DarkModeToggle() {
  const { isDark, toggleDarkMode } = useDarkMode();

  return (
    <button
      onClick={toggleDarkMode}
      className="fixed top-5 right-5 z-50 p-2.5 rounded-full border border-border bg-card text-muted-foreground hover:text-foreground hover:border-muted-foreground transition shadow-sm"
      aria-label="Toggle Dark Mode"
    >
      {isDark ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
}
