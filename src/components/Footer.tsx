import { Phone, Mail, MapPin, Instagram, Facebook, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";
import dominicanPrideLogo from "@/assets/dominican-pride-logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleWhatsApp = () => {
    window.open("https://wa.me/8094986352", "_blank");
  };

  const handleSocialClick = (platform: string) => {
    // In a real app, these would be actual social media links
    const message = `¡Hola! Me interesa seguir a Dominican Pride Travel en ${platform}.`;
    const whatsappUrl = `https://wa.me/8094986352?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <footer className="bg-gradient-hero text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <img 
                src={dominicanPrideLogo} 
                alt="Dominican Pride Travel Logo" 
                className="h-12 w-12 filter brightness-0 invert"
              />
              <div>
                <h3 className="text-xl font-bold">Dominican Pride Travel</h3>
                <p className="text-sm opacity-80">¡Vive la aventura!</p>
              </div>
            </div>
            <p className="text-sm opacity-90 leading-relaxed">
              Creamos experiencias únicas e inolvidables en República Dominicana. 
              Más de 10 años convirtiendo sueños en aventuras reales.
            </p>
            <div className="flex space-x-3">
              <Button
                variant="outline"
                size="sm"
                onClick={() => handleSocialClick("Instagram")}
                className="border-white/30 text-white hover:bg-white/10 transition-all duration-300"
              >
                <Instagram className="w-4 h-4" />
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => handleSocialClick("Facebook")}
                className="border-white/30 text-white hover:bg-white/10 transition-all duration-300"
              >
                <Facebook className="w-4 h-4" />
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => handleSocialClick("YouTube")}
                className="border-white/30 text-white hover:bg-white/10 transition-all duration-300"
              >
                <Youtube className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h4 className="text-lg font-bold">Nuestros Servicios</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#excursiones" className="opacity-90 hover:opacity-100 hover:text-accent transition-all duration-200">
                  Tours en Buggy
                </a>
              </li>
              <li>
                <a href="#excursiones" className="opacity-90 hover:opacity-100 hover:text-accent transition-all duration-200">
                  Excursiones ATV 4x4
                </a>
              </li>
              <li>
                <a href="#excursiones" className="opacity-90 hover:opacity-100 hover:text-accent transition-all duration-200">
                  Fiesta en Yate
                </a>
              </li>
              <li>
                <a href="#excursiones" className="opacity-90 hover:opacity-100 hover:text-accent transition-all duration-200">
                  Paquetes Combinados
                </a>
              </li>
              <li>
                <a href="#excursiones" className="opacity-90 hover:opacity-100 hover:text-accent transition-all duration-200">
                  Tours Personalizados
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-lg font-bold">Enlaces Rápidos</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#inicio" className="opacity-90 hover:opacity-100 hover:text-accent transition-all duration-200">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#excursiones" className="opacity-90 hover:opacity-100 hover:text-accent transition-all duration-200">
                  Excursiones
                </a>
              </li>
              <li>
                <a href="#por-que" className="opacity-90 hover:opacity-100 hover:text-accent transition-all duration-200">
                  ¿Por qué elegirnos?
                </a>
              </li>
              <li>
                <a href="#galeria" className="opacity-90 hover:opacity-100 hover:text-accent transition-all duration-200">
                  Galería
                </a>
              </li>
              <li>
                <a href="#contacto" className="opacity-90 hover:opacity-100 hover:text-accent transition-all duration-200">
                  Reservar
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="text-lg font-bold">Contacto</h4>
            <div className="space-y-4 text-sm">
              <div className="flex items-start space-x-3">
                <Phone className="w-4 h-4 mt-1 text-accent" />
                <div>
                  <p className="font-medium">WhatsApp</p>
                  <button 
                    onClick={handleWhatsApp}
                    className="opacity-90 hover:opacity-100 hover:text-accent transition-all duration-200"
                  >
                    809-498-6352
                  </button>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Mail className="w-4 h-4 mt-1 text-accent" />
                <div>
                  <p className="font-medium">Email</p>
                  <p className="opacity-90">info@dominicanpridetravel.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 mt-1 text-accent" />
                <div>
                  <p className="font-medium">Ubicación</p>
                  <p className="opacity-90">República Dominicana</p>
                  <p className="opacity-90">Disponible en todo el país</p>
                </div>
              </div>
            </div>

            {/* WhatsApp CTA */}
            <Button
              onClick={handleWhatsApp}
              className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold shadow-lg transition-all duration-300 hover:scale-105"
            >
              <Phone className="w-4 h-4 mr-2" />
              Contáctanos Ahora
            </Button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/20">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm opacity-80">
              © {currentYear} Dominican Pride Travel. Todos los derechos reservados.
            </div>
            <div className="flex space-x-6 text-xs opacity-80">
              <a href="#" className="hover:opacity-100 transition-opacity">Política de Privacidad</a>
              <a href="#" className="hover:opacity-100 transition-opacity">Términos de Servicio</a>
              <a href="#" className="hover:opacity-100 transition-opacity">Política de Cancelación</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;