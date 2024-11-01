import Cta from '@/components/Cta';
import Destination from '@/components/Destination';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Reason from '@/components/Reason';
import Showcase from '@/components/Showcase';

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Destination />
      <Reason />
      <Cta />
      <Showcase />
      <Footer />
    </>
  );
}
