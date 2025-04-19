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
    src: "/images/meta_1.jpg",
    caption: "Presenting at Metamaterials 2023 in Crete, Greece",
    category: "metamaterials",
    alt: "Metamaterials 2023 conference talk"
  },
  {
    id: 2,
    src: "/images/supr_1.jpg",
    caption: "Poster session at SUPR 2024, Stanford University",
    category: "supr",
    alt: "Stanford photonics retreat 2024"
  },
  {
    id: 3,
    src: "/images/lab_work.jpg",
    caption: "Working on nanofabrication in the cleanroom",
    category: "lab",
    alt: "Cleanroom fabrication"
  },
  {
    id: 4,
    src: "/images/life_outside.jpg",
    caption: "Exploring Lyngby forest with colleagues after lab hours",
    category: "life",
    alt: "Life outside the lab"
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
    { id: "life", name: "Life Out of the Lab" }
  ];

  return (
    <section id="gallery" className="py-16">
      <div className="section-container">
        <h2 className="section-title text-center">Photo Gallery</h2>
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
          A collection of photographs from conferences, lab activities, and moments beyond the lab.
        </p>

        <Tabs defaultValue="all" className="w-full">
          <TabsList className="flex flex-wrap justify-center gap-2 mb-8">
            {categories.map((category) => (
              <TabsTrigger key={category.id} value={category.id}>
                {category.name}
              </TabsTrigger>
            ))}
          </TabsList>

          <TabsContent value="all" className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {galleryImages.map((image) => (
              <GalleryItem key={image.id} image={image} onClick={() => openLightbox(image)} />
            ))}
          </TabsContent>

          {categories.slice(1).map((category) => (
            <TabsContent key={category.id} value={category.id} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {galleryImages.filter(image => image.category === category.id).map((image) => (
                <GalleryItem key={image.id} image={image} onClick={() => openLightbox(image)} />
              ))}
            </TabsContent>
          ))}
        </Tabs>

        <Dialog open={lightboxOpen} onOpenChange={setLightboxOpen}>
          <DialogContent className="max-w-4xl p-0 bg-transparent border-none shadow-none">
            <div className="relative bg-black rounded-lg overflow-hidden">
              {selectedImage && (
                <>
                  <button onClick={closeLightbox} className="absolute top-4 left-4 z-10 text-white hover:text-gray-300">
                    <X size={24} />
                  </button>
                  <img src={selectedImage.src} alt={selectedImage.alt} className="w-full h-auto object-contain" />
                  <button onClick={() => navigateLightbox("prev")} className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black/50 p-2 rounded-full text-white">
                    <ChevronLeft size={24} />
                  </button>
                  <button onClick={() => navigateLightbox("next")} className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black/50 p-2 rounded-full text-white">
                    <ChevronRight size={24} />
                  </button>
                  <div className="bg-black/80 text-white p-4 text-sm">{selectedImage.caption}</div>
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
    <div className="group relative overflow-hidden rounded-lg cursor-pointer hover-lift" onClick={onClick}>
      <div className="aspect-[4/3] overflow-hidden">
        <img src={image.src} alt={image.alt} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-4 flex flex-col justify-end">
        <p className="text-white text-sm">{image.caption}</p>
      </div>
    </div>
  );
};

export default GallerySection;
