
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Github, FileCode, BookOpen, ArrowUpRight, File, FileText, Download } from "lucide-react";

interface Resource {
  id: number;
  title: string;
  description: string;
  type: "code" | "template" | "tutorial" | "tool";
  links: { label: string; url: string; icon: React.ReactNode }[];
  tags: string[];
}

const resources: Resource[] = [
  {
    id: 1,
    title: "Quantum Monte Carlo Simulation Package",
    description: "A comprehensive package for performing quantum Monte Carlo simulations of strongly correlated electron systems.",
    type: "code",
    links: [
      { label: "GitHub", url: "#", icon: <Github className="h-4 w-4" /> },
      { label: "Documentation", url: "#", icon: <FileText className="h-4 w-4" /> }
    ],
    tags: ["Python", "Quantum Monte Carlo", "Simulations"]
  },
  {
    id: 2,
    title: "Materials Data Analysis Toolkit",
    description: "A collection of Python scripts and Jupyter notebooks for analyzing experimental data from quantum materials research.",
    type: "tool",
    links: [
      { label: "GitHub", url: "#", icon: <Github className="h-4 w-4" /> },
      { label: "Tutorial", url: "#", icon: <BookOpen className="h-4 w-4" /> }
    ],
    tags: ["Python", "Data Analysis", "Jupyter"]
  },
  {
    id: 3,
    title: "LaTeX Template for Scientific Papers",
    description: "A LaTeX template for scientific papers with proper formatting for physics journals like Physical Review Letters and Nature Physics.",
    type: "template",
    links: [
      { label: "Download", url: "#", icon: <Download className="h-4 w-4" /> },
      { label: "Example PDF", url: "#", icon: <File className="h-4 w-4" /> }
    ],
    tags: ["LaTeX", "Scientific Writing", "Template"]
  },
  {
    id: 4,
    title: "Quantum Materials Lab Protocols",
    description: "Detailed protocols for sample preparation, measurement, and analysis used in our quantum materials research lab.",
    type: "tutorial",
    links: [
      { label: "View Protocols", url: "#", icon: <FileText className="h-4 w-4" /> }
    ],
    tags: ["Lab Protocols", "Experimental Methods"]
  },
  {
    id: 5,
    title: "Machine Learning for Materials Discovery",
    description: "A tutorial and code for using machine learning techniques to predict material properties and discover new quantum materials.",
    type: "code",
    links: [
      { label: "GitHub", url: "#", icon: <Github className="h-4 w-4" /> },
      { label: "Tutorial", url: "#", icon: <BookOpen className="h-4 w-4" /> }
    ],
    tags: ["Machine Learning", "Python", "Materials Science"]
  },
  {
    id: 6,
    title: "Topological Materials Database",
    description: "A curated database of topological materials with their electronic and structural properties.",
    type: "tool",
    links: [
      { label: "Access Database", url: "#", icon: <ArrowUpRight className="h-4 w-4" /> },
      { label: "Documentation", url: "#", icon: <FileText className="h-4 w-4" /> }
    ],
    tags: ["Database", "Topological Materials", "Reference"]
  }
];

const ResourcesSection = () => {
  return (
    <section id="resources" className="py-16 bg-gray-50">
      <div className="section-container">
        <h2 className="section-title text-center">Technical Resources</h2>
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
          A collection of code, tools, templates, and tutorials that I've developed for research in quantum materials science.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {resources.map((resource) => (
            <ResourceCard key={resource.id} resource={resource} />
          ))}
        </div>
      </div>
    </section>
  );
};

interface ResourceCardProps {
  resource: Resource;
}

const ResourceCard = ({ resource }: ResourceCardProps) => {
  const getTypeIcon = (type: string) => {
    switch (type) {
      case "code":
        return <FileCode className="h-5 w-5 text-research-light-blue" />;
      case "template":
        return <File className="h-5 w-5 text-research-light-blue" />;
      case "tutorial":
        return <BookOpen className="h-5 w-5 text-research-light-blue" />;
      case "tool":
        return <Tool className="h-5 w-5 text-research-light-blue" />;
      default:
        return null;
    }
  };
  
  const getTypeBadge = (type: string) => {
    switch (type) {
      case "code":
        return <Badge className="bg-blue-500">Code</Badge>;
      case "template":
        return <Badge className="bg-purple-500">Template</Badge>;
      case "tutorial":
        return <Badge className="bg-green-500">Tutorial</Badge>;
      case "tool":
        return <Badge className="bg-amber-500">Tool</Badge>;
      default:
        return null;
    }
  };
  
  return (
    <Card className="hover-lift">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          {getTypeBadge(resource.type)}
        </div>
        <CardTitle className="text-lg font-serif mt-2 flex items-start gap-2">
          {getTypeIcon(resource.type)}
          <span>{resource.title}</span>
        </CardTitle>
        <CardDescription>
          {resource.description}
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="flex flex-wrap gap-1.5 mt-2">
          {resource.tags.map(tag => (
            <Badge key={tag} variant="outline" className="text-xs">{tag}</Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex justify-start gap-2 flex-wrap">
        {resource.links.map((link, index) => (
          <Button key={index} variant="outline" size="sm" asChild>
            <a href={link.url} target="_blank" rel="noopener noreferrer" className="flex items-center">
              {link.icon}
              <span className="ml-1">{link.label}</span>
            </a>
          </Button>
        ))}
      </CardFooter>
    </Card>
  );
};

const Tool = ({ className = "", ...props }) => (
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
    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
  </svg>
);

export default ResourcesSection;
