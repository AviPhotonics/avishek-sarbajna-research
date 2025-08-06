import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Users, Microscope, FileText, Github } from "lucide-react";

const ResearchSection = () => {
  const researchAreas = [
    { id: "nano", name: "Nanophotonics" },
    { id: "excitonics", name: "Excitonic Systems" },
    { id: "vdw", name: "Van der Waals Materials" }
  ];

  return (
    <section id="research" className="py-16">
      <div className="section-container">
        <h2 className="section-title text-center">Research Projects</h2>
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
          My research focuses on nanoscale light-matter interaction using 2D materials, dielectric resonators, and nanofabrication to engineer directional emission and enhance photonic processes in optoelectronic devices.
        </p>

        <Tabs defaultValue="nano" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            {researchAreas.map((area) => (
              <TabsTrigger key={area.id} value={area.id} className="text-sm md:text-base">
                {area.name}
              </TabsTrigger>
            ))}
          </TabsList>

          {/* Nanophotonics */}
          <TabsContent value="nano" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <ResearchCard 
                title="Void Resonators for Directional Emission from Monolayer WS2"
                dateRange="2023 - Present"
                description="Designed and fabricated nano-voids in lossy WSe2 substrates for coupling with monolayer WS2. Achieved >3500-fold PL enhancement and vertical directionality."
                role="Lead Researcher"
                collaborators={["Prof. Søren Raza (DTU)", "Prof. Peter Bøggild (DTU)"]}
                funding="DTU Physics and William Demant Foundation"
                image="/color plot.png"
                links={[]}
                tags={["Nanophotonics", "Dielectric Resonators", "PL Enhancement"]}
              />

              <ResearchCard 
                title="Encapsulated Void Resonators in van der Waals Heterostructures"
                dateRange="2022 - 2023"
                description="Demonstrated Mie-like confinement in air voids encapsulated by hBN, shifting optical resonances deep into visible spectrum."
                role="Lead Researcher"
                collaborators={["Prof. Søren Raza", "Dr. Daniel R. Danielsen"]}
                funding="Laser Photonics Reviews publication"
                image="/0090 top DF.jpg"
                links={[]}
                tags={["Nanostructures", "Lossy Materials", "Field Confinement"]}
              />
            </div>
          </TabsContent>

          {/* Excitonic Systems */}
          <TabsContent value="excitonics" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <ResearchCard 
                title="Apparent Resonance Splitting in Self-Coupled Excitonic Systems"
                dateRange="2024"
                description="Performed wavelength-resolved photocurrent and EQE measurements in ultra-thin excitonic films under cavity coupling."
                role="Lead Researcher"
                collaborators={["Prof. Mark L. Brongersma (Stanford)"]}
                funding="Otto Mønsteds Fund"
                image="/Picture2_7.png"
                links={[]}
                tags={["Excitons", "Photocurrent", "Strong Coupling"]}
              />
            </div>
          </TabsContent>

          {/* Van der Waals Materials */}
          <TabsContent value="vdw" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <ResearchCard 
                title="Computational Discovery of High-Refractive Index vdW Materials"
                dateRange="2023"
                description="Identified HfS2 as a low-loss, high-index material suitable for Mie resonant nanophotonics via simulation and nanofabrication."
                role="Co-author"
                collaborators={["Dr. Xavi Zambrana", "Prof. Søren Raza"]}
                funding="N/A"
                image="/1_RI.png"
                links={[]}
                tags={["HfS2", "Mie Resonators", "vdW Materials"]}
              />
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

const ResearchCard = ({ 
  title, 
  dateRange, 
  description, 
  role, 
  collaborators, 
  funding, 
  image, 
  links, 
  tags 
}: {
  title: string;
  dateRange: string;
  description: string;
  role: string;
  collaborators: string[];
  funding: string;
  image: string;
  links: { label: string; url: string }[];
  tags: string[];
}) => {
  return (
    <Card className="overflow-hidden hover-lift">
      <div className="h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
      </div>
      <CardHeader>
        <div className="flex justify-between items-start">
          <CardTitle className="text-xl font-serif">{title}</CardTitle>
          <span className="text-xs text-gray-500">{dateRange}</span>
        </div>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="flex flex-wrap gap-1.5">
          {tags.map(tag => (
            <Badge key={tag} variant="secondary" className="text-xs">{tag}</Badge>
          ))}
        </div>
        <div className="space-y-1.5 text-sm">
          <div className="flex items-start">
            <Microscope className="mr-2 h-4 w-4 text-research-light-blue shrink-0 mt-0.5" />
            <span><strong className="font-medium">Role:</strong> {role}</span>
          </div>
          <div className="flex items-start">
            <Users className="mr-2 h-4 w-4 text-research-light-blue shrink-0 mt-0.5" />
            <div>
              <strong className="font-medium">Collaborators:</strong>
              <ul className="list-disc list-inside ml-1">
                {collaborators.map((collaborator, index) => (
                  <li key={index} className="text-gray-600 text-sm">{collaborator}</li>
                ))}
              </ul>
            </div>
          </div>
          {funding && (
            <div className="flex items-center">
              <Award className="mr-2 h-4 w-4 text-research-light-blue" />
              <span><strong className="font-medium">Funding:</strong> {funding}</span>
            </div>
          )}
        </div>
      </CardContent>
      <CardFooter className="flex justify-start gap-2 flex-wrap">
        {links.map((link, index) => (
          <Button key={index} variant="outline" size="sm" asChild>
            <a href={link.url} target="_blank" rel="noopener noreferrer" className="flex items-center">
              {link.label === "Publication" && <FileText className="mr-1 h-3 w-3" />}
              {link.label === "GitHub" && <Github className="mr-1 h-3 w-3" />}
              {link.label}
              <ExternalLink className="ml-1 h-3 w-3" />
            </a>
          </Button>
        ))}
      </CardFooter>
    </Card>
  );
};

const Award = ({ className = "", ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={`${className}`}
    {...props}
  >
    <circle cx="12" cy="8" r="6" />
    <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
  </svg>
);

export default ResearchSection;
