import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Membership from "@/components/sections/Membership";
import Stats from "@/components/sections/Stats";
import Team from "@/components/sections/Team";
import Updates from "@/components/sections/Updates";
import SocialFeed from "@/components/sections/SocialFeed";

export default function HomePage() {
  return (
    <main className="flex-1 pt-18 md:pt-22">
      <Hero />
      <About />
      <Membership />
      <Stats />
      <Team />
      <Updates />
      <SocialFeed />
    </main>
  );
}
