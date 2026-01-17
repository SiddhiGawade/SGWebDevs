import Hero from './components/Hero';
import Timeline from './components/Timeline';
import FounderNote from './components/FounderNote';
import Team from './components/Team';
import Services from './components/Services';
import Process from './components/Process';
import CTA from './components/CTA';

function App() {
  return (
    <div className="font-secondary antialiased overflow-x-hidden">
      <Hero />
      <Timeline />
      <FounderNote />
      <Team />
      <Services />
      <Process />
      <CTA />
      {/* Other sections will follow */}
    </div>
  )
}

export default App
