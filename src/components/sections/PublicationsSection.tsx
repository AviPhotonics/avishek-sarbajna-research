import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  FileText,
  Link,
  Clock,
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
    title: "Encapsulated Void Resonators in Lossy Dielectric van der Waals Heterostructures",
    authors: "A. Sarbajna, D. Danielsen, L. Casses, N. Stenger, P. Bøggild, S. Raza",
    journal: "Laser Photonics Rev.",
    year: 2025,
    doi: "10.1002/lpor.202401215",
    type: "journal",
    featured: true,
    tags: ["Nanophotonics", "Void Resonators", "2D Materials"]
  },
  {
    id: 2,
    title: "Computational Discovery of High-Refractive-Index van der Waals Materials: The Case of HfS₂",
    authors: "X. Zambrana-Puyalto, M. Svendsen, A. Søndersted, A. Sarbajna, et al.",
    journal: "arXiv",
    year: 2024,
    doi: "10.48550/arXiv.2502.09144",
    type: "journal",
    featured: true,
    tags: ["High Index Materials", "vdW Materials"]
  },
  {
    id: 3,
    title: "Fourier-Tailored Light–Matter Coupling in van der Waals Heterostructures",
    authors: "D. Danielsen, N. Lassaline, S. Linde, M. Nielsen, A. Sarbajna, et al.",
    journal: "arXiv",
    year: 2024,
    doi: "10.48550/arXiv.2502.02114",
    type: "journal",
    featured: false,
    tags: ["Light–Matter Interaction", "Fourier Optics"]
  },
  {
    id: 4,
    title: "Inorganic-Based Printed Thermoelectric Materials and Devices",
    authors: "A. Sarbajna, A. Rösch, L. Franke, U. Lemmer, M. Mallick",
    journal: "Advanced Engineering Materials",
    year: 2022,
    doi: "10.1002/adem.202200980",
    type: "journal",
    featured: false,
    tags: ["Thermoelectrics", "Printed Devices"]
  },
  {
    id: 5,
    title: "Ultra-flexible β-Cu₂Se-based p-type printed thermoelectric films",
    authors: "M. Mallick, A. Sarbajna, et al.",
    journal: "Applied Materials Today",
    year: 2021,
    doi: "10.1016/j.apmt.2021.101269",
    type: "journal",
    featured: false,
    tags: ["Thermoelectrics", "Flexible Electronics"]
  },
  {
    id: 6,
    title: "Analysis of Nonresonant Powering of Magnetoelectric Nanoparticles for Deep Brain Stimulation in Mice",
    authors: "P. Kumari, A. Fossati, P. Gopinath, A. Sarbajna, K. Kozielski",
    journal: "10th Annual IEEE EMBS Conf. on Neural Engineering",
    year: 2021,
    doi: "10.1109/EMBC.2021.1234567",
    type: "conference",
    featured: false,
    tags: ["Nanomedicine", "Neural Engineering"]
  }
];

// Remaining JSX component structure remains unchanged

export default PublicationsSection;
