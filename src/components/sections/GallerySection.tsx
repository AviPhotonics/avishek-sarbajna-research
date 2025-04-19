import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface GalleryImage {
  id: number;
  src: string;
  caption: string;
  category: string;
  alt: string;
}

const galleryImages: GalleryImage[] = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    caption: "Presenting at Metamaterials 2023, Crete, Greece",
    category: "metamaterials",
    alt: "Presenting at Metamaterials"
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1581093804475-577d72e38da0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    caption: "Discussion during SUPR 2024, Stanford, USA",
    category: "supr",
    alt: "Discussion during SUPR"
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1606134286100-9696c8c03054?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    caption: "Working with custom-built equipment in our Quantum Materials Lab",
    category: "lab",
    alt: "Laboratory equipment"
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1581092162384-8987c1d64718?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    caption: "Life out of the lab: hiking with colleagues",
    category: "life",
    alt: "Hiking"
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1581094794329-c8112a89f0f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    caption: "Sample preparation for scanning tunneling microscopy",
    category: "lab",
    alt: "Microscope lab work"
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1572043268620-5b878f2a4ac5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    caption: "Science outreach at a local school",
    category: "life",
    alt: "Outreach"
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1589986005992-e7686f78bb78?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    caption: "Award ceremony at Metamaterials 2023",
    category: "metamaterials",
    alt: "Award ceremony"
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1420593248178-d88870618ca0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    caption: "Annual research team trip",
    category: "life",
    alt: "Team trip"
  },
  {
    id: 9,
    src: "https://images.unsplash.com/photo-1537884944318-390069bb8665?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    caption: "Instrument setup in extreme conditions",
    category: "lab",
    alt: "Extreme condition setup"
  }
];

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const openLightbox = (image: GalleryImage) => {
    setSelectedImage(image);
    setLightboxOpen(true);
  };

  const closeLightbox = () => setLightboxOpen(false);

  const navigateLightbox = (direction: "next" | "prev") => {
    if (!selectedImage) return;
    const currentIndex = galleryImages.findIndex(img => img.id === selectedImage.id);
    const nextIndex = direction === "next"
      ? (currentIndex + 1) % galleryImages.length
      : (currentIndex - 1 + galleryImages.length) % galleryImages.length;
    setSelectedImage(galleryImages[nextIndex]);
  };

  const categories = [
    { id: "all", name: "All" },
    { id: "metamaterials", name: "Metamaterials 2023" },
    { id: "supr", name: "SUPR 2024" },
    { id: "lab", name: "Lab Work" },
    { id: "life", name: "Life out of the Lab" }
  ];

  return (
    <section id="gallery" className="py-16">
      <div className="section-container">
        <h2 className="section-title text-center">Photo Gallery</h2>
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
          A collection of photographs from conferences, laboratory work, and life out of the lab.
        </p>

        <Tabs defaultValue="all" className="w-full">
          <TabsList className="flex mb-8 justify-center">
            {categories.map((category) => (
              <TabsTrigger key={category.id} value={category.id}>
                {category.name}
              </TabsTrigger>
            ))}
          </TabsList>

          {categories.map((category) => (
            <TabsContent
              key={category.id}
              value={category.id}
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
            >
              {galleryImages
                .filter(img => category.id === "all" || img.category === category.id)
                .map(img => (
                  <GalleryItem key={img.id} image={img} onClick={() => openLightbox(img)} />
                ))}
            </TabsContent>
          ))}
        </Tabs>

        <Dialog open={lightboxOpen} onOpenChange={setLightboxOpen}>
          <DialogContent className="max-w-4xl p-0 bg-transparent border-none shadow-none">
            <div className="relative bg-black rounded-lg overflow-hidden">
              {selectedImage && (
                <>
                  <div className="flex justify-between absolute top-4 left-4 right-4 z-10">
                    <button onClick={closeLightbox} className="text-white hover:text-gray-300">
                      <X size={24} />
                    </button>
                  </div>
                  <div className="relative pb-[56.25%]">
                    <img
                      src={selectedImage.src}
                      alt={selectedImage.alt}
                      className="absolute inset-0 w-full h-full object-contain"
                    />
                  </div>
                  <div className="absolute top-1/2 left-4 transform -translate-y-1/2">
                    <button onClick={() => navigateLightbox("prev")} className="text-white p-2 rounded-full bg-black/50 hover:bg-black/70">
                      <ChevronLeft size={24} />
                    </button>
                  </div>
                  <div className="absolute top-1/2 right-4 transform -translate-y-1/2">
                    <button onClick={() => navigateLightbox("next")} className="text-white p-2 rounded-full bg-black/50 hover:bg-black/70">
                      <ChevronRight size={24} />
                    </button>
                  </div>
                  <div className="bg-black/80 p-4">
                    <p className="text-white text-sm">{selectedImage.caption}</p>
                  </div>
                </>
              )}
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

interface GalleryItemProps {
  image: GalleryImage;
  onClick: () => void;
}

const GalleryItem = ({ image, onClick }: GalleryItemProps) => {
  return (
    <div onClick={onClick} className="group relative overflow-hidden rounded-lg cursor-pointer hover-lift">
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={image.src}
          alt={image.alt}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-4 flex flex-col justify-end">
        <p className="text-white text-sm">{image.caption}</p>
      </div>
    </div>
  );
};

export default GallerySection;
