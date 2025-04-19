import { Card, CardContent } from "@/components/ui/card";
import { Mail, Linkedin, Github, MapPin, Phone } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-16">
      <div className="section-container">
        <h2 className="section-title text-center">Contact Me</h2>
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
          Feel free to reach out via email or connect through the platforms below.
        </p>

        <div className="flex justify-center">
          <Card className="w-full max-w-2xl">
            <CardContent className="p-6 space-y-6">
              <h3 className="text-xl font-serif font-semibold text-research-blue">
                Contact Information
              </h3>

              <div className="space-y-4">
                {/* Email */}
                <div className="flex">
                  <Mail className="h-5 w-5 text-research-light-blue mr-3 mt-0.5" />
                  <div>
                    <h4 className="font-medium">Email</h4>
                    <p className="text-gray-600">
                      <a href="mailto:avisar@dtu.dk" className="hover:text-research-light-blue transition-colors">
                        avisar@dtu.dk
                      </a><br />
                      <a href="mailto:avisheksarbajna1995@gmail.com" className="hover:text-research-light-blue transition-colors">
                        avisheksarbajna1995@gmail.com
                      </a>
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex">
                  <Phone className="h-5 w-5 text-research-light-blue mr-3 mt-0.5" />
                  <div>
                    <h4 className="font-medium">Phone</h4>
                    <p className="text-gray-600">+45 5520 9702</p>
                  </div>
                </div>

                {/* Office Address */}
                <div className="flex">
                  <MapPin className="h-5 w-5 text-research-light-blue mr-3 mt-0.5" />
                  <div>
                    <h4 className="font-medium">Office</h4>
                    <p className="text-gray-600">
                      Fysikvej, 309 5<br />
                      2800 Lyngby, Denmark
                    </p>
                  </div>
                </div>

                {/* Socials */}
                <div>
                  <h4 className="font-medium mb-2">Social & Academic Profiles</h4>
                  <div className="flex space-x-3">
                    <a
                      href="https://www.linkedin.com/in/avishek-sarbajna"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gray-100 hover:bg-gray-200 transition-colors p-2 rounded-full"
                    >
                      <Linkedin className="h-5 w-5" />
                    </a>
                    <a
                      href="https://github.com/avisheksarbajna"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gray-100 hover:bg-gray-200 transition-colors p-2 rounded-full"
                    >
                      <Github className="h-5 w-5" />
                    </a>
                    <a
                      href="https://scholar.google.com/citations?user=nnUM7sUAAAAJ&hl=en"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gray-100 hover:bg-gray-200 transition-colors p-2 rounded-full"
                    >
                      <GoogleScholar className="h-5 w-5" />
                    </a>
                    <a
                      href="https://orcid.org/0000-0003-2550-8997"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gray-100 hover:bg-gray-200 transition-colors p-2 rounded-full"
                    >
                      <ORCID className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

const GoogleScholar = ({ className = "", ...props }) => (
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
    <path d="M12 14.7c-5.2 0-9.5 2-9.5 4.6S6.8 24 12 24s9.5-2.1 9.5-4.6-4.3-4.7-9.5-4.7zm0 0c5.2 0 9.5-4.6 9.5-7.4C21.5 4.5 17.2 0 12 0S2.5 4.5 2.5 7.3c0 2.8 4.2 7.4 9.5 7.4z" />
    <path d="M7 10h10M7 14h10" />
  </svg>
);

const ORCID = ({ className = "", ...props }) => (
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
    <circle cx="12" cy="12" r="10" />
    <path d="M12 7v6M15 7v6M9 7v6" />
    <circle cx="12" cy="16" r="1" />
  </svg>
);

export default ContactSection;
