import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { FileDown, GraduationCap, Briefcase, Award } from "lucide-react";

const CVSection = () => {
  return (
    <section id="cv" className="py-16 bg-gray-50">
      <div className="section-container">
        <h2 className="section-title text-center">Curriculum Vitae</h2>
        <div className="flex justify-center mb-8">
          <Button className="bg-research-blue hover:bg-research-dark" asChild>
            <a href="/CV_A_Sarbajna.pdf" download>
              <FileDown className="mr-2 h-4 w-4" />
              Download Full CV
            </a>
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Education */}
          <Card className="hover-lift">
            <CardContent className="pt-6">
              <div className="flex items-center mb-4">
                <GraduationCap className="text-research-light-blue mr-3" />
                <h3 className="text-xl font-semibold">Education</h3>
              </div>
              <ul className="space-y-4">
                
                <li>
                  <div className="text-sm text-gray-500">2022 - 2025</div>
                  <div className="font-medium">Doctorate in Physics</div>
                  <div className="text-sm">Danmarks Tekniske Universitet, Denmark</div>
                </li>
                <li>
                  <div className="text-sm text-gray-500">2019 - 2021</div>
                  <div className="font-medium">Master of Science in Optics and Photonics</div>
                  <div className="text-sm">Karlsruher Institut für Technologie, Germany</div>
                  <div className="text-sm text-research-light-blue">Grade: 1.8</div>
                </li>
                <li>
                  <div className="text-sm text-gray-500">2012 - 2016</div>
                  <div className="font-medium">Bachelor of Technology in Electrical Engineering</div>
                  <div className="text-sm">MAKAUT (West Bengal University of Technology), India</div>
                  <div className="text-sm text-research-light-blue">Grade: 8.2</div>
                </li>
              </ul>
            </CardContent>
          </Card>

{/* Research Experience */}
<Card className="hover-lift">
  <CardContent className="pt-6">
    <div className="flex items-center mb-4">
      <Briefcase className="text-research-light-blue mr-3" />
      <h3 className="text-xl font-semibold">Research Experience</h3>
    </div>
    <ul className="space-y-4">
      
      <li>
        <div className="text-sm text-gray-500">Since Apr 2025</div>
        <div className="font-medium">Postdoc</div>
        <div className="text-sm">Quantum and laser photonics, Technical University of Denmark</div>
      </li>
      
      <li>
        <div className="text-sm text-gray-500">Mar 2022 – Feb 2025</div>
        <div className="font-medium">PhD Researcher</div>
        <div className="text-sm">Applied Nano-Optics Group, Technical University of Denmark</div>
      </li>

      <li>
        <div className="text-sm text-gray-500">Feb 2024 – Jun 2024</div>
        <div className="font-medium">Visiting Researcher</div>
        <div className="text-sm">Geballe Laboratory for Advanced Materials, Stanford University</div>
      </li>

      <li>
        <div className="text-sm text-gray-500">Nov 2020 – Feb 2022</div>
        <div className="font-medium">Research Assistant / Intern</div>
        <div className="text-sm">Light Technology Institute, Karlsruhe Institute of Technology</div>
      </li>

      <li>
        <div className="text-sm text-gray-500">Feb 2020 – Apr 2021</div>
        <div className="font-medium">Research Assistant</div>
        <div className="text-sm">Institut für Funktionelle Grenzflächen, Karlsruhe Institute of Technology</div>
      </li>

      <li>
        <div className="text-sm text-gray-500">Oct 2016 – Sep 2019</div>
        <div className="font-medium">Software Developer</div>
        <div className="text-sm">Tata Consultancy Services, India</div>
      </li>

    </ul>
  </CardContent>
</Card>

  
          {/* Awards & Honors */}
<Card className="hover-lift">
  <CardContent className="pt-6">
    <div className="flex items-center mb-4">
      <Award className="text-research-light-blue mr-3" />
      <h3 className="text-xl font-semibold">Awards & Honors</h3>
    </div>
    <ul className="space-y-4">

      <li>
        <div className="text-sm text-gray-500">2024</div>
        <div className="font-medium">Otto Mønsteds Fond Grant</div>
        <div className="text-sm">For research stay at Stanford University</div>
      </li>

      <li>
        <div className="text-sm text-gray-500">2024</div>
        <div className="font-medium">William Demant Foundation Grant</div>
        <div className="text-sm">Support for international research mobility</div>
      </li>

      <li>
        <div className="text-sm text-gray-500">2024</div>
        <div className="font-medium">Best Poster Award</div>
        <div className="text-sm">Stanford University Photonics Retreat (SUPR)</div>
      </li>

      <li>
        <div className="text-sm text-gray-500">2012–2016</div>
        <div className="font-medium">Merit-Cum-Means Scholarship</div>
        <div className="text-sm">Government of West Bengal, India</div>
      </li>

      <li>
        <div className="text-sm text-gray-500">2012</div>
        <div className="font-medium">Top 3% in WBJEE Entrance Exam</div>
        <div className="text-sm">Ranked 3558 out of ~120,000 students</div>
      </li>

    </ul>
  </CardContent>
</Card>
        </div>
      </div>
    </section>
  );
};

export default CVSection;
