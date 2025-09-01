"use client";
import { SiteThemeProvider } from '@/components/sections/ThemeProvider';
import NavbarLayoutFloatingInline from '@/components/navigation/NavbarLayoutFloatingInline';
import FrameHero from '@/components/sections/layouts/hero/FrameHero';
import SplitAbout from '@/components/sections/layouts/about/SplitAbout';
import HowToBuy2D from '@/components/sections/layouts/howtobuy/2DHTB';
import TextGridTokenomics from '@/components/sections/layouts/tokenomics/TextGridTokenomics';
import CentralFAQ from '@/components/sections/layouts/faq/CentralFAQ';
import FooterBase from '@/components/footer/FooterBase';

export default function Home() {
  return (
    <SiteThemeProvider theme={{ styleVariant: "funAndTrendy", colorTemplate: 2, textAnimation: "slide" }}>
      <NavbarLayoutFloatingInline
        logoSrc="/images/logo.svg"
        logoAlt="MemeCoin"
        navItems={[{ name: "Hero", id: "hero" }, { name: "About", id: "about" }, { name: "How to Buy", id: "how-to-buy" }, { name: "Tokenomics", id: "tokenomics" }, { name: "FAQ", id: "faq" }, { name: "Footer", id: "footer" }]}
        buttonText="Buy MemeCoin"
      />
      <div id="hero" data-section="hero" className="scroll-mt-24">
        <FrameHero title="Welcome to MemeCoin Playground" description="Dive into the fun of meme coins!" primaryButtonText="Get Started" secondaryButtonText="Learn More" />
      </div>
      <div id="about" data-section="about" className="scroll-mt-24">
        <SplitAbout description="At MemeCoin Playground, we believe in fun, accessibility, and the power of community-driven currencies." />
      </div>
      <div id="how-to-buy" data-section="how-to-buy" className="scroll-mt-24">
        <HowToBuy2D variant="reveal" />
      </div>
      <div id="tokenomics" data-section="tokenomics" className="scroll-mt-24">
        <TextGridTokenomics title="Tokenomics" description="Explore our essentials for meme coins with a playful touch!" tokenData={[{ value: "10M", description: "Total Supply" }, { value: "1M", description: "Circulating Supply" }, { value: "5%", description: "Liquidity" }]} />
      </div>
      <div id="faq" data-section="faq" className="scroll-mt-24">
        <CentralFAQ items={[{ title: "What is MemeCoin?", content: "A fun and community-driven currency for sharing value!" }, { title: "How do I buy MemeCoin?", content: "You can purchase through our streamlined process on the homepage." }]} />
      </div>
      <div id="footer" data-section="footer" className="scroll-mt-24">
        <FooterBase 
          logoSrc="/images/logo.svg"
          logoWidth={100}
          logoHeight={40}
          columns={[{ title: "Get Involved", items: [{ label: "Join Us", onClick: () => {} }, { label: "Contact", onClick: () => {} }] }, { title: "Learn More", items: [{ label: "Whitepaper", onClick: () => {} }, { label: "Roadmap", onClick: () => {} }] }, { title: "Community", items: [{ label: "Discord", onClick: () => {} }, { label: "Twitter", onClick: () => {} }] }]}
          copyrightText="© 2023 MemeCoin Playground"
          onPrivacyClick={() => {}}
        />
      </div>
    </SiteThemeProvider>
  );
}
