import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Products from '../components/sections/Products';
import Technology from '../components/sections/Technology';
import Industries from '../components/sections/Industries';
import Quality from '../components/sections/Quality';
import Projects from '../components/sections/Projects';
import Team from '../components/sections/Team';
import Testimonials from '../components/sections/Testimonials';
import Contact from '../components/sections/Contact';

const Home = () => {
  return (
    <main className="w-full bg-brand-navy">
      <Hero />
      <About />
      <Products />
      <Technology />
      <Industries />
      <Quality />
      <Projects />
      <Team />
      <Testimonials />
      <Contact />
    </main>
  );
};

export default Home;
