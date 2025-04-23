// import ConnectWalletButton from "./Wallet/ConnectWalletButton";
// import RequireWalletGuard from "./Wallet/RequireWalletGuard";

import Header from "./Layouts/Header";
import Hero from "./Layouts/Hero";
import About from "./Layouts/About";
import LogoClient from "./Layouts/LogoClient";
import WhyUs from "./Layouts/WhyUs";
import Services from "./Layouts/Services";
import Team from "./Layouts/Team";
import CTA from "./Layouts/CTA";
import Testimonials from "./Layouts/Testimonials";
import Footer from "./Layouts/Footer";
import './index.css';

export default function Welcome(): JSX.Element {
  return (
    <div id="welcome">
      <Header />
      <hr style={{ border: 'none', width: '100%', height: '1px', background: 'linear-gradient(to right, #2F466A1A, #2F466A, #2F466A1A)' }} />
      <Hero />
      <About />
      <LogoClient />
      <WhyUs />
      <Services />
      <Team />
      <CTA />
      <Testimonials />
      <Footer />
    </div>
  );
}
