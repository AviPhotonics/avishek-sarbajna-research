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
                  <div className="text-sm text-gray-500">Since 03/2022</div>
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
        <div className="text-sm text-gray-500">2022 – Present</div>
        <div className="font-medium">PhD Researcher</div>
        <div className="text-sm">Applied Nano-Optics Group, Technical University of Denmark</div>
      </li>

      <li>
        <div className="text-sm text-gray-500">Feb – Jun 2024</div>
        <div className="font-medium">Visiting Researcher</div>
        <div className="text-sm">Geballe Laboratory for Advanced Materials, Stanford University</div>
      </li>

      <li>
        <div className="text-sm text-gray-500">2020 – 2022</div>
        <div className="font-medium">Research Assistant / Intern</div>
        <div className="text-sm">Light Technology Institute, Karlsruhe Institute of Technology</div>
      </li>

      <li>
        <div className="text-sm text-gray-500">2020 – 2021</div>
        <div className="font-medium">Research Assistant</div>
        <div className="text-sm">Institut für Funktionelle Grenzflächen, KIT</div>
      </li>

      <li>
        <div className="text-sm text-gray-500">Oct 2016 – Sep 2019</div>
        <div className="font-medium">Developer</div>
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
                  <div className="text-sm text-gray-500">2023</div>
                  <div className="font-medium">Presidential Early Career Award</div>
                  <div className="text-sm">National Science Foundation</div>
                </li>
                <li>
                  <div className="text-sm text-gray-500">2021</div>
                  <div className="font-medium">Young Investigator Grant</div>
                  <div className="text-sm">Department of Energy</div>
                </li>
                <li>
                  <div className="text-sm text-gray-500">2018</div>
                  <div className="font-medium">Outstanding Researcher Award</div>
                  <div className="text-sm">American Physical Society</div>
                </li>
                <li>
                  <div className="text-sm text-gray-500">2016</div>
                  <div className="font-medium">Innovation in Teaching Award</div>
                  <div className="text-sm">Stanford University</div>
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
