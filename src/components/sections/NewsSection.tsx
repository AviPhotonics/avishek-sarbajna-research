
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Award, Video, Newspaper, BookOpen } from "lucide-react";

interface NewsItem {
  id: number;
  title: string;
  date: string;
  description: string;
  type: "publication" | "award" | "conference" | "media" | "grant";
  link?: string;
}

const newsItems: NewsItem[] = [
  {
    id: 1,
    title: "New Article Published in Nature Physics",
    date: "April 15, 2023",
    description: "Our research on quantum phase transitions in topological materials has been published in Nature Physics.",
    type: "publication",
    link: "#"
  },
  {
    id: 2,
    title: "Received the Presidential Early Career Award",
    date: "March 3, 2023",
    description: "Honored to receive the Presidential Early Career Award for Scientists and Engineers for contributions to quantum materials research.",
    type: "award"
  },
  {
    id: 3,
    title: "Invited Talk at Quantum Materials Conference",
    date: "February 18, 2023",
    description: "I'll be giving an invited talk on our recent discoveries in topological quantum materials at the International Quantum Materials Conference in Zurich.",
    type: "conference"
  },
  {
    id: 4,
    title: "Research Featured in Scientific American",
    date: "January 25, 2023",
    description: "Our work on quantum computing applications of topological insulators was featured in the latest issue of Scientific American.",
    type: "media",
    link: "#"
  },
  {
    id: 5,
    title: "New Research Grant Awarded",
    date: "December 10, 2022",
    description: "Our lab has been awarded a $2.5M grant from the Department of Energy to develop novel quantum materials for energy applications.",
    type: "grant"
  },
  {
    id: 6,
    title: "New Collaboration with IBM Quantum",
    date: "November 5, 2022",
    description: "Excited to announce a new research collaboration with IBM Quantum to explore topological materials for fault-tolerant quantum computing.",
    type: "publication"
  }
];

const NewsSection = () => {
  return (
    <section id="news" className="py-16">
      <div className="section-container">
        <h2 className="section-title text-center">News & Updates</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {newsItems.map((item) => (
            <NewsCard key={item.id} news={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

interface NewsCardProps {
  news: NewsItem;
}

const NewsCard = ({ news }: NewsCardProps) => {
  const getIcon = (type: string) => {
    switch (type) {
      case "publication":
        return <BookOpen className="h-5 w-5 text-blue-500" />;
      case "award":
        return <Award className="h-5 w-5 text-amber-500" />;
      case "conference":
        return <Video className="h-5 w-5 text-green-500" />;
      case "media":
        return <Newspaper className="h-5 w-5 text-purple-500" />;
      case "grant":
        return <DollarSign className="h-5 w-5 text-emerald-500" />;
      default:
        return null;
    }
  };
  
  const getTypeBadge = (type: string) => {
    switch (type) {
      case "publication":
        return <Badge className="bg-blue-500">Publication</Badge>;
      case "award":
        return <Badge className="bg-amber-500">Award</Badge>;
      case "conference":
        return <Badge className="bg-green-500">Conference</Badge>;
      case "media":
        return <Badge className="bg-purple-500">Media</Badge>;
      case "grant":
        return <Badge className="bg-emerald-500">Grant</Badge>;
      default:
        return null;
    }
  };
  
  return (
    <Card className="hover-lift">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          {getTypeBadge(news.type)}
          <div className="flex items-center text-gray-500 text-sm">
            <Calendar className="h-3 w-3 mr-1" />
            {news.date}
          </div>
        </div>
        <CardTitle className="text-lg font-serif mt-2 flex items-start gap-2">
          {getIcon(news.type)}
          <span>{news.title}</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription>
          {news.description}
        </CardDescription>
      </CardContent>
      {news.link && (
        <CardFooter>
          <a 
            href={news.link} 
            className="text-research-light-blue hover:text-research-blue transition-colors text-sm font-medium"
          >
            Read more →
          </a>
        </CardFooter>
      )}
    </Card>
  );
};

const DollarSign = ({ className = "", ...props }) => (
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
    <line x1="12" x2="12" y1="2" y2="22" />
    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
  </svg>
);

export default NewsSection;
