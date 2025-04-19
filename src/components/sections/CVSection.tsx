
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { FileDown, GraduationCap, Briefcase, Award } from "lucide-react";

const CVSection = () => {
  return (
    <section id="cv" className="py-16 bg-gray-50">
      <div className="section-container">
        <h2 className="section-title text-center">Curriculum Vitae</h2>
        <div className="flex justify-center mb-8">
          <Button className="bg-research-blue hover:bg-research-dark">
            <FileDown className="mr-2 h-4 w-4" />
            Download Full CV
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
                  <div className="text-sm text-gray-500">2010 - 2014</div>
                  <div className="font-medium">Ph.D. in Quantum Physics</div>
                  <div className="text-sm">Massachusetts Institute of Technology</div>
                </li>
                <li>
                  <div className="text-sm text-gray-500">2008 - 2010</div>
                  <div className="font-medium">M.Sc. in Physics</div>
                  <div className="text-sm">California Institute of Technology</div>
                </li>
                <li>
                  <div className="text-sm text-gray-500">2004 - 2008</div>
                  <div className="font-medium">B.Sc. in Physics (Honors)</div>
                  <div className="text-sm">Stanford University</div>
                </li>
              </ul>
            </CardContent>
          </Card>
          
          {/* Professional Experience */}
          <Card className="hover-lift">
            <CardContent className="pt-6">
              <div className="flex items-center mb-4">
                <Briefcase className="text-research-light-blue mr-3" />
                <h3 className="text-xl font-semibold">Experience</h3>
              </div>
              <ul className="space-y-4">
                <li>
                  <div className="text-sm text-gray-500">2020 - Present</div>
                  <div className="font-medium">Associate Professor</div>
                  <div className="text-sm">Department of Physics, Stanford University</div>
                </li>
                <li>
                  <div className="text-sm text-gray-500">2014 - 2020</div>
                  <div className="font-medium">Assistant Professor</div>
                  <div className="text-sm">Department of Physics, Stanford University</div>
                </li>
                <li>
                  <div className="text-sm text-gray-500">2012 - 2014</div>
                  <div className="font-medium">Research Fellow</div>
                  <div className="text-sm">Quantum Materials Institute, ETH Zürich</div>
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
