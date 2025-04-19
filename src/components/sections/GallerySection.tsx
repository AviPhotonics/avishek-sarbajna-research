
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
    caption: "Presenting our quantum materials research at the International Physics Conference 2023",
    category: "conferences",
    alt: "Researcher presenting at a conference"
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1606134286100-9696c8c03054?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    caption: "Working with custom-built equipment in our Quantum Materials Lab",
    category: "lab",
    alt: "Laboratory equipment"
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1581093804475-577d72e38da0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    caption: "Collaboration meeting with our international research partners",
    category: "conferences",
    alt: "Research team in a meeting"
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1581092162384-8987c1d64718?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    caption: "Quantum computing workshop with graduate students",
    category: "outreach",
    alt: "Workshop with students"
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1581094794329-c8112a89f0f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    caption: "Sample preparation for scanning tunneling microscopy",
    category: "lab",
    alt: "Lab work with microscope"
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1572043268620-5b878f2a4ac5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    caption: "Science outreach event at local high school",
    category: "outreach",
    alt: "Science outreach event"
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1589986005992-e7686f78bb78?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    caption: "Receiving the Outstanding Researcher Award at the Physical Society ceremony",
    category: "conferences",
    alt: "Award ceremony"
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1420593248178-d88870618ca0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    caption: "The team during our annual field research trip",
    category: "fieldwork",
    alt: "Research team in field"
  },
  {
    id: 9,
    src: "https://images.unsplash.com/photo-1537884944318-390069bb8665?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    caption: "Setting up instruments for measurement in extreme conditions",
    category: "fieldwork",
    alt: "Field research equipment setup"
  }
];

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  
  const openLightbox = (image: GalleryImage) => {
    setSelectedImage(image);
    setLightboxOpen(true);
  };
  
  const closeLightbox = () => {
    setLightboxOpen(false);
  };
  
  const navigateLightbox = (direction: "next" | "prev") => {
    if (!selectedImage) return;
    
    const currentIndex = galleryImages.findIndex(img => img.id === selectedImage.id);
    
    if (direction === "next") {
      const nextIndex = (currentIndex + 1) % galleryImages.length;
      setSelectedImage(galleryImages[nextIndex]);
    } else {
      const prevIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
      setSelectedImage(galleryImages[prevIndex]);
    }
  };
  
  const categories = [
    { id: "all", name: "All" },
    { id: "conferences", name: "Conferences" },
    { id: "lab", name: "Lab Work" },
    { id: "fieldwork", name: "Field Work" },
    { id: "outreach", name: "Outreach" }
  ];
  
  return (
    <section id="gallery" className="py-16">
      <div className="section-container">
        <h2 className="section-title text-center">Photo Gallery</h2>
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
          A collection of photographs from conferences, laboratory work, fieldwork, and outreach events.
        </p>
        
        <Tabs defaultValue="all" className="w-full">
          <TabsList className="flex mb-8 justify-center">
            {categories.map((category) => (
              <TabsTrigger key={category.id} value={category.id}>
                {category.name}
              </TabsTrigger>
            ))}
          </TabsList>
          
          <TabsContent value="all" className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {galleryImages.map((image) => (
              <GalleryItem 
                key={image.id} 
                image={image} 
                onClick={() => openLightbox(image)} 
              />
            ))}
          </TabsContent>
          
          {categories.slice(1).map((category) => (
            <TabsContent 
              key={category.id} 
              value={category.id} 
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
            >
              {galleryImages
                .filter(image => image.category === category.id)
                .map((image) => (
                  <GalleryItem 
                    key={image.id} 
                    image={image} 
                    onClick={() => openLightbox(image)} 
                  />
                ))
              }
            </TabsContent>
          ))}
        </Tabs>
        
        {/* Lightbox Dialog */}
        <Dialog open={lightboxOpen} onOpenChange={setLightboxOpen}>
          <DialogContent className="max-w-4xl p-0 bg-transparent border-none shadow-none">
            <div className="relative bg-black rounded-lg overflow-hidden">
              {selectedImage && (
                <>
                  <div className="flex justify-between absolute top-4 left-4 right-4 z-10">
                    <button
                      onClick={closeLightbox}
                      className="text-white hover:text-gray-300 transition-colors"
                    >
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
                    <button
                      onClick={() => navigateLightbox("prev")}
                      className="text-white p-2 rounded-full bg-black/50 hover:bg-black/70 transition-colors"
                    >
                      <ChevronLeft size={24} />
                    </button>
                  </div>
                  
                  <div className="absolute top-1/2 right-4 transform -translate-y-1/2">
                    <button
                      onClick={() => navigateLightbox("next")}
                      className="text-white p-2 rounded-full bg-black/50 hover:bg-black/70 transition-colors"
                    >
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
    <div 
      className="group relative overflow-hidden rounded-lg cursor-pointer hover-lift"
      onClick={onClick}
    >
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

