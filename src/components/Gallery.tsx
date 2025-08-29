import { Button } from "@/components/ui/button";
import { Upload } from "lucide-react";

const Gallery = () => {
  // Placeholder gallery images - in a real app these would come from a backend
  const galleryImages = [
    {
      title: "Aventura en Buggy - Playa Dorada",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=400&fit=crop&crop=center",
      alt: "Buggy adventure on golden beach"
    },
    {
      title: "Explorando Cuevas Naturales",
      image: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=500&h=400&fit=crop&crop=center",
      alt: "Natural cave exploration"
    },
    {
      title: "Cultura y Tradiciones Locales",
      image: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=500&h=400&fit=crop&crop=center",
      alt: "Local culture and traditions"
    },
    {
      title: "Sunset ATV Adventure",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=400&fit=crop&crop=center",
      alt: "ATV adventure at sunset"
    },
    {
      title: "Party Boat Caribbean Vibes",
      image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=500&h=400&fit=crop&crop=center",
      alt: "Party boat in Caribbean waters"
    },
    {
      title: "Paradise Beach Experience",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=400&fit=crop&crop=center",
      alt: "Paradise beach luxury experience"
    }
  ];

  const handleSharePhotos = () => {
    const message = "¡Hola! Me gustaría compartir mis fotos de la aventura con Dominican Pride Travel.";
    const whatsappUrl = `https://wa.me/8094986352?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section id="galeria" className="py-20 bg-gradient-card">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Galería de <span className="text-accent">Aventuras</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Mira las increíbles experiencias que nuestros clientes han vivido. ¡Comparte tus fotos y sé parte
            de nuestra comunidad de aventureros!
          </p>
          
          {/* Share Photos Button */}
          <Button
            onClick={handleSharePhotos}
            className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-lg mb-12"
            size="lg"
          >
            <Upload className="w-5 h-5 mr-2" />
            Comparte Tus Fotos
          </Button>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-elegant transition-all duration-500 hover:-translate-y-2"
            >
              {/* Image */}
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
              </div>
              
              {/* Overlay with Title */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-white text-lg font-semibold">
                    {item.title}
                  </h3>
                </div>
              </div>

              {/* Hover Effect Indicator */}
              <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-2 h-2 bg-white rounded-full"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 p-8 bg-accent-light rounded-3xl">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              ¡Comparte Tu Experiencia!
            </h3>
            <p className="text-muted-foreground mb-6">
              ¿Fuiste en uno de nuestros tours? Nos encantaría ver tus fotos y experiencias. Envíanos tus
              mejores momentos y podrían aparecer en nuestra galería oficial.
            </p>
            <Button
              onClick={handleSharePhotos}
              variant="outline"
              className="border-accent text-accent hover:bg-accent hover:text-accent-foreground transition-all duration-300"
            >
              <Upload className="w-4 h-4 mr-2" />
              Enviar Mis Fotos
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;