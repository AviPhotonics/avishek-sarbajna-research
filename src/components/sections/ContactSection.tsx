import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Linkedin, Github, ExternalLink, MapPin, Phone } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="contact" className="py-16">
      <div className="section-container">
        <h2 className="section-title text-center">Contact Me</h2>
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
          Have questions about my research or interested in collaboration? Feel free to reach out!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Your Name</Label>
                  <Input id="name" name="name" value={formData.name} onChange={handleInputChange} required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" name="email" type="email" value={formData.email} onChange={handleInputChange} required />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Input id="subject" name="subject" value={formData.subject} onChange={handleInputChange} required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" name="message" rows={5} value={formData.message} onChange={handleInputChange} required />
              </div>

              <Button type="submit" className="w-full bg-research-blue hover:bg-research-dark" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-serif font-semibold mb-4 text-research-blue">Contact Information</h3>

                <div className="space-y-4">
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

                  <div className="flex">
                    <Phone className="h-5 w-5 text-research-light-blue mr-3 mt-0.5" />
                    <div>
                      <h4 className="font-medium">Phone</h4>
                      <p className="text-gray-600">+45 5520 9702</p>
                    </div>
                  </div>

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

                  <div>
                    <h4 className="font-medium mb-2">Social & Academic Profiles</h4>
                    <div className="flex space-x-3">
                      <a href="https://www.linkedin.com/in/avishek-sarbajna" target="_blank" rel="noopener noreferrer" className="bg-gray-100 hover:bg-gray-200 transition-colors p-2 rounded-full">
                        <Linkedin className="h-5 w-5" />
                      </a>
                      <a href="https://github.com/avisheksarbajna" target="_blank" rel="noopener noreferrer" className="bg-gray-100 hover:bg-gray-200 transition-colors p-2 rounded-full">
                        <Github className="h-5 w-5" />
                      </a>
                      <a href="https://scholar.google.com/citations?user=nnUM7sUAAAAJ&hl=en" target="_blank" rel="noopener noreferrer" className="bg-gray-100 hover:bg-gray-200 transition-colors p-2 rounded-full">
                        <GoogleScholar className="h-5 w-5" />
                      </a>
                      <a href="https://orcid.org/0000-0003-2550-8997" target="_blank" rel="noopener noreferrer" className="bg-gray-100 hover:bg-gray-200 transition-colors p-2 rounded-full">
                        <ORCID className="h-5 w-5" />
                      </a>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-serif font-semibold mb-4 text-research-blue">Lab Hours</h3>
                <p className="text-gray-600 mb-2">
                  If you're interested in visiting our lab or scheduling a meeting:
                </p>
                <ul className="space-y-2">
                  <li className="flex justify-between">
                    <span className="font-medium">Monday - Friday</span>
                    <span>9:00 AM - 5:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="font-medium">Weekends</span>
                    <span>By appointment only</span>
                  </li>
                </ul>
                <div className="mt-4">
                  <Button variant="outline" asChild className="w-full">
                    <a href="#" className="flex items-center justify-center">
                      <Calendar className="mr-2 h-4 w-4" />
                      Schedule a Meeting
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

const Calendar = ({ className = "", ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`${className}`} {...props}>
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
  </svg>
);

const GoogleScholar = ({ className = "", ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`${className}`} {...props}>
    <path d="M12 14.701c-5.236 0-9.485 2.065-9.485 4.618S6.764 23.936 12 23.936s9.485-2.065 9.485-4.618S17.236 14.701 12 14.701zm0 0c5.236 0 9.485-4.618 9.485-7.421C21.485 4.477 17.236 0 12 0S2.515 4.477 2.515 7.28c0 2.803 4.249 7.421 9.485 7.421z" />
    <path d="M7 10h10M7 14h10" />
  </svg>
);

const ORCID = ({ className = "", ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`${className}`} {...props}>
    <circle cx="12" cy="12" r="10" />
    <path d="M12 7v6M15 7v6M9 7v6" />
    <circle cx="12" cy="16" r="1" />
  </svg>
);

export default ContactSection;
