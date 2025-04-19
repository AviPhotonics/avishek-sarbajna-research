import { Button } from "@/components/ui/button";
import { FileDown, ArrowDown } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="pt-20 pb-10 bg-gradient-to-b from-white to-research-light/30">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="space-y-6 animate-fade-in">
            <h1 className="font-serif text-5xl font-bold text-research-blue">
              Avishek Sarbajna
            </h1>
            <h2 className="text-xl text-research-light-blue">
              PhD Researcher in Nanophotonics
            </h2>
            <p className="text-gray-700 leading-relaxed">
              I am a researcher currently pursuing my PhD. My doctoral research is centred on nanoscale light-matter interaction in high refractive index excitonic systems, particularly Transition Metal Dichalcogenides (TMDC).
            </p>
            <p className="text-gray-700 leading-relaxed">
              My expertise spans various facets of nanotechnology, with a focus on nanofabrication techniques such as e-beam lithography and reactive ion etching. Proficient in handling 2D materials through techniques like exfoliation and stacking, I specialize in utilizing dark-field spectroscopy, photocurrent measurements, and topographical characterization tools such as AFM and SEM.
            </p>
            <p className="text-gray-700 leading-relaxed">
              I aspire to pursue a career in research with a strong focus on nanophotonics and optoelectronics and would like to hear (or share) research stories. So please, feel free to knock.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="bg-research-blue hover:bg-research-dark">
                <FileDown className="mr-2 h-4 w-4" />
                Download CV
              </Button>
              <Button variant="outline" asChild>
                <a href="#research">
                  <ArrowDown className="mr-2 h-4 w-4" />
                  View My Research
                </a>
              </Button>
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-lg animate-fade-in">
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Dr. Jane Researcher" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-5 -right-5 bg-white p-4 rounded-lg shadow-lg z-10 animate-fade-in">
              <div className="font-medium text-lg text-research-blue">Research Metrics</div>
              <div className="grid grid-cols-3 gap-4 mt-2">
                <div className="text-center">
                  <div className="text-2xl font-bold text-research-light-blue">45+</div>
                  <div className="text-xs text-gray-500">Publications</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-research-light-blue">12</div>
                  <div className="text-xs text-gray-500">Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-research-light-blue">2.5k+</div>
                  <div className="text-xs text-gray-500">Citations</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
