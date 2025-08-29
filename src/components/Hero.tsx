import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";

const Hero = () => {
  const handleWhatsApp = () => {
    window.open("https://wa.me/8094986352", "_blank");
  };

  const scrollToBooking = () => {
    document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto">
          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            ¡Vive la{" "}
            <span className="bg-gradient-hero bg-clip-text text-transparent">
              aventura
            </span>
            ,{" "}
            <br className="hidden md:block" />
            descubre el{" "}
            <span className="text-accent">
              paraíso!
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl mb-4 text-gray-200 font-light">
            Excursiones extremas, acuáticas y paradisíacas en República Dominicana.
          </p>
          <p className="text-lg md:text-xl mb-12 text-gray-300">
            Tu próxima aventura te está esperando.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              onClick={scrollToBooking}
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-primary px-8 py-4 text-lg font-semibold transition-all duration-300 hover:scale-105"
            >
              Explora Ahora
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            
            <Button
              onClick={handleWhatsApp}
              variant="outline"
              size="lg"
              className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm px-8 py-4 text-lg font-semibold transition-all duration-300 hover:scale-105"
            >
              <Calendar className="w-5 h-5 mr-2" />
              Reservar Aventura
            </Button>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">500+</div>
              <div className="text-gray-300">Aventureros Felices</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">10+</div>
              <div className="text-gray-300">Años de Experiencia</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">100%</div>
              <div className="text-gray-300">Satisfacción Garantizada</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;