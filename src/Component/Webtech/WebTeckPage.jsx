import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import TechSuccessSection from "./TechSuccessSection";
import ServicesSection from "./ServicesSection";
import ExperienceSection from "./ExperienceSection";
import ProcessSection from "./ProcessSection";
import CTASection from "./CTASection";
import Footer from "./Footer";

export default function WebTeckPage() {
    return (
        <div className="font-sans antialiased bg-white text-slate-700 overflow-x-hidden">
            <Navbar />
            <HeroSection />
            <TechSuccessSection />
            <ServicesSection />
            <ExperienceSection />
            <ProcessSection />
            <CTASection />
            <Footer />
        </div>
    );
}