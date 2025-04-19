import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  FileText,
  Link,
  Clock,
  ArrowUpDown,
  Search,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface Publication {
  id: number;
  title: string;
  authors: string;
  journal: string;
  year: number;
  doi: string;
  type: "journal" | "conference" | "book";
  featured: boolean;
  tags: string[];
}

const publications: Publication[] = [
  {
    id: 1,
    title: "Topological Phase Transitions in Quantum Materials",
    authors: "J. Researcher, A. Collaborator, B. Colleague",
    journal: "Nature Physics",
    year: 2023,
    doi: "10.1038/nphys1234",
    type: "journal",
    featured: true,
    tags: ["Topological Materials", "Quantum Physics"]
  },
  {
    id: 2,
    title: "Machine Learning Approaches for Predicting Material Properties",
    authors: "J. Researcher, C. Assistant, D. Student",
    journal: "Advanced Materials",
    year: 2022,
    doi: "10.1002/adma.202200123",
    type: "journal",
    featured: true,
    tags: ["Machine Learning", "Materials Science"]
  },
  {
    id: 3,
    title: "Nanophotonic Circuits for Quantum Information Processing",
    authors: "E. Collaborator, J. Researcher, F. Partner",
    journal: "Conference on Quantum Information Science",
    year: 2021,
    doi: "10.1109/qis.2021.123456",
    type: "conference",
    featured: false,
    tags: ["Nanophotonics", "Quantum Computing"]
  },
  {
    id: 4,
    title: "Quantum Entanglement in Solid-State Qubits",
    authors: "J. Researcher, G. Theorist",
    journal: "Physical Review Letters",
    year: 2021,
    doi: "10.1103/PhysRevLett.123.456789",
    type: "journal",
    featured: true,
    tags: ["Quantum Entanglement", "Solid-State Physics"]
  },
  {
    id: 5,
    title: "Advances in Computational Methods for Quantum Materials",
    authors: "H. Programmer, J. Researcher, I. Developer",
    journal: "Computational Materials Science",
    year: 2020,
    doi: "10.1016/j.commatsci.2020.12345",
    type: "journal",
    featured: false,
    tags: ["Computational Physics", "Quantum Materials"]
  },
  {
    id: 6,
    title: "Quantum Computing with Topological Insulators",
    authors: "J. Researcher, J. Theorist, K. Experimentalist",
    journal: "Quantum Computing and Applications",
    year: 2019,
    doi: "10.1007/978-3-030-12345-6",
    type: "book",
    featured: false,
    tags: ["Quantum Computing", "Topological Insulators"]
  },
];

