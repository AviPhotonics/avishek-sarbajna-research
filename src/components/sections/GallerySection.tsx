import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface GalleryImage {
  id: number;
  src: string;
  caption: string;
  category: string;
  subcategory?: string;
  alt: string;
}

const galleryImages: GalleryImage[] = [
  {
    id: 1,
    src: "/images/metamaterials_poster.jpg",
    caption: "Poster presentation at Metamaterials 2023, Crete",
    category: "conferences",
    subcategory: "metamaterials",
    alt: "Metamaterials conference poster"
  },
  {
    id: 2,
    src: "/images/supr_poster.jpg",
    caption: "Poster presentation at SUPR 2024, Stanford",
    category: "conferences",
    subcategory: "supr",
    alt: "Stanford SUPR poster session"
  },
  {
    id: 3,
    src: "/images/lab_work.jpg",
    caption: "Working in the cleanroom on nanofabrication",
    category: "lab",
    alt: "Cleanroom lab work"
  },
  {
    id: 4,
    src: "/images/outreach_event.jpg",
    caption: "Volunteering in science outreach for school students",
    category: "life",
    alt: "Outreach activity"
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
    const currentIndex = galleryImages.findIndex((img) => img.id === selectedImage.id);
    const newIndex =
      direction === "next"
        ? (currentIndex + 1) % galleryImages.length
        : (currentIndex - 1 + galleryImages.length) % galleryImages.length;
    setSelectedImage(galleryImages[newIndex]);
  };

  const renderImages = (filterFn: (image: GalleryImage) => boolean) => (
    galleryImages.filter(filterFn).map((image) => (
      <GalleryItem key={image.id} image={image} onClick={() => openLightbox(image)} />
    ))
  );

  return (
    <section id="gallery" className="py-16">
      <div className="section-container">
        <h2 className="section-title text-center">Photo Gallery</h2>
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
          A collection of photographs from conferences, laboratory work, and moments beyond the lab.
        </p>

        <Tabs defaultValue="all" className="w-full">
          <TabsList className="flex mb-8 flex-wrap justify-center gap-2">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="metamaterials">Metamaterials 2023</TabsTrigger>
            <TabsTrigger value="supr">SUPR 2024</TabsTrigger>
            <TabsTrigger value="lab">Lab Work</TabsTrigger>
            <TabsTrigger value="life">Life Out of the Lab</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {renderImages(() => true)}
          </TabsContent>

          <TabsContent value="metamaterials" className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {renderImages((img) => img.subcategory === "metamaterials")}
          </TabsContent>

          <TabsContent value="supr" className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {renderImages((img) => img.subcategory === "supr")}
          </TabsContent>

          <TabsContent value="lab" className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {renderImages((img) => img.category === "lab")}
          </TabsContent>

          <TabsContent value="life" className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {renderImages((img) => img.category === "life")}
          </TabsContent>
        </Tabs>

        <Dialog open={lightboxOpen} onOpenChange={setLightboxOpen}>
          <DialogContent className="max-w-4xl p-0 bg-transparent border-none shadow-none">
            {selectedImage && (
              <div className="relative bg-black rounded-lg overflow-hidden">
                <div className="flex justify-end absolute top-4 right-4 z-10">
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
                  <button
                    onClick={() => navigateLightbox("prev")}
                    className="text-white p-2 rounded-full bg-black/50 hover:bg-black/70"
                  >
                    <ChevronLeft size={24} />
                  </button>
                </div>

                <div className="absolute top-1/2 right-4 transform -translate-y-1/2">
                  <button
                    onClick={() => navigateLightbox("next")}
                    className="text-white p-2 rounded-full bg-black/50 hover:bg-black/70"
                  >
                    <ChevronRight size={24} />
                  </button>
                </div>

                <div className="bg-black/80 p-4">
                  <p className="text-white text-sm">{selectedImage.caption}</p>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

const GalleryItem = ({ image, onClick }: { image: GalleryImage; onClick: () => void }) => (
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

export default GallerySection;
