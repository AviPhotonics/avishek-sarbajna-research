
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Users, Microscope, FileText, Github } from "lucide-react";

const ResearchSection = () => {
  const researchAreas = [
    { id: "quantum", name: "Quantum Materials" },
    { id: "nano", name: "Nanophotonics" },
    { id: "computational", name: "Computational Physics" }
  ];
  
  return (
    <section id="research" className="py-16">
      <div className="section-container">
        <h2 className="section-title text-center">Research Projects</h2>
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
          My research focuses on discovering and understanding novel quantum phenomena in materials,
          with applications ranging from quantum computing to energy-efficient electronics.
        </p>
        
        <Tabs defaultValue="quantum" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            {researchAreas.map((area) => (
              <TabsTrigger key={area.id} value={area.id} className="text-sm md:text-base">
                {area.name}
              </TabsTrigger>
            ))}
          </TabsList>
          
          {/* Quantum Materials Tab */}
          <TabsContent value="quantum" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <ResearchCard 
                title="Topological Quantum Materials"
                dateRange="2018 - Present"
                description="Investigation of novel topological insulators with potential applications in fault-tolerant quantum computing."
                role="Principal Investigator"
                collaborators={["Prof. Alice Chen (MIT)", "Prof. Robert Johnson (ETH Zurich)"]}
                funding="National Science Foundation"
                image="https://images.unsplash.com/photo-1618044733300-9472054094ee?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                links={[
                  { label: "Publication", url: "#" },
                  { label: "GitHub", url: "#" }
                ]}
                tags={["Quantum", "Topological Insulators", "Materials Science"]}
              />
              
              <ResearchCard 
                title="Quantum Entanglement in Solid-State Systems"
                dateRange="2020 - Present"
                description="Exploring quantum entanglement phenomena in solid-state qubits for quantum information processing."
                role="Co-Investigator"
                collaborators={["Dr. Michael Wong (Stanford)", "Dr. Emily Taylor (Harvard)"]}
                funding="Department of Energy"
                image="https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                links={[
                  { label: "Publication", url: "#" },
                ]}
                tags={["Quantum Entanglement", "Qubits", "Quantum Information"]}
              />
            </div>
          </TabsContent>
          
          {/* Nanophotonics Tab */}
          <TabsContent value="nano" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <ResearchCard 
                title="Nanophotonic Circuits for Quantum Applications"
                dateRange="2019 - Present"
                description="Development of integrated nanophotonic circuits for quantum information processing using silicon photonics."
                role="Principal Investigator"
                collaborators={["Dr. Sarah Jones (Caltech)", "Prof. David Miller (Stanford)"]}
                funding="DARPA"
                image="https://images.unsplash.com/photo-1610465299996-30f240ac2b1c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                links={[
                  { label: "Publication", url: "#" },
                  { label: "GitHub", url: "#" }
                ]}
                tags={["Nanophotonics", "Silicon Photonics", "Quantum Circuits"]}
              />
              
              <ResearchCard 
                title="Plasmonic Metamaterials"
                dateRange="2017 - 2021"
                description="Investigation of plasmonic metamaterials for enhanced light-matter interactions and novel optical phenomena."
                role="Co-Investigator"
                collaborators={["Prof. James Wilson (Berkeley)"]}
                funding="Air Force Office of Scientific Research"
                image="https://images.unsplash.com/photo-1607275784784-b481627ede5d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                links={[
                  { label: "Publication", url: "#" },
                ]}
                tags={["Plasmonics", "Metamaterials", "Nanophotonics"]}
              />
            </div>
          </TabsContent>
          
          {/* Computational Physics Tab */}
          <TabsContent value="computational" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <ResearchCard 
                title="Machine Learning for Materials Discovery"
                dateRange="2021 - Present"
                description="Utilizing machine learning algorithms to accelerate the discovery of novel quantum materials with specific properties."
                role="Principal Investigator"
                collaborators={["Dr. Thomas Brown (Stanford AI Lab)", "Dr. Lisa Chen (Google Research)"]}
                funding="Google AI Research Grant"
                image="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                links={[
                  { label: "Publication", url: "#" },
                  { label: "GitHub", url: "#" },
                  { label: "Dataset", url: "#" }
                ]}
                tags={["Machine Learning", "Materials Discovery", "Computational Physics"]}
              />
              
              <ResearchCard 
                title="Quantum Monte Carlo Simulations"
                dateRange="2016 - 2020"
                description="Development of advanced quantum Monte Carlo methods for simulating strongly correlated electron systems."
                role="Lead Researcher"
                collaborators={["Prof. Eric Johnson (MIT)", "Dr. Angela Martinez (Los Alamos National Lab)"]}
                funding="Department of Energy"
                image="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                links={[
                  { label: "Publication", url: "#" },
                  { label: "GitHub", url: "#" }
                ]}
                tags={["Quantum Monte Carlo", "Computational Methods", "Strongly Correlated Systems"]}
              />
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

interface ResearchCardProps {
  title: string;
  dateRange: string;
  description: string;
  role: string;
  collaborators: string[];
  funding: string;
  image: string;
  links: { label: string; url: string }[];
  tags: string[];
}

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
}: ResearchCardProps) => {
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
              {link.label === "Dataset" && <Database className="mr-1 h-3 w-3" />}
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

const Database = ({ className = "", ...props }) => (
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
    <ellipse cx="12" cy="5" rx="9" ry="3" />
    <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
    <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
  </svg>
);

export default ResearchSection;
