
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Video, ExternalLink, MapPin, Calendar } from "lucide-react";

interface Talk {
  id: number;
  title: string;
  event: string;
  location: string;
  date: string;
  type: "invited" | "keynote" | "conference" | "seminar" | "outreach";
  videoLink?: string;
  slidesLink?: string;
  description?: string;
}

const talks: Talk[] = [
  {
    id: 1,
    title: "Topological Quantum Materials: Present and Future",
    event: "International Conference on Quantum Materials",
    location: "Zurich, Switzerland",
    date: "June 2023",
    type: "keynote",
    videoLink: "#",
    slidesLink: "#",
    description: "Keynote address on the current state and future prospects of topological quantum materials for quantum computing applications."
  },
  {
    id: 2,
    title: "Quantum Entanglement in Solid-State Systems",
    event: "MIT Physics Colloquium",
    location: "Cambridge, MA, USA",
    date: "April 2023",
    type: "invited",
    slidesLink: "#",
    description: "Invited talk on our recent experimental findings on quantum entanglement in solid-state qubits."
  },
  {
    id: 3,
    title: "Machine Learning for Materials Discovery",
    event: "Computational Materials Science Symposium",
    location: "Virtual",
    date: "March 2023",
    type: "conference",
    videoLink: "#",
    slidesLink: "#",
    description: "Presentation on applying machine learning techniques to accelerate the discovery of novel quantum materials."
  },
  {
    id: 4,
    title: "Quantum Computing: Principles and Applications",
    event: "Science Outreach Series",
    location: "Public Library, Stanford, CA",
    date: "February 2023",
    type: "outreach",
    description: "Public lecture explaining quantum computing principles to a general audience."
  },
  {
    id: 5,
    title: "Nanophotonic Circuits for Quantum Information",
    event: "Stanford Physics Department Seminar",
    location: "Stanford, CA, USA",
    date: "January 2023",
    type: "seminar",
    slidesLink: "#",
    description: "Departmental seminar on our lab's work on integrated nanophotonic circuits for quantum information processing."
  },
  {
    id: 6,
    title: "Recent Advances in Topological Insulators",
    event: "American Physical Society March Meeting",
    location: "Chicago, IL, USA",
    date: "March 2022",
    type: "conference",
    videoLink: "#",
    slidesLink: "#",
    description: "Conference presentation on our latest experimental results on topological insulators."
  }
];

const TalksSection = () => {
  return (
    <section id="talks" className="py-16 bg-gray-50">
      <div className="section-container">
        <h2 className="section-title text-center">Talks & Outreach</h2>
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
          Selected invited talks, conference presentations, seminars, and public outreach activities.
        </p>
        
        <Tabs defaultValue="all" className="w-full">
          <TabsList className="flex justify-center mb-8">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="invited">Invited</TabsTrigger>
            <TabsTrigger value="conference">Conferences</TabsTrigger>
            <TabsTrigger value="outreach">Outreach</TabsTrigger>
          </TabsList>
          
          <TabsContent value="all" className="space-y-6">
            {talks.map((talk) => (
              <TalkCard key={talk.id} talk={talk} />
            ))}
          </TabsContent>
          
          <TabsContent value="invited" className="space-y-6">
            {talks
              .filter(talk => talk.type === "invited" || talk.type === "keynote")
              .map((talk) => (
                <TalkCard key={talk.id} talk={talk} />
              ))
            }
          </TabsContent>
          
          <TabsContent value="conference" className="space-y-6">
            {talks
              .filter(talk => talk.type === "conference" || talk.type === "seminar")
              .map((talk) => (
                <TalkCard key={talk.id} talk={talk} />
              ))
            }
          </TabsContent>
          
          <TabsContent value="outreach" className="space-y-6">
            {talks
              .filter(talk => talk.type === "outreach")
              .map((talk) => (
                <TalkCard key={talk.id} talk={talk} />
              ))
            }
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

interface TalkCardProps {
  talk: Talk;
}

const TalkCard = ({ talk }: TalkCardProps) => {
  const getTalkBadge = (type: string) => {
    switch (type) {
      case "keynote":
        return <Badge className="bg-research-light-blue">Keynote</Badge>;
      case "invited":
        return <Badge className="bg-purple-500">Invited</Badge>;
      case "conference":
        return <Badge className="bg-green-500">Conference</Badge>;
      case "seminar":
        return <Badge className="bg-amber-500">Seminar</Badge>;
      case "outreach":
        return <Badge className="bg-teal-500">Outreach</Badge>;
      default:
        return null;
    }
  };
  
  return (
    <Card className="overflow-hidden hover:shadow-md transition-shadow">
      <CardContent className="p-0">
        <div className="flex flex-col md:flex-row">
          <div className="p-6 flex-1">
            <div className="flex flex-wrap justify-between gap-2 mb-2">
              {getTalkBadge(talk.type)}
              <div className="flex items-center text-sm text-gray-500">
                <Calendar className="h-3 w-3 mr-1" />
                {talk.date}
              </div>
            </div>
            
            <h3 className="text-lg font-medium font-serif text-research-blue mb-2">{talk.title}</h3>
            
            <div className="space-y-1.5 mb-4">
              <div className="flex items-start gap-1.5">
                <Video className="h-4 w-4 text-gray-500 shrink-0 mt-0.5" />
                <span className="text-gray-700">{talk.event}</span>
              </div>
              <div className="flex items-start gap-1.5">
                <MapPin className="h-4 w-4 text-gray-500 shrink-0 mt-0.5" />
                <span className="text-gray-600 text-sm">{talk.location}</span>
              </div>
            </div>
            
            {talk.description && (
              <p className="text-gray-600 text-sm mb-4">{talk.description}</p>
            )}
            
            <div className="flex flex-wrap gap-2">
              {talk.videoLink && (
                <Button size="sm" variant="outline" asChild>
                  <a 
                    href={talk.videoLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center"
                  >
                    <Video className="mr-1 h-3 w-3" />
                    Watch Video
                  </a>
                </Button>
              )}
              
              {talk.slidesLink && (
                <Button size="sm" variant="outline" asChild>
                  <a 
                    href={talk.slidesLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center"
                  >
                    <Slides className="mr-1 h-3 w-3" />
                    View Slides
                  </a>
                </Button>
              )}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const Slides = ({ className = "", ...props }) => (
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
    <rect x="3" y="4" width="18" height="12" rx="2" ry="2" />
    <line x1="2" y1="20" x2="22" y2="20" />
  </svg>
);

export default TalksSection;
