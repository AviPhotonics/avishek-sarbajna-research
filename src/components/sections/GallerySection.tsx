import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent
} from "@/components/ui/tabs";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface GalleryImage {
  id: number;
  src: string;
  caption: string;
  category: "conferences" | "research" | "life" | "all";
  subcategory?: string; // e.g. "metamaterials", "supr", "hiking", "winter", "colors"
  alt: string;
}

const galleryImages: GalleryImage[] = [
  // --- Conferences / Metamaterials 2023
  {
    id: 1,
    src: "/images/color_plot.png",
    caption: "Metamaterials talk, Crete 2023",
    category: "conferences",
    subcategory: "metamaterials",
    alt: "Metamaterials 2023"
  },
  // --- Conferences / SUPR 2024
  {
    id: 2,
    src: "/images/Picture2_7.png",
    caption: "SUPR poster session, Stanford 2024",
    category: "conferences",
    subcategory: "supr",
    alt: "SUPR 2024"
  },
  // --- Research (lab + fieldwork)
  {
    id: 3,
    src: "/images/0090 top DF.png",
    caption: "Cleanroom nanofabrication",
    category: "research",
    alt: "Lab work"
  },
  {
    id: 4,
    src: "/images/1_RI.png",
    caption: "Field measurement setup",
    category: "research",
    alt: "Field work"
  },
  // --- Life out of the Lab / Hiking
  {
    id: 5,
    src: "/images/hiking.jpg",
    caption: "Weekend hike near Lyngby",
    category: "life",
    subcategory: "hiking",
    alt: "Hiking"
  },
  // --- Life out of the Lab / Winter
  {
    id: 6,
    src: "/images/winter.jpg",
    caption: "Winter walk by the lakeside",
    category: "life",
    subcategory: "winter",
    alt: "Winter scene"
  },
  // --- Life out of the Lab / Colors
  {
    id: 7,
    src: "/images/colors.jpg",
    caption: "Autumn colors on campus",
    category: "life",
    subcategory: "colors",
    alt: "Colorful leaves"
  }
];

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const openLightbox = (img: GalleryImage) => {
    setSelectedImage(img);
    setLightboxOpen(true);
  };
  const closeLightbox = () => setLightboxOpen(false);

  const navigateLightbox = (dir: "next" | "prev") => {
    if (!selectedImage) return;
    const idx = galleryImages.findIndex((i) => i.id === selectedImage.id);
    const newIdx =
      dir === "next"
        ? (idx + 1) % galleryImages.length
        : (idx - 1 + galleryImages.length) % galleryImages.length;
    setSelectedImage(galleryImages[newIdx]);
  };

  // filter helper
  const renderGrid = (filterFn: (img: GalleryImage) => boolean) => (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {galleryImages.filter(filterFn).map((img) => (
        <GalleryItem key={img.id} image={img} onClick={() => openLightbox(img)} />
      ))}
    </div>
  );

  return (
    <section id="gallery" className="py-16">
      <div className="section-container">
        <h2 className="section-title text-center">Photo Gallery</h2>
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
          Browse by category and subcategory.
        </p>

        {/* Top‐level tabs */}
        <Tabs defaultValue="all" className="w-full">
          <TabsList className="flex flex-wrap justify-center gap-2 mb-8">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="conferences">Conferences</TabsTrigger>
            <TabsTrigger value="research">Research</TabsTrigger>
            <TabsTrigger value="life">Life out of the Lab</TabsTrigger>
          </TabsList>

          {/* All */}
          <TabsContent value="all">{renderGrid(() => true)}</TabsContent>

          {/* Conferences with nested sub‐tabs */}
          <TabsContent value="conferences">
            <Tabs defaultValue="metamaterials" className="w-full mb-6">
              <TabsList className="flex justify-center gap-2">
                <TabsTrigger value="metamaterials">Metamaterials 2023</TabsTrigger>
                <TabsTrigger value="supr">SUPR 2024</TabsTrigger>
              </TabsList>
              <TabsContent value="metamaterials">
                {renderGrid((img) => img.category === "conferences" && img.subcategory === "metamaterials")}
              </TabsContent>
              <TabsContent value="supr">
                {renderGrid((img) => img.category === "conferences" && img.subcategory === "supr")}
              </TabsContent>
            </Tabs>
          </TabsContent>

          {/* Research: show anything tagged research */}
          <TabsContent value="research">
            {renderGrid((img) => img.category === "research")}
          </TabsContent>

          {/* Life out of the Lab with nested sub‐tabs */}
          <TabsContent value="life">
            <Tabs defaultValue="hiking" className="w-full mb-6">
              <TabsList className="flex justify-center gap-2">
                <TabsTrigger value="hiking">Hiking</TabsTrigger>
                <TabsTrigger value="winter">Winter</TabsTrigger>
                <TabsTrigger value="colors">Colors</TabsTrigger>
              </TabsList>
              <TabsContent value="hiking">
                {renderGrid((img) => img.category === "life" && img.subcategory === "hiking")}
              </TabsContent>
              <TabsContent value="winter">
                {renderGrid((img) => img.category === "life" && img.subcategory === "winter")}
              </TabsContent>
              <TabsContent value="colors">
                {renderGrid((img) => img.category === "life" && img.subcategory === "colors")}
              </TabsContent>
            </Tabs>
          </TabsContent>
        </Tabs>

        {/* Lightbox */}
        <Dialog open={lightboxOpen} onOpenChange={setLightboxOpen}>
          <DialogContent className="max-w-4xl p-0 bg-transparent border-none shadow-none">
            {selectedImage && (
              <div className="relative bg-black rounded-lg overflow-hidden">
                <button
                  onClick={closeLightbox}
                  className="absolute top-4 right-4 text-white hover:text-gray-300"
                >
                  <X size={24} />
                </button>
                <img
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  className="w-full h-auto object-contain"
                />
                <button
                  onClick={() => navigateLightbox("prev")}
                  className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black/50 p-2 rounded-full text-white"
                >
                  <ChevronLeft size={24} />
                </button>
                <button
                  onClick={() => navigateLightbox("next")}
                  className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black/50 p-2 rounded-full text-white"
                >
                  <ChevronRight size={24} />
                </button>
                <div className="bg-black/80 text-white p-4 text-sm">
                  {selectedImage.caption}
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

const GalleryItem = ({
  image,
  onClick
}: {
  image: GalleryImage;
  onClick: () => void;
}) => (
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
