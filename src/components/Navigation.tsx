import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";
import dominicanPrideLogo from "@/assets/dominican-pride-logo.png";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "Inicio", href: "#inicio" },
    { label: "Excursiones", href: "#excursiones" },
    { label: "¿Por qué elegirnos?", href: "#por-que" },
    { label: "Galería", href: "#galeria" },
    { label: "Contacto", href: "#contacto" },
  ];

  const handleWhatsApp = () => {
    window.open("https://wa.me/8094986352", "_blank");
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img 
              src={dominicanPrideLogo} 
              alt="Dominican Pride Travel Logo" 
              className="h-10 w-10"
            />
            <div className="hidden sm:block">
              <h1 className="text-lg font-bold text-primary">Dominican Pride Travel</h1>
              <p className="text-xs text-muted-foreground">¡Vive la aventura!</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* WhatsApp Button */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="text-right text-sm">
              <p className="text-muted-foreground">Contáctanos</p>
              <p className="font-semibold text-primary">809-498-6352</p>
            </div>
            <Button
              onClick={handleWhatsApp}
              className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-lg"
            >
              <Phone className="w-4 h-4 mr-2" />
              WhatsApp
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-foreground" />
            ) : (
              <Menu className="w-6 h-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-border bg-background">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="block px-3 py-2 text-base font-medium text-foreground hover:text-primary hover:bg-accent-light rounded-md transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <div className="px-3 py-4 border-t border-border">
                <Button
                  onClick={handleWhatsApp}
                  className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  WhatsApp: 809-498-6352
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;