import Header from "./Layout/Header";
import Hero from "./Layout/Hero";
import CampaignListing from "./CampaignListing";
import AboutSection from "./AboutSection";
import CampaignStats from "./CampaignStats";
import PartnersSection from "./PartnersSection";
import FooterLayout from "./Layout/FooterLayout";
export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <CampaignListing />
      <AboutSection />
      <CampaignStats />
      <PartnersSection />
      <FooterLayout />
    </main>
  );
}