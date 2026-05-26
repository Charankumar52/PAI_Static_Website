import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Membership from "@/components/sections/Membership";
import Downloads from "@/components/sections/Downloads";
import Stats from "@/components/sections/Stats";
import Team from "@/components/sections/Team";
import SocialFeed from "@/components/sections/SocialFeed";

export default function HomePage() {
  return (
    <main className="flex-1">
      <Hero />
      <Membership />
      <Downloads />
      <Stats />
      <Team />
      <About />
      <SocialFeed />
    </main>
  );
}
