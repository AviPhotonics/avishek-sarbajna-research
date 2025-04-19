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
  PhD Researcher in Nanophotonics & 2D Materials
</h2>
<p className="text-gray-700 leading-relaxed">
  I am currently pursuing my PhD in Physics at the Technical University of Denmark (DTU), where my research focuses on light–matter interaction in excitonic layered materials, especially monolayer TMDCs integrated with nanoscale optical resonators. My work combines experimental nanophotonics, device fabrication, and optical spectroscopy.
</p>
<p className="text-gray-700 leading-relaxed">
  My doctoral projects include the development of void resonators for highly directional photoluminescence enhancement and exploring the impact of strong coupling in ultra-thin, lossy excitonic systems. I was a visiting researcher at Stanford University, where I worked on wavelength-resolved photocurrent measurements to study light–matter coupling in optoelectronic devices.
</p>
<p className="text-gray-700 leading-relaxed">
  My technical skillset spans a broad spectrum of nanofabrication and characterization techniques including electron-beam lithography, reactive ion etching (RIE), exfoliation, and van der Waals heterostructure assembly. I routinely perform bright-field and dark-field optical spectroscopy, photoluminescence mapping, photocurrent and Hall measurements, and topographical characterization using AFM, SEM, and profilometry. I also have experience with cryostat-based measurements and optical setups such as HBT interferometry.
</p>
<p className="text-gray-700 leading-relaxed">
  In addition to experimental work, I use COMSOL Multiphysics for simulation and MATLAB for data processing and visualization. I have worked extensively with novel materials like HfS₂ for Mie-resonant nanophotonics and printed thermoelectric devices, both in academic research and industrial collaboration.
</p>
<p className="text-gray-700 leading-relaxed">
  I’m passionate about bridging fundamental research with real-world applications in nanophotonics, optoelectronics, and 2D materials. I'm always open to collaborative opportunities and sharing research ideas—please feel free to reach out!

            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="bg-research-blue hover:bg-research-dark" asChild>
                <a href="/CV_A_Sarbajna.pdf" download>
                  <FileDown className="mr-2 h-4 w-4" />
                  Download CV
                </a>
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