const PublicationsSection = () => {
  const [filter, setFilter] = useState("");
  const [yearFilter, setYearFilter] = useState<string>("all");
  const [typeFilter, setTypeFilter] = useState<string>("all");
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("desc");
  
  // Filter and sort publications
  const filteredPublications = publications
    .filter(pub => 
      (filter === "" || 
        pub.title.toLowerCase().includes(filter.toLowerCase()) ||
        pub.authors.toLowerCase().includes(filter.toLowerCase()) ||
        pub.tags.some(tag => tag.toLowerCase().includes(filter.toLowerCase()))
      ) &&
      (yearFilter === "all" || pub.year.toString() === yearFilter) &&
      (typeFilter === "all" || pub.type === typeFilter)
    )
    .sort((a, b) => {
      return sortDirection === "desc" ? b.year - a.year : a.year - b.year;
    });
  
  // Get unique years for filter
  const years = [...new Set(publications.map(pub => pub.year))].sort((a, b) => b - a);
  
  return (
    <section id="publications" className="py-16 bg-gray-50">
      <div className="section-container">
        <h2 className="section-title text-center">Publications</h2>
        
        {/* Featured Publications */}
        <div className="mb-12">
          <h3 className="text-xl font-serif font-semibold mb-6 text-research-blue">Featured Publications</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {publications
              .filter(pub => pub.featured)
              .slice(0, 3)
              .map(pub => (
                <FeaturedPublicationCard key={pub.id} publication={pub} />
              ))
            }
          </div>
        </div>
        
        {/* Filters */}
        <div className="bg-white p-4 rounded-lg shadow-sm mb-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search publications..."
                className="pl-8"
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
              />
            </div>
            
            <Select value={yearFilter} onValueChange={setYearFilter}>
              <SelectTrigger>
                <SelectValue placeholder="Filter by Year" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Years</SelectItem>
                {years.map(year => (
                  <SelectItem key={year} value={year.toString()}>
                    {year}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            
            <Select value={typeFilter} onValueChange={setTypeFilter}>
              <SelectTrigger>
                <SelectValue placeholder="Filter by Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Types</SelectItem>
                <SelectItem value="journal">Journal Articles</SelectItem>
                <SelectItem value="conference">Conference Papers</SelectItem>
                <SelectItem value="book">Books & Chapters</SelectItem>
              </SelectContent>
            </Select>
            
            <Button 
              variant="outline" 
              onClick={() => setSortDirection(sortDirection === "desc" ? "asc" : "desc")}
              className="flex items-center justify-center"
            >
              <Clock className="mr-2 h-4 w-4" />
              Sort by Year {sortDirection === "desc" ? "↓" : "↑"}
            </Button>
          </div>
        </div>
        
        {/* All Publications */}
        <div className="space-y-4">
          {filteredPublications.length > 0 ? (
            filteredPublications.map(pub => (
              <PublicationCard key={pub.id} publication={pub} />
            ))
          ) : (
            <div className="text-center py-8">
              <p className="text-gray-500">No publications found matching your filters.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

interface PublicationCardProps {
  publication: Publication;
}

const PublicationCard = ({ publication }: PublicationCardProps) => {
  return (
    <Card className="hover:shadow-md transition-shadow">
      <CardContent className="p-5">
        <div className="flex flex-col md:flex-row justify-between gap-4">
          <div className="flex-1">
            <h4 className="font-serif font-medium text-lg text-research-blue">{publication.title}</h4>
            <p className="text-gray-600 mt-1">{publication.authors}</p>
            <div className="flex items-center text-gray-500 mt-2 text-sm">
              <span className="font-medium">{publication.journal}</span>
              <span className="mx-2">•</span>
              <span>{publication.year}</span>
            </div>
            <div className="flex flex-wrap gap-2 mt-3">
              {publication.tags.map(tag => (
                <Badge key={tag} variant="outline" className="text-xs">{tag}</Badge>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-2 md:ml-4">
            <Button size="sm" variant="outline" asChild>
              <a 
                href={https://doi.org/${publication.doi}} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center"
              >
                <FileText className="mr-1 h-3 w-3" />
                PDF
              </a>
            </Button>
            <Button size="sm" variant="outline" asChild>
              <a 
                href={https://doi.org/${publication.doi}} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center"
              >
                <Link className="mr-1 h-3 w-3" />
                DOI
              </a>
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const FeaturedPublicationCard = ({ publication }: PublicationCardProps) => {
  return (
    <Card className="hover-lift">
      <CardContent className="p-5">
        <div className="flex items-center mb-3">
          <Badge className="bg-research-light-blue">Featured</Badge>
          <span className="ml-auto text-sm text-gray-500">{publication.year}</span>
        </div>
        <h4 className="font-serif font-medium text-lg leading-tight mb-2">{publication.title}</h4>
        <p className="text-gray-600 text-sm mb-4">{publication.authors}</p>
        <p className="text-research-blue font-medium text-sm mb-3">{publication.journal}</p>
        
        <div className="flex justify-between items-center">
          <div className="flex gap-2">
            <Button size="sm" variant="outline" asChild>
              <a 
                href={https://doi.org/${publication.doi}} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center"
              >
                <FileText className="mr-1 h-3 w-3" />
                PDF
              </a>
            </Button>
            <Button size="sm" variant="outline" asChild>
              <a 
                href={https://doi.org/${publication.doi}} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center"
              >
                <Link className="mr-1 h-3 w-3" />
                DOI
              </a>
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PublicationsSection;
