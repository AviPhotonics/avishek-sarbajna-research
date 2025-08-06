import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface GalleryImage {
  id: number;
  src: string;
  caption: string;
  category: "conferences" | "research" | "life" | "all";
  subcategory?: string;
  alt: string;
}

const galleryImages: GalleryImage[] = [
  // Conferences / Metamaterials 2023
  { id: 1, src: "/color%20plot.png", caption: "Metamaterials talk, Crete 2023", category: "conferences", subcategory: "metamaterials", alt: "Metamaterials 2023" },
  // Conferences / SUPR 2024
  { id: 2, src: "/Picture2_7.png", caption: "SUPR poster session, Stanford 2024", category: "conferences", subcategory: "supr", alt: "SUPR 2024" },
  // Research
  { id: 3, src: "/0090%20top%20DF.jpg", caption: "Cleanroom nanofabrication", category: "research", alt: "Lab work" },
  { id: 4, src: "/1_RI.png", caption: "Field measurement setup", category: "research", alt: "Field work" },
  // Life out of the Lab / Team 2DPHYS
  { id: 7, src: "/team%20day%201.jpg", caption: "Team ANO: Team day", category: "life", subcategory: "team", alt: "Team day" },
  { id: 8, src: "/4.jpg", caption: "Christmas dinner 2022", category: "life", subcategory: "team", alt: "Christmas dinner 2022" },
  { id: 9, src: "/Foto%206%20BBQ.jpg", caption: "BBQ event", category: "life", subcategory: "team", alt: "BBQ event" },
  { id: 10, src: "/team.jpeg", caption: "Double grant celebration", category: "life", subcategory: "team", alt: "Double grant celebration" },
  { id: 11, src: "/christmas.dinner.jpeg", caption: "Christmas lunch 2024", category: "life", subcategory: "team", alt: "Christmas lunch 2024" },
  // Life out of the Lab / M.Sc. Convocation
  { id: 12, src: "/20230928-MH-01-019.jpg", caption: "M.Sc. Convocation Ceremony Photo 1", category: "life", subcategory: "convocation", alt: "Convocation photo 1" },
  { id: 13, src: "/20230928-MH-01-034.jpg", caption: "M.Sc. Convocation Ceremony Photo 2", category: "life", subcategory: "convocation", alt: "Convocation photo 2" },
  { id: 14, src: "/KIT.jpg", caption: "M.Sc. Convocation at KIT", category: "life", subcategory: "convocation", alt: "KIT Convocation" }
];

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const openLightbox = (img: GalleryImage) => { setSelectedImage(img); setLightboxOpen(true); };
  const closeLightbox = () => setLightboxOpen(false);
  const navigateLightbox = (dir: "next" | "prev") => {
    if (!selectedImage) return;
    const idx = galleryImages.findIndex((i) => i.id === selectedImage.id);
    const newIdx = dir === "next" ? (idx + 1) % galleryImages.length : (idx - 1 + galleryImages.length) % galleryImages.length;
    setSelectedImage(galleryImages[newIdx]);
  };

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
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">Browse by category and subcategory.</p>

        <Tabs defaultValue="all" className="w-full">
          <TabsList className="flex flex-wrap justify-center gap-2 mb-8">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="conferences">Conferences</TabsTrigger>
            <TabsTrigger value="research">Research</TabsTrigger>
            <TabsTrigger value="life">Life out of the Lab</TabsTrigger>
          </TabsList>

          <TabsContent value="all"> {renderGrid(() => true)} </TabsContent>

          <TabsContent value="conferences">
            <Tabs defaultValue="metamaterials" className="w-full mb-6">
              <TabsList className="flex justify-center gap-2">
                <TabsTrigger value="metamaterials">Metamaterials 2023</TabsTrigger>
                <TabsTrigger value="supr">SUPR 2024</TabsTrigger>
              </TabsList>
              <TabsContent value="metamaterials">{renderGrid((img) => img.category === "conferences" && img.subcategory === "metamaterials")}</TabsContent>
              <TabsContent value="supr">{renderGrid((img) => img.category === "conferences" && img.subcategory === "supr")}</TabsContent>
            </Tabs>
          </TabsContent>

          <TabsContent value="research">{renderGrid((img) => img.category === "research")}</TabsContent>

          <TabsContent value="life">
            <Tabs defaultValue="team" className="w-full mb-6">
              <TabsList className="flex justify-center gap-2">
                <TabsTrigger value="team">Team 2DPHYS</TabsTrigger>
                <TabsTrigger value="convocation">M.Sc. Convocation</TabsTrigger>
              </TabsList>
              <TabsContent value="team">{renderGrid((img) => img.category === "life" && img.subcategory === "team")}</TabsContent>
              <TabsContent value="convocation">{renderGrid((img) => img.category === "life" && img.subcategory === "convocation")}</TabsContent>
            </Tabs>
          </TabsContent>
        </Tabs>

        <Dialog open={lightboxOpen} onOpenChange={setLightboxOpen}>
          <DialogContent className="max-w-4xl p-0 bg-transparent border-none shadow-none">
            {selectedImage && (
              <div className="relative bg-black rounded-lg overflow-hidden">
                <button onClick={closeLightbox} className="absolute top-4 right-4 text-white hover:text-gray-300"><X size={24} /></button>
                <img src={selectedImage.src} alt={selectedImage.alt} className="w-full h-auto object-contain" />
                <button onClick={() => navigateLightbox("prev")} className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black/50 p-2 rounded-full text-white"><ChevronLeft size={24} /></button>
                <button onClick={() => navigateLightbox("next")} className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black/50 p-2 rounded-full text-white"><ChevronRight size={24} /></button>
                <div className="bg-black/80 text-white p-4 text-sm">{selectedImage.caption}</div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

const GalleryItem = ({ image, onClick }: { image: GalleryImage; onClick: () => void }) => (
  <div className="group relative overflow-hidden rounded-lg cursor-pointer hover-lift border-2 border-green-500" onClick={onClick}>
    <div className="aspect-[4/3] overflow-hidden border-2 border-yellow-500">
      <img 
        src={image.src} 
        alt={image.alt} 
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 border-2 border-purple-500"
        onLoad={(e) => {
          console.log(`✅ Gallery image loaded: ${image.src}`);
          console.log(`Gallery image dimensions: ${e.currentTarget.naturalWidth}x${e.currentTarget.naturalHeight}`);
          console.log(`Gallery display dimensions: ${e.currentTarget.width}x${e.currentTarget.height}`);
        }}
        onError={(e) => {
          console.error(`❌ Failed to load gallery image: ${image.src}`);
          console.error('Error details:', e);
        }}
      />
    </div>
    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-4 flex flex-col justify-end">
      <p className="text-white text-sm">{image.caption}</p>
    </div>
  </div>
);

export default GallerySection;