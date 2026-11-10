import SmoothScroll from '@/components/SmoothScroll';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Marquee from '@/components/Marquee';
import ScaleImpact from '@/components/ScaleImpact';
import Services from '@/components/Services';
import Projects from '@/components/Projects';
import LeadershipAndCTA from '@/components/LeadershipAndCTA';

export default function Home() {
  return (
    <SmoothScroll>
      <main className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-amber-500 selection:text-slate-950">
        <Navbar />
        <Hero />
        <Marquee />
        <ScaleImpact />
        <Services />
        <Projects />
        <LeadershipAndCTA />
      </main>
    </SmoothScroll>
  );
}