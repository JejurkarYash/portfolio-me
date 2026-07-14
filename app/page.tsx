"use client";
import AboutMe from "@/components/AboutMe";
import GithubActivity from "@/components/GithubActivity";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import SignalsSpotlight from "@/components/SignalsSpotlight";
import NavBar from "@/components/NavBar";
import { ThemeBackground } from "@/components/ThemeBackground";
import Footer from "@/components/Footer";

const Divider = () => (
  <div className="w-full max-w-xl px-4 sm:px-6">
    <div className="border-t border-border" />
  </div>
);

export default function Home() {
  return (
    <ThemeBackground>
      <main className="flex flex-col items-center min-h-screen overflow-x-hidden overflow-y-auto">
        <AboutMe />
        <Divider />
        <GithubActivity />
        <Divider />
        <Skills />
        <Divider />
        <Projects />
        <Divider />
        <SignalsSpotlight />
        <Divider />
        <Footer />
        <NavBar />
      </main>
    </ThemeBackground>
  );
}
