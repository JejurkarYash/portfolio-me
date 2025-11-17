"use client";
import Image from "next/image";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import AboutMe from "@/components/AboutMe";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import NavBar from "@/components/NavBar";
import { ThemeBackground } from "@/components/ThemeBackground";
import Footer from "@/components/Footer";

export default function Home() {
  const { theme, setTheme } = useTheme();
  return (
    <ThemeBackground>
      <main className="flex flex-col items-center min-h-screen min-w-screen overflow-x-hidden overflow-y-auto select-none justify-center">
        <AboutMe />
        <Skills />
        <Projects />
        <Footer />
        <NavBar />
      </main>
    </ThemeBackground>
  );
}
